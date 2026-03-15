import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

const secret = new TextEncoder().encode(process.env.JWT_SECRET ?? '')
const COOKIE = process.env.COOKIE_NAME ?? 'admin_token'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const isLoginPage = pathname === '/admin/login'
  const token = request.cookies.get(COOKIE)?.value

  if (!token) {
    if (isLoginPage) return NextResponse.next()
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }

  try {
    await jwtVerify(token, secret)
    // Valid token — if trying to visit login, send to dashboard instead
    if (isLoginPage) {
      return NextResponse.redirect(new URL('/admin/pigs', request.url))
    }
    return NextResponse.next()
  } catch {
    // Expired or invalid
    if (isLoginPage) return NextResponse.next()
    const url = new URL('/admin/login', request.url)
    url.searchParams.set('expired', '1')
    return NextResponse.redirect(url)
  }
}

export const config = {
  matcher: ['/admin/:path*'],
}
