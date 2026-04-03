/**
 * @swagger
 * tags:
 *   name: Pigs
 *   description: Pig listings management
 */

import { Router, Request, Response } from 'express'
import { query } from '../config/db'
import { verifyToken } from '../middleware/auth'

const router = Router()

// All routes are protected
router.use(verifyToken)

/**
 * @swagger
 * /api/pigs:
 *   get:
 *     summary: List all pigs
 *     tags: [Pigs]
 *     responses:
 *       200:
 *         description: Array of pig records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pig'
 *       401:
 *         description: Not authenticated
 */
router.get('/', async (_req: Request, res: Response): Promise<void> => {
  try {
    const result = await query('SELECT * FROM pigs ORDER BY sort_order ASC, created_at ASC')
    res.json(result.rows)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
})

/**
 * @swagger
 * /api/pigs/{id}:
 *   get:
 *     summary: Get a pig by ID
 *     tags: [Pigs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Pig record
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pig'
 *       404:
 *         description: Pig not found
 */
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await query('SELECT * FROM pigs WHERE id = $1', [req.params.id])
    if (!result.rows[0]) {
      res.status(404).json({ message: 'Pig not found' })
      return
    }
    res.json(result.rows[0])
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
})

/**
 * @swagger
 * /api/pigs:
 *   post:
 *     summary: Create a pig
 *     tags: [Pigs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PigInput'
 *     responses:
 *       201:
 *         description: Created pig
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pig'
 *       400:
 *         description: Name is required
 */
router.post('/', async (req: Request, res: Response): Promise<void> => {
  const { name, description, image_url, sort_order, is_active } = req.body
  if (!name?.trim()) {
    res.status(400).json({ message: 'Name is required' })
    return
  }
  try {
    const result = await query(
      `INSERT INTO pigs (name, description, image_url, sort_order, is_active)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [name.trim(), description || '', image_url || '', sort_order ?? 0, is_active ?? true]
    )
    res.status(201).json(result.rows[0])
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
})

/**
 * @swagger
 * /api/pigs/{id}:
 *   patch:
 *     summary: Update a pig
 *     tags: [Pigs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PigInput'
 *     responses:
 *       200:
 *         description: Updated pig
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pig'
 *       404:
 *         description: Pig not found
 */
router.patch('/:id', async (req: Request, res: Response): Promise<void> => {
  const { name, description, image_url, sort_order, is_active } = req.body
  if (!name?.trim()) {
    res.status(400).json({ message: 'Name is required' })
    return
  }
  try {
    const result = await query(
      `UPDATE pigs
       SET name=$1, description=$2, image_url=$3, sort_order=$4, is_active=$5, updated_at=NOW()
       WHERE id=$6 RETURNING *`,
      [name.trim(), description || '', image_url || '', sort_order ?? 0, is_active ?? true, req.params.id]
    )
    if (!result.rows[0]) {
      res.status(404).json({ message: 'Pig not found' })
      return
    }
    res.json(result.rows[0])
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
})

/**
 * @swagger
 * /api/pigs/{id}:
 *   delete:
 *     summary: Delete a pig
 *     tags: [Pigs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Deleted
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MessageResponse'
 *       401:
 *         description: Not authenticated
 */
router.delete('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    await query('DELETE FROM pigs WHERE id = $1', [req.params.id])
    res.json({ message: 'Deleted' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
})

export default router
