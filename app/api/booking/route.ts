import { NextResponse } from 'next/server'
import { isEmail, escapeHtml } from '../../helpers/validate'

// Handles the "book a call" form submitted from bookingModal.tsx and forwards it
// to the email provider.
const RESEND_API_KEY = process.env.RESEND_API_KEY

interface BookingRequest {
  name: string
  email: string
  message: string
}

export async function POST(req: Request) {
  if (!RESEND_API_KEY) {
    console.error('booking: RESEND_API_KEY is not configured')
    return NextResponse.json({ error: 'server misconfigured' }, { status: 500 })
  }

  let body: Partial<BookingRequest>
  try {
    body = (await req.json()) as Partial<BookingRequest>
  } catch {
    return NextResponse.json({ error: 'invalid JSON body' }, { status: 400 })
  }

  const name = typeof body.name === 'string' ? body.name.trim() : ''
  const email = typeof body.email === 'string' ? body.email.trim() : ''
  const message = typeof body.message === 'string' ? body.message.trim() : ''

  if (name.length === 0 || !isEmail(email) || message.length === 0) {
    return NextResponse.json({ error: 'bad request' }, { status: 400 })
  }

  // Do not log PII (email address / message body). A coarse marker is enough.
  console.log('New booking received')

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'portfolio@example.com',
        to: email,
        subject: 'Booking from ' + name,
        html: escapeHtml(message),
      }),
    })

    if (!res.ok) {
      console.error('booking: email provider returned ' + res.status)
      return NextResponse.json({ error: 'failed to send' }, { status: 502 })
    }
  } catch (e) {
    console.error('booking: email request failed', e)
    return NextResponse.json({ error: 'failed to send' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
