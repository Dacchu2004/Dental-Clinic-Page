// Header + Hero
const Header = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="site-header">
      <div className="container">
        <nav className="nav" aria-label="Primary">
          <a href="#top" className="brand">
            <span className="brand-mark"><Icon name="tooth" size={20} /></span>
            <span>BrightSmile<span style={{color: 'var(--blue)'}}>.</span></span>
          </a>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#team">Our Team</a>
            <a href="#stories">Patient Stories</a>
            <a href="#gallery">Results</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="nav-cta">
            <span className="nav-call">
              <span className="dot"></span>
              <Icon name="phone" size={16} />
              <span>(415) 555-0184</span>
            </span>
            <a href="#contact" className="btn btn-primary">
              <Icon name="calendar" size={16} />
              Book appointment
            </a>
            <button className="btn btn-ghost nav-burger" aria-label="Menu" onClick={() => setOpen(!open)}>
              <Icon name="menu" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-grid">
          <div>
            <span className="eyebrow">Welcoming new patients · 2026</span>
            <h1>
              Gentle dentistry, <em>brighter</em> smiles — for the whole family.
            </h1>
            <p className="hero-sub">
              From routine cleanings to full smile makeovers, our team in the Mission District
              combines modern technology with calm, unhurried care. Same-week openings available.
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary btn-lg">
                <Icon name="calendar" size={18} />
                Book an appointment
              </a>
              <a href="#services" className="btn btn-ghost btn-lg">
                <Icon name="play" size={14} />
                Take a clinic tour
              </a>
            </div>
            <div className="hero-trust">
              <div className="item"><Icon name="check" size={18} /> Most insurance accepted</div>
              <div className="item"><Icon name="check" size={18} /> 0% financing available</div>
              <div className="item"><Icon name="check" size={18} /> Open Saturdays</div>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-photo ph">
              <div className="smile"><div className="smile-blob"></div></div>
              <span className="ph-label">portrait · smiling patient</span>
            </div>

            <div className="hero-card appt">
              <div className="row" style={{marginBottom: 8}}>
                <div style={{width: 36, height: 36, borderRadius: 10, background: 'var(--mint-50)', color: 'var(--mint-600)', display: 'grid', placeItems: 'center'}}>
                  <Icon name="calendar" size={18} />
                </div>
                <div>
                  <div className="name">Next opening</div>
                  <div className="meta">Tomorrow · 9:30 AM</div>
                </div>
              </div>
              <button className="btn btn-mint" style={{padding: '8px 14px', fontSize: 13, width: '100%'}}>Reserve slot</button>
            </div>

            <div className="hero-card review">
              <div className="row">
                <div className="avatar"></div>
                <div>
                  <div className="name">Maya R.</div>
                  <div className="stars" aria-label="5 stars">
                    {[0,1,2,3,4].map(i => <Icon key={i} name="star" />)}
                  </div>
                </div>
              </div>
              <p className="meta" style={{marginTop: 8, lineHeight: 1.4}}>
                "Painless cleaning and the front desk was a delight."
              </p>
            </div>
          </div>
        </div>

        <div className="hero-stats" role="list">
          <div className="stat" role="listitem">
            <div className="num">12k<small>+</small></div>
            <div className="lbl">Smiles cared for since 2009</div>
          </div>
          <div className="stat" role="listitem">
            <div className="num">4.9<small>/5</small></div>
            <div className="lbl">Across 1,200+ Google reviews</div>
          </div>
          <div className="stat" role="listitem">
            <div className="num">17<small>yrs</small></div>
            <div className="lbl">Average doctor experience</div>
          </div>
          <div className="stat" role="listitem">
            <div className="num">98<small>%</small></div>
            <div className="lbl">Patients return for cleanings</div>
          </div>
        </div>
      </div>
    </section>
  );
};

window.Header = Header;
window.Hero = Hero;
