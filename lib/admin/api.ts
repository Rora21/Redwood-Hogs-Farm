const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001'

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message)
  }
}

export async function apiFetch<T>(path: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    credentials: 'include', // send HttpOnly cookie automatically
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  })

  if (res.status === 401) {
    // Token expired — redirect to login
    if (typeof window !== 'undefined') {
      window.location.href = '/admin/login?expired=1'
    }
    throw new ApiError(401, 'Unauthorized')
  }

  if (!res.ok) {
    const body = await res.json().catch(() => ({ message: 'Request failed' }))
    throw new ApiError(res.status, body.message ?? 'Request failed')
  }

  return res.json()
}

/** Upload a file; returns { url: '/images/uploads/...' } */
export async function uploadImage(file: File): Promise<{ url: string }> {
  const form = new FormData()
  form.append('image', file)

  const res = await fetch(`${BASE_URL}/api/upload`, {
    method: 'POST',
    credentials: 'include',
    body: form,
  })

  if (!res.ok) {
    const body = await res.json().catch(() => ({ message: 'Upload failed' }))
    throw new ApiError(res.status, body.message)
  }

  return res.json()
}
