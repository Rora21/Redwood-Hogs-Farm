/**
 * @swagger
 * tags:
 *   name: Upload
 *   description: General-purpose image upload
 */

import { Router, Request, Response } from 'express'
import { verifyToken } from '../middleware/auth'
import { uploadSingle } from '../middleware/upload'

const router = Router()
router.use(verifyToken)

/**
 * @swagger
 * /api/upload:
 *   post:
 *     summary: Upload a single image and get back its public URL
 *     tags: [Upload]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required: [image]
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: Image file (JPEG, PNG, WebP, or GIF, max 10 MB)
 *     responses:
 *       200:
 *         description: Public URL of the uploaded image
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UploadResponse'
 *       400:
 *         description: No file uploaded or invalid file type/size
 */
// General-purpose image upload endpoint.
// Returns the public URL of the uploaded file.
router.post('/', (req: Request, res: Response): void => {
  uploadSingle(req, res, (err) => {
    if (err) {
      res.status(400).json({ message: err.message })
      return
    }
    if (!req.file) {
      res.status(400).json({ message: 'No file uploaded' })
      return
    }
    const url = `/images/uploads/${req.file.filename}`
    res.json({ url })
  })
})

export default router
