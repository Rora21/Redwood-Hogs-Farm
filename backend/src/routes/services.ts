import { Router, Request, Response } from 'express'
import { query } from '../config/db'
import { verifyToken } from '../middleware/auth'

const router = Router()
router.use(verifyToken)

router.get('/', async (_req: Request, res: Response): Promise<void> => {
  try {
    const result = await query('SELECT * FROM services ORDER BY sort_order ASC, created_at ASC')
    res.json(result.rows)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
})

router.get('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await query('SELECT * FROM services WHERE id = $1', [req.params.id])
    if (!result.rows[0]) {
      res.status(404).json({ message: 'Service not found' })
      return
    }
    res.json(result.rows[0])
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
})

router.post('/', async (req: Request, res: Response): Promise<void> => {
  const { title, description, icon_svg, sort_order, is_active } = req.body
  if (!title?.trim()) {
    res.status(400).json({ message: 'Title is required' })
    return
  }
  try {
    const result = await query(
      `INSERT INTO services (title, description, icon_svg, sort_order, is_active)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [title.trim(), description || '', icon_svg || '', sort_order ?? 0, is_active ?? true]
    )
    res.status(201).json(result.rows[0])
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
})

router.patch('/:id', async (req: Request, res: Response): Promise<void> => {
  const { title, description, icon_svg, sort_order, is_active } = req.body
  if (!title?.trim()) {
    res.status(400).json({ message: 'Title is required' })
    return
  }
  try {
    const result = await query(
      `UPDATE services
       SET title=$1, description=$2, icon_svg=$3, sort_order=$4, is_active=$5, updated_at=NOW()
       WHERE id=$6 RETURNING *`,
      [title.trim(), description || '', icon_svg || '', sort_order ?? 0, is_active ?? true, req.params.id]
    )
    if (!result.rows[0]) {
      res.status(404).json({ message: 'Service not found' })
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
    await query('DELETE FROM services WHERE id = $1', [req.params.id])
    res.json({ message: 'Deleted' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
})

export default router
