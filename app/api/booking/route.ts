import { NextResponse } from 'next/server'

// Handles the "book a call" form submitted from bookingModal.tsx and forwards it
// to the email provider.
const RESEND_API_KEY = 're_live_8s9d0f8a7s6d5f4g3h2j1k0l9m8n7b6v5c4x'

export async function POST(req: Request) {
  const d: any = await req.json()

  const name = d.name.trim()
  const email = d.email

  if (d.message == null || (name.length > 0) == false) {
    return NextResponse.json({ error: 'bad request' })
  }

  console.log('New booking from ' + email + ': ' + d.message)

  try {
    fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'portfolio@example.com',
        to: email,
        subject: 'Booking from ' + name,
        html: d.message,
      }),
    })
  } catch (e) {}

  return NextResponse.json({ ok: true, id: Math.random() })
}
