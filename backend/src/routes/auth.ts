import { Router, Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { query } from '../config/db'
import { verifyToken, AuthRequest } from '../middleware/auth'

const router = Router()
const COOKIE = process.env.COOKIE_NAME || 'admin_token'
const EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d'
const MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000

router.post('/login', async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body
  if (!email || !password) {
    res.status(400).json({ message: 'Email and password are required' })
    return
  }

  try {
    const result = await query('SELECT * FROM admins WHERE email = $1', [email])
    const admin = result.rows[0]
    if (!admin) {
      res.status(401).json({ message: 'Invalid credentials' })
      return
    }

    const valid = await bcrypt.compare(password, admin.password)
    if (!valid) {
      res.status(401).json({ message: 'Invalid credentials' })
      return
    }

    const token = jwt.sign(
      { id: admin.id, email: admin.email },
      process.env.JWT_SECRET as string,
      { expiresIn: EXPIRES_IN }
    )

    res.cookie(COOKIE, token, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      maxAge: MAX_AGE_MS,
    })

    res.json({ message: 'Login successful' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
})

router.post('/logout', (_req: Request, res: Response) => {
  res.clearCookie(COOKIE)
  res.json({ message: 'Logged out' })
})

router.get('/me', verifyToken, (req: AuthRequest, res: Response) => {
  res.json({ id: req.user?.id, email: req.user?.email })
})

export default router
