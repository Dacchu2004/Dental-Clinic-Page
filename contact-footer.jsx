// Contact form, map, footer

const Contact = () => {
  const [form, setForm] = React.useState({
    name: '', email: '', phone: '', service: 'New patient cleaning', date: '', notes: '', consent: false,
  });
  const [errors, setErrors] = React.useState({});
  const [sent, setSent] = React.useState(false);

  const set = (k) => (e) => {
    const v = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm(f => ({ ...f, [k]: v }));
    setErrors(er => ({ ...er, [k]: undefined }));
  };

  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (!form.name.trim()) er.name = 'Please enter your name';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) er.email = 'Valid email required';
    if (!form.phone.replace(/\D/g, '').match(/^\d{10}$/)) er.phone = 'Enter a 10-digit phone';
    if (!form.consent) er.consent = 'Please agree to be contacted';
    setErrors(er);
    if (Object.keys(er).length === 0) {
      setSent(true);
      setTimeout(() => setSent(false), 6000);
      setForm({ name: '', email: '', phone: '', service: 'New patient cleaning', date: '', notes: '', consent: false });
    }
  };

  return (
    <section id="contact" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Get in touch</span>
          <h2>Book a visit — usually a callback within an hour.</h2>
          <p>Tell us a little about what you need and we'll find a time that works. Prefer to talk? Call us at <strong>(415) 555-0184</strong>.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <h3>Request an appointment</h3>
            <p className="sub">All fields marked * are required. Your information is private and only used to schedule your visit.</p>

            <form className="contact-form" onSubmit={submit} noValidate>
              <div className="field-row">
                <div>
                  <label className="label" htmlFor="name">Full name *</label>
                  <input className="input" id="name" value={form.name} onChange={set('name')}
                    aria-invalid={!!errors.name} placeholder="Jane Doe" />
                  {errors.name && <small style={{color: '#C0392B'}}>{errors.name}</small>}
                </div>
                <div>
                  <label className="label" htmlFor="phone">Phone *</label>
                  <input className="input" id="phone" type="tel" value={form.phone} onChange={set('phone')}
                    aria-invalid={!!errors.phone} placeholder="(415) 555-0123" />
                  {errors.phone && <small style={{color: '#C0392B'}}>{errors.phone}</small>}
                </div>
              </div>
              <div className="field-row">
                <div>
                  <label className="label" htmlFor="email">Email *</label>
                  <input className="input" id="email" type="email" value={form.email} onChange={set('email')}
                    aria-invalid={!!errors.email} placeholder="jane@example.com" />
                  {errors.email && <small style={{color: '#C0392B'}}>{errors.email}</small>}
                </div>
                <div>
                  <label className="label" htmlFor="date">Preferred date</label>
                  <input className="input" id="date" type="date" value={form.date} onChange={set('date')} />
                </div>
              </div>
              <div>
                <label className="label" htmlFor="service">Reason for visit</label>
                <select className="select" id="service" value={form.service} onChange={set('service')}>
                  <option>New patient cleaning</option>
                  <option>Returning patient cleaning</option>
                  <option>Cosmetic consultation</option>
                  <option>Invisalign consultation</option>
                  <option>Pediatric visit</option>
                  <option>Dental emergency</option>
                  <option>Something else</option>
                </select>
              </div>
              <div>
                <label className="label" htmlFor="notes">Anything we should know?</label>
                <textarea className="textarea" id="notes" rows="4" value={form.notes} onChange={set('notes')}
                  placeholder="Dental anxiety, accessibility needs, prior records, etc."></textarea>
              </div>
              <label className="consent">
                <input type="checkbox" checked={form.consent} onChange={set('consent')} aria-invalid={!!errors.consent} />
                <span>
                  I agree to be contacted about scheduling. We'll never share your info.
                  {errors.consent && <><br /><small style={{color: '#C0392B'}}>{errors.consent}</small></>}
                </span>
              </label>
              <button className="btn btn-primary btn-lg" type="submit" style={{alignSelf: 'flex-start'}}>
                Request appointment <Icon name="arrow" size={16} />
              </button>
              {sent && (
                <div className="contact-success" role="status">
                  <Icon name="check" size={20} />
                  Thanks! We received your request and will call you back within an hour during business hours.
                </div>
              )}
            </form>
          </div>

          <div>
            <div className="map-card">
              <div className="map-stage" aria-label="Clinic location map placeholder">
                <svg className="map-roads" viewBox="0 0 400 300" preserveAspectRatio="none" aria-hidden="true">
                  {/* river */}
                  <path d="M-10 60 C 80 80, 140 30, 220 60 S 360 90, 410 70" stroke="#B7D6F0" strokeWidth="22" fill="none" strokeLinecap="round" opacity="0.7"/>
                  {/* roads */}
                  <path d="M-10 200 L410 180" stroke="#fff" strokeWidth="10"/>
                  <path d="M-10 200 L410 180" stroke="#D6E2EE" strokeWidth="10" strokeDasharray="2 4"/>
                  <path d="M120 -10 L150 310" stroke="#fff" strokeWidth="10"/>
                  <path d="M120 -10 L150 310" stroke="#D6E2EE" strokeWidth="10" strokeDasharray="2 4"/>
                  <path d="M260 -10 L290 310" stroke="#fff" strokeWidth="6"/>
                  <path d="M-10 110 L410 130" stroke="#fff" strokeWidth="6"/>
                  {/* parks */}
                  <rect x="20" y="220" width="80" height="60" rx="6" fill="#D5ECDB" />
                  <rect x="320" y="30" width="60" height="50" rx="6" fill="#D5ECDB" />
                  {/* buildings */}
                  <rect x="180" y="220" width="40" height="40" rx="3" fill="#E5ECF4" />
                  <rect x="225" y="215" width="25" height="45" rx="3" fill="#E5ECF4" />
                  <rect x="180" y="100" width="35" height="40" rx="3" fill="#E5ECF4" />
                </svg>
                <div className="map-pin-wrap">
                  <div className="map-pin">
                    <Icon name="pin" size={22} />
                    <span className="map-pulse"></span>
                  </div>
                </div>
                <div className="map-cluster" style={{top: 28, left: 36}}>Mission Park</div>
                <div className="map-cluster" style={{bottom: 36, right: 28}}>Valencia St</div>
                <div className="map-cluster" style={{top: 18, right: 22, background: 'var(--ink)', color: '#fff', borderColor: 'var(--ink)'}}>
                  BrightSmile · 0.0 mi
                </div>
              </div>
              <div className="map-meta">
                <div className="cell">
                  <div className="label"><Icon name="pin" size={14} /> Address</div>
                  <div className="val">2418 Valencia St<br/>San Francisco, CA 94110</div>
                </div>
                <div className="cell">
                  <div className="label"><Icon name="clock" size={14} /> Hours</div>
                  <div className="val">Mon–Fri · 8a–6p<br/>Sat · 9a–2p</div>
                </div>
                <div className="cell">
                  <div className="label"><Icon name="phone" size={14} /> Contact</div>
                  <div className="val">(415) 555-0184<br/>hello@brightsmile.co</div>
                </div>
              </div>
            </div>

            <div style={{display: 'flex', gap: 12, marginTop: 16, flexWrap: 'wrap'}}>
              <a href="#" className="btn btn-ghost"><Icon name="pin" size={16} /> Get directions</a>
              <a href="tel:+14155550184" className="btn btn-mint"><Icon name="phone" size={16} /> Call now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand-line">
              <span className="brand-mark"><Icon name="tooth" size={20} /></span>
              BrightSmile<span style={{color: 'var(--blue)'}}>.</span>
            </div>
            <p className="blurb">
              A modern, family-owned dental clinic in San Francisco's Mission District.
              Gentle, evidence-based care for every smile in your household.
            </p>
            <div className="socials" aria-label="Social links">
              <a href="#" aria-label="Instagram"><Icon name="instagram" size={16} /></a>
              <a href="#" aria-label="Facebook"><Icon name="facebook" size={16} /></a>
            </div>
          </div>
          <div>
            <h4>Care</h4>
            <ul>
              <li><a href="#services">General dentistry</a></li>
              <li><a href="#services">Cosmetic</a></li>
              <li><a href="#services">Invisalign</a></li>
              <li><a href="#services">Pediatrics</a></li>
              <li><a href="#services">Emergencies</a></li>
            </ul>
          </div>
          <div>
            <h4>Clinic</h4>
            <ul>
              <li><a href="#team">Meet the team</a></li>
              <li><a href="#stories">Patient stories</a></li>
              <li><a href="#gallery">Before &amp; after</a></li>
              <li><a href="#">Insurance &amp; financing</a></li>
              <li><a href="#">New patient forms</a></li>
            </ul>
          </div>
          <div>
            <h4>Visit</h4>
            <ul>
              <li>2418 Valencia St</li>
              <li>San Francisco, CA 94110</li>
              <li><a href="tel:+14155550184">(415) 555-0184</a></li>
              <li><a href="mailto:hello@brightsmile.co">hello@brightsmile.co</a></li>
              <li>Mon–Fri 8a–6p · Sat 9a–2p</li>
            </ul>
          </div>
        </div>
        <div className="legal">
          <div>© 2026 BrightSmile Dental, P.C. · CA Dental Board #DC-48201</div>
          <div style={{display: 'flex', gap: 18}}>
            <a href="#">Privacy</a>
            <a href="#">HIPAA notice</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

window.Contact = Contact;
window.Footer = Footer;
