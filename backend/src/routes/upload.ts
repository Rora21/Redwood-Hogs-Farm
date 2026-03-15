import { Router, Request, Response } from 'express'
import { verifyToken } from '../middleware/auth'
import { uploadSingle } from '../middleware/upload'

const router = Router()
router.use(verifyToken)

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
