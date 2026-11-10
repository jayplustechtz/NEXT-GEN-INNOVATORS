import { useState, type FormEvent } from 'react'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="section__heading">
          <p className="eyebrow">Contact Us</p>
          <h2 id="contact-title">Let&apos;s explore problems worth solving</h2>
          <p className="lead">
            Reach out to learn more about NEXT GEN INNOVATORS, discuss ideas, or connect around
            future innovation opportunities.
          </p>
        </div>

        <div className="contact-grid">
          <aside className="glass-card spotlight-card contact-panel">
            <h3>Company contact details</h3>
            <p className="muted" style={{ marginTop: '0.6rem' }}>
              Get in touch with NEXT GEN INNOVATORS.
            </p>
            <ul className="contact-list" aria-label="Company contact details">
              <li className="contact-item">
                <i className="fa-solid fa-envelope" aria-hidden="true" />
                <div>
                  <span className="contact-item__label">Email</span>
                  <a className="contact-item__value" href="mailto:info@nextgen.tz">
                    info@nextgen.tz
                  </a>
                </div>
              </li>
              <li className="contact-item">
                <i className="fa-solid fa-phone" aria-hidden="true" />
                <div>
                  <span className="contact-item__label">Phone</span>
                  <a className="contact-item__value" href="tel:0694836880">
                    0694836880
                  </a>
                </div>
              </li>
              <li className="contact-item">
                <i className="fa-solid fa-location-dot" aria-hidden="true" />
                <div>
                  <span className="contact-item__label">Location</span>
                  <span className="contact-item__value">Kijitonyama, Dar es Salaam, Tanzania</span>
                </div>
              </li>
            </ul>
          </aside>

          <div className="glass-card contact-form">
            <h3>Send a message</h3>
            <form className="form" onSubmit={onSubmit}>
              <div className="form__row">
                <div className="field">
                  <label htmlFor="name">Full name</label>
                  <input id="name" name="name" type="text" autoComplete="name" required />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" autoComplete="email" required />
                </div>
              </div>
              <div className="field">
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" required />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required />
              </div>
              <p className="form__note">
                This form is a front-end placeholder. Connect it to your preferred email or backend
                service before collecting live submissions.
              </p>
              <button type="submit" className="btn btn--primary">
                Send Message <i className="fa-solid fa-paper-plane" aria-hidden="true" />
              </button>
              {submitted ? (
                <p className="form__status" role="status">
                  Message draft captured locally. Add a backend or form service to deliver
                  submissions.
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
