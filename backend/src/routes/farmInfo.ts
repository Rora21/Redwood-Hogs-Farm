/**
 * @swagger
 * tags:
 *   name: Farm Info
 *   description: Farm contact details and business hours (single record)
 */

import { Router, Request, Response } from 'express'
import { query } from '../config/db'
import { verifyToken } from '../middleware/auth'

const router = Router()
router.use(verifyToken)

/**
 * @swagger
 * /api/farm-info:
 *   get:
 *     summary: Get farm contact info and hours
 *     tags: [Farm Info]
 *     responses:
 *       200:
 *         description: Farm info record
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FarmInfo'
 */
router.get('/', async (_req: Request, res: Response): Promise<void> => {
  try {
    const result = await query('SELECT * FROM farm_info WHERE id = 1')
    res.json(result.rows[0] || {})
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
})

/**
 * @swagger
 * /api/farm-info:
 *   put:
 *     summary: Update farm contact info and hours
 *     tags: [Farm Info]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               farm_name:      { type: string, example: Redwood Hogs Farm }
 *               location:       { type: string, example: "Musha, Rwamagana District, Rwanda" }
 *               email:          { type: string, example: info@redwoodhogsfarm.com }
 *               phone:          { type: string, example: "+250 700 000 000" }
 *               hours_weekday:  { type: string, example: "Monday – Friday: 8:00 AM – 5:00 PM" }
 *               hours_saturday: { type: string, example: "Saturday: 8:00 AM – 2:00 PM" }
 *               hours_sunday:   { type: string, example: "Sunday: Closed" }
 *     responses:
 *       200:
 *         description: Updated farm info
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FarmInfo'
 */
router.put('/', async (req: Request, res: Response): Promise<void> => {
  const { farm_name, location, email, phone, hours_weekday, hours_saturday, hours_sunday } =
    req.body
  try {
    const result = await query(
      `INSERT INTO farm_info (id, farm_name, location, email, phone, hours_weekday, hours_saturday, hours_sunday)
       VALUES (1, $1, $2, $3, $4, $5, $6, $7)
       ON CONFLICT (id) DO UPDATE
       SET farm_name=$1, location=$2, email=$3, phone=$4,
           hours_weekday=$5, hours_saturday=$6, hours_sunday=$7, updated_at=NOW()
       RETURNING *`,
      [
        farm_name || '',
        location || '',
        email || '',
        phone || '',
        hours_weekday || '',
        hours_saturday || '',
        hours_sunday || '',
      ]
    )
    res.json(result.rows[0])
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
})

export default router
