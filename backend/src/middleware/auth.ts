import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export interface AuthRequest extends Request {
  user?: { id: number; email: string }
}

export function verifyToken(req: AuthRequest, res: Response, next: NextFunction): void {
  const cookieName = process.env.COOKIE_NAME || 'admin_token'
  const token = req.cookies?.[cookieName]

  if (!token) {
    res.status(401).json({ message: 'Unauthorized' })
    return
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      id: number
      email: string
    }
    req.user = decoded
    next()
  } catch {
    res.status(401).json({ message: 'Token expired or invalid' })
  }
}
