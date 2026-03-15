import { Request, Response, NextFunction } from 'express'
import { MulterError } from 'multer'

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  if (err instanceof MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      res.status(400).json({ message: 'File too large. Maximum size is 10 MB.' })
      return
    }
    res.status(400).json({ message: err.message })
    return
  }

  console.error(err)
  res.status(500).json({ message: err.message || 'Internal server error' })
}
