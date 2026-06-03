'use client';

import React, { useEffect, useState } from 'react';
import { X, Video } from 'lucide-react';

/**
 * To book a real Google Meet automatically, paste your Google Calendar
 * "Appointment schedule" share URL below (Google Calendar → Appointment
 * schedules → open your schedule → Share → "Copy link"). Bookings made through
 * it create a calendar event WITH a Google Meet link and email both parties.
 *
 * A Calendly link with Google Meet set as the location also works here.
 * Leave empty to fall back to the email-request form.
 */
const APPOINTMENT_URL = '';
const EMAIL = 'adewaled03@gmail.com';

export default function BookingModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="book-overlay" onClick={onClose}>
      <div
        className={`book-modal ${APPOINTMENT_URL ? 'book-modal--wide' : ''}`}
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="exp-modal-close" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>

        <div className="book-head">
          <span className="eyebrow"><span className="dot" />Free intro call</span>
          <h3 className="display text-[30px] sm:text-[24px] mt-4 leading-[1.05]">
            Book a 20-minute intro call
          </h3>
          <p className="book-sub">
            <Video size={15} /> You’ll get a calendar invite with a Google Meet link.
          </p>
        </div>

        {APPOINTMENT_URL ? (
          <div className="book-embed">
            <iframe src={APPOINTMENT_URL} title="Book an intro call" />
          </div>
        ) : (
          <BookingForm />
        )}
      </div>
    </div>
  );
}

function BookingForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [when, setWhen] = useState('');
  const [note, setNote] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('Intro call request (Google Meet)');
    const body = encodeURIComponent(
      `Hi Daniel,\n\nI'd like to book a 20-minute intro call over Google Meet.\n\n` +
        `Name: ${name}\nEmail: ${email}\nPreferred time: ${when}\nAbout: ${note}\n\nThanks!`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <form className="book-form" onSubmit={submit}>
      <div className="book-field">
        <label htmlFor="bk-name">Name</label>
        <input id="bk-name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="book-field">
        <label htmlFor="bk-email">Email</label>
        <input id="bk-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="book-field">
        <label htmlFor="bk-when">Preferred day &amp; time</label>
        <input id="bk-when" placeholder="e.g. Tue afternoon, WAT" value={when} onChange={(e) => setWhen(e.target.value)} />
      </div>
      <div className="book-field">
        <label htmlFor="bk-note">What’s it about?</label>
        <textarea id="bk-note" rows={3} value={note} onChange={(e) => setNote(e.target.value)} />
      </div>
      <button type="submit" className="btn-pill-dark book-submit">
        Request this time
        <span className="arrow-circle"><Video size={13} /></span>
      </button>
      <p className="book-hint">
        I’ll confirm by email and send a Google Meet invite.
      </p>
    </form>
  );
}
