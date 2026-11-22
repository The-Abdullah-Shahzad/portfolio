import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { FiMail, FiLinkedin, FiMessageCircle } from 'react-icons/fi';
import { profile } from '../../profile';

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const submitting = useRef(false);

  async function sendEmail(event) {
    event.preventDefault();
    if (submitting.current) return;

    const form = event.currentTarget;
    submitting.current = true;
    setStatus('sending');

    try {
      await emailjs.sendForm('service_zmxav2u', 'template_1zjosnr', form, 'm0157TKwJYIDelq9S');
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    } finally {
      submitting.current = false;
    }
  }

  const sending = status === 'sending';

  return (
    <section id="contact" className="section container" aria-labelledby="contact-title" tabIndex={-1}>
      <div className="contact-panel">
        <div className="contact-intro">
          <h2 id="contact-title">Let’s talk<span>.</span></h2>
          <p>Have a project in mind or want to discuss a role? Send me a message.</p>
          <ul className="contact-links">
            <li><a href={'mailto:' + profile.email}><FiMail aria-hidden="true" />{profile.email}</a></li>
            <li><a href={profile.linkedin}><FiLinkedin aria-hidden="true" /> LinkedIn</a></li>
            <li><a href={profile.whatsapp}><FiMessageCircle aria-hidden="true" /> WhatsApp</a></li>
            <li><a href={profile.messenger}><FiMessageCircle aria-hidden="true" /> Messenger</a></li>
          </ul>
        </div>
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="form-row">
            <label htmlFor="contact-name">Name
              <input id="contact-name" name="name" autoComplete="name" required readOnly={sending} />
            </label>
            <label htmlFor="contact-email">Email
              <input id="contact-email" name="email" type="email" autoComplete="email" required readOnly={sending} />
            </label>
          </div>
          <label htmlFor="contact-message">Message
            <textarea id="contact-message" name="message" rows="5" required readOnly={sending} />
          </label>
          <button type="submit" className="button button-primary" disabled={sending}>
            {sending ? 'Sending…' : 'Send message'}
          </button>
          <div className="form-status" role="status">
            {status === 'sending' && 'Sending your message.'}
            {status === 'sent' && 'Message sent. Thanks for getting in touch.'}
            {status === 'error' && <>Your message couldn’t be sent. Try again or <a href={'mailto:' + profile.email}>email me directly</a>.</>}
          </div>
        </form>
      </div>
    </section>
  );
}
