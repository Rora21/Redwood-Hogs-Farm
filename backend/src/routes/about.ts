import { Router, Request, Response } from 'express'
import { query } from '../config/db'
import { verifyToken } from '../middleware/auth'

const router = Router()
router.use(verifyToken)

router.get('/', async (_req: Request, res: Response): Promise<void> => {
  try {
    const result = await query('SELECT * FROM about_content WHERE id = 1')
    res.json(result.rows[0] || {})
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
})

router.put('/', async (req: Request, res: Response): Promise<void> => {
  const {
    story_heading,
    story_text_1,
    story_text_2,
    story_text_3,
    story_image_url,
    mission_text,
    vision_text,
  } = req.body
  try {
    const result = await query(
      `INSERT INTO about_content
         (id, story_heading, story_text_1, story_text_2, story_text_3, story_image_url, mission_text, vision_text)
       VALUES (1, $1, $2, $3, $4, $5, $6, $7)
       ON CONFLICT (id) DO UPDATE
       SET story_heading=$1, story_text_1=$2, story_text_2=$3, story_text_3=$4,
           story_image_url=$5, mission_text=$6, vision_text=$7, updated_at=NOW()
       RETURNING *`,
      [
        story_heading || '',
        story_text_1 || '',
        story_text_2 || '',
        story_text_3 || '',
        story_image_url || '',
        mission_text || '',
        vision_text || '',
      ]
    )
    res.json(result.rows[0])
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
})

export default router
