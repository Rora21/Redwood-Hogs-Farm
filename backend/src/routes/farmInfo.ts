import { Router, Request, Response } from 'express'
import { query } from '../config/db'
import { verifyToken } from '../middleware/auth'

const router = Router()
router.use(verifyToken)

router.get('/', async (_req: Request, res: Response): Promise<void> => {
  try {
    const result = await query('SELECT * FROM farm_info WHERE id = 1')
    res.json(result.rows[0] || {})
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
})

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
