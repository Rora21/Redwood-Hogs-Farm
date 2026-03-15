import { Router, Request, Response } from 'express'
import fs from 'fs'
import path from 'path'
import { query } from '../config/db'
import { verifyToken } from '../middleware/auth'
import { uploadSingle } from '../middleware/upload'

const router = Router()
router.use(verifyToken)

const uploadsDir = path.resolve(process.env.UPLOADS_DIR || '../public/images/uploads')

router.get('/', async (_req: Request, res: Response): Promise<void> => {
  try {
    const result = await query(
      'SELECT * FROM gallery_images ORDER BY sort_order ASC, created_at ASC'
    )
    res.json(result.rows)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
})

router.get('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await query('SELECT * FROM gallery_images WHERE id = $1', [req.params.id])
    if (!result.rows[0]) {
      res.status(404).json({ message: 'Image not found' })
      return
    }
    res.json(result.rows[0])
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
})

// Upload image and insert gallery record
router.post('/', (req: Request, res: Response): void => {
  uploadSingle(req, res, async (err) => {
    if (err) {
      res.status(400).json({ message: err.message })
      return
    }
    if (!req.file) {
      res.status(400).json({ message: 'Image file is required' })
      return
    }

    const { alt, sort_order } = req.body
    const src = `/images/uploads/${req.file.filename}`

    try {
      const result = await query(
        `INSERT INTO gallery_images (src, alt, sort_order)
         VALUES ($1, $2, $3) RETURNING *`,
        [src, alt || req.file.originalname, sort_order ?? 0]
      )
      res.status(201).json(result.rows[0])
    } catch (dbErr) {
      console.error(dbErr)
      res.status(500).json({ message: 'Server error' })
    }
  })
})

router.patch('/:id', async (req: Request, res: Response): Promise<void> => {
  const { alt, sort_order, is_active } = req.body
  try {
    const result = await query(
      `UPDATE gallery_images
       SET alt=$1, sort_order=$2, is_active=$3, updated_at=NOW()
       WHERE id=$4 RETURNING *`,
      [alt || '', sort_order ?? 0, is_active ?? true, req.params.id]
    )
    if (!result.rows[0]) {
      res.status(404).json({ message: 'Image not found' })
      return
    }
    res.json(result.rows[0])
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
})

router.delete('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await query('SELECT src FROM gallery_images WHERE id = $1', [req.params.id])
    if (result.rows[0]) {
      // Delete physical file
      const filename = path.basename(result.rows[0].src)
      const filePath = path.join(uploadsDir, filename)
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath)
    }
    await query('DELETE FROM gallery_images WHERE id = $1', [req.params.id])
    res.json({ message: 'Deleted' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
})

// Batch reorder
router.patch('/reorder/batch', async (req: Request, res: Response): Promise<void> => {
  const items: { id: number; sort_order: number }[] = req.body
  if (!Array.isArray(items)) {
    res.status(400).json({ message: 'Expected an array of {id, sort_order}' })
    return
  }
  try {
    await Promise.all(
      items.map(({ id, sort_order }) =>
        query('UPDATE gallery_images SET sort_order=$1 WHERE id=$2', [sort_order, id])
      )
    )
    res.json({ message: 'Reordered' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
})

export default router
