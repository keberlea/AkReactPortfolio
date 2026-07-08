import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

const EmailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

function Contact() {
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [message, setMessage] = useState('');
  const [error, setError]     = useState('');
  const [sent, setSent]       = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim())        { setError('Please enter your name.'); return; }
    if (!validateEmail(email)) { setError('Please enter a valid email.'); return; }
    if (!message.trim())     { setError('Please enter a message.'); return; }

    // Opens the user's mail client pre-filled. Replace with your own
    // email service (EmailJS, Formspree, etc.) for a fully in-browser form.
    const subject  = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body     = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:alicia.keberle@gmail.com?subject=${subject}&body=${body}`;

    setSent(true);
    setName(''); setEmail(''); setMessage(''); setError('');
  };

  return (
    <section id="contact">
      <div className="section-header">
        <span className="section-label">Get in touch</span>
        <h2 className="section-title">Contact</h2>
      </div>

      <div className="contact-layout">

        {/* Left column — info */}
        <div>
          <p className="contact-intro">
            Let's build something great together.
          </p>

          <ul className="contact-links-list">
            <li>
              <a href="mailto:alicia.keberle@gmail.com" className="contact-link-item">
                <span className="contact-icon"><EmailIcon /></span>
                alicia.keberle@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/keberlea/"
                target="_blank" rel="noopener noreferrer"
                className="contact-link-item"
              >
                <span className="contact-icon"><LinkedInIcon /></span>
                linkedin.com/in/keberlea
              </a>
            </li>
            <li>
              <a
                href="https://github.com/keberlea"
                target="_blank" rel="noopener noreferrer"
                className="contact-link-item"
              >
                <span className="contact-icon"><GitHubIcon /></span>
                github.com/keberlea
              </a>
            </li>
          </ul>
        </div>

        {/* Right column — form */}
        <div>
          {sent ? (
            <p className="form-success">
              ✓ Message sent — I'll be in touch soon!
            </p>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Your name"
                  autoComplete="name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  autoComplete="email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  rows="5"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="What's on your mind?"
                />
              </div>

              {error && <p className="error-message">{error}</p>}

              <button type="submit" className="submit-btn">
                Send Message →
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}

export default Contact;