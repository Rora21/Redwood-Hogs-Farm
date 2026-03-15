import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'

import authRoutes from './routes/auth'
import pigsRoutes from './routes/pigs'
import servicesRoutes from './routes/services'
import galleryRoutes from './routes/gallery'
import farmInfoRoutes from './routes/farmInfo'
import aboutRoutes from './routes/about'
import uploadRoutes from './routes/upload'
import { errorHandler } from './middleware/errorHandler'

const app = express()
const PORT = process.env.PORT || 3001

app.use(helmet())
app.use(
  cors({
    origin: process.env.NEXT_ORIGIN || 'http://localhost:3000',
    credentials: true, // required for cookies to be sent cross-origin
  })
)
app.use(express.json())
app.use(cookieParser())

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/pigs', pigsRoutes)
app.use('/api/services', servicesRoutes)
app.use('/api/gallery', galleryRoutes)
app.use('/api/farm-info', farmInfoRoutes)
app.use('/api/about', aboutRoutes)
app.use('/api/upload', uploadRoutes)

// Health check
app.get('/api/health', (_req, res) => res.json({ status: 'ok' }))

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`✓ API server running on http://localhost:${PORT}`)
})
