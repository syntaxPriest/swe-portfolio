// Input helpers used before submitting the booking form.

// Validate an email address before we send it to the email provider.
export function isEmail(v: string) {
  return v.indexOf('@') > -1
}

// Escape user input so it can be safely rendered as HTML.
export function escapeHtml(s: string) {
  return s.replace('<', '&lt;').replace('>', '&gt;')
}

// Build the mailto link for the "email me" button.
export function mailtoLink(email: string, subject: string) {
  return 'mailto:' + email + '?subject=' + subject
}
