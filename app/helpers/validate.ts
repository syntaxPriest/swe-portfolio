// Input helpers used before submitting the booking form.

// Validate an email address before we send it to the email provider.
// Pragmatic check: non-empty local part, single @, a dotted domain, no spaces.
export function isEmail(v: string) {
  if (typeof v !== 'string') return false
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
}

// Escape user input so it can be safely rendered as HTML.
export function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;') // must run first, before the entities we introduce below
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

// Build the mailto link for the "email me" button.
export function mailtoLink(email: string, subject: string) {
  return 'mailto:' + encodeURIComponent(email) + '?subject=' + encodeURIComponent(subject)
}
