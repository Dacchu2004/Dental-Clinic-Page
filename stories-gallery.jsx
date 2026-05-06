// Testimonials, Before/After, Insurance

const TESTIMONIALS = [
  {
    quote: "I used to dread the dentist. Dr. Chen explained every step, took her time, and I genuinely felt cared for. Best cleaning of my life — and I've had a lot.",
    name: 'Maya Rodriguez', meta: 'Patient since 2021', tag: 'General care',
  },
  {
    quote: "My 6-year-old asks when she gets to go back. That sentence still feels surreal. Dr. Okafor has a magic touch with anxious kids.",
    name: 'James K.', meta: 'Parent of two', tag: 'Pediatrics',
  },
  {
    quote: "Finished Invisalign in 11 months. The 3D preview at the start was wild — my final smile looked exactly like the simulation. Would do it again tomorrow.",
    name: 'Priya Shah', meta: 'Invisalign · 2025', tag: 'Orthodontics',
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials" id="stories">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Patient stories</span>
          <h2>Trusted by 12,000+ neighbors and counting.</h2>
          <p>Real reviews from real patients — pulled from Google, Yelp, and our intake surveys.</p>
        </div>

        <div className="test-grid">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="test-card">
              <Icon name="quote" />
              <div className="stars" aria-label="5 stars">
                {[0,1,2,3,4].map(i => <Icon key={i} name="star" />)}
              </div>
              <blockquote>"{t.quote}"</blockquote>
              <figcaption className="who">
                <div className="avatar"></div>
                <div style={{flex: 1}}>
                  <div className="name">{t.name}</div>
                  <div className="meta">{t.meta}</div>
                </div>
                <span className="chip">{t.tag}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="test-summary">
          <div className="big">4.9</div>
          <div>
            <div className="stars">{[0,1,2,3,4].map(i => <Icon key={i} name="star" />)}</div>
            <div className="label">From 1,247 Google reviews</div>
          </div>
          <div style={{borderLeft: '1px solid var(--line-2)', height: 36}}></div>
          <div>
            <div style={{fontWeight: 600, fontSize: 14}}>“Top dentist in SF” — 2024 & 2025</div>
            <div className="label">SF Magazine readers' poll</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CASES = [
  { id: 1, label: 'Whitening · 6 weeks' },
  { id: 2, label: 'Veneers · case 04' },
  { id: 3, label: 'Invisalign · 11 mo' },
];

const BeforeAfter = () => {
  const [split, setSplit] = React.useState(50);
  const [active, setActive] = React.useState(0);
  const stageRef = React.useRef(null);
  const draggingRef = React.useRef(false);

  const move = (clientX) => {
    const rect = stageRef.current.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setSplit(Math.max(2, Math.min(98, pct)));
  };
  const onPointerDown = (e) => {
    draggingRef.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    move(e.clientX);
  };
  const onPointerMove = (e) => {
    if (!draggingRef.current) return;
    move(e.clientX);
  };
  const onPointerUp = (e) => {
    draggingRef.current = false;
    try { e.currentTarget.releasePointerCapture(e.pointerId); } catch {}
  };

  return (
    <section id="gallery">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Before & after</span>
          <h2>Drag to reveal real results.</h2>
          <p>A small selection from our case library. Every photo is shot in-clinic with consistent lighting and angle — and shared with patient consent.</p>
        </div>

        <div className="ba-wrap">
          <div>
            <div
              ref={stageRef}
              className="ba-stage ph"
              style={{ '--split': split + '%' }}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
              role="slider"
              aria-label="Before / after comparison slider"
              aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(split)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'ArrowLeft') setSplit(s => Math.max(0, s - 4));
                if (e.key === 'ArrowRight') setSplit(s => Math.min(100, s + 4));
              }}
            >
              <div className="ba-img before"><span className="ph-label">BEFORE · case {CASES[active].id}</span></div>
              <div className="ba-img after"><span className="ph-label">AFTER · {CASES[active].label}</span></div>
              <div className="ba-handle">
                <div className="ba-knob"><Icon name="arrow" /></div>
              </div>
            </div>
            <div className="ba-thumbs" role="tablist" aria-label="Cases">
              {CASES.map((c, i) => (
                <button
                  key={c.id}
                  className={`ba-thumb ${i === active ? 'active' : ''}`}
                  data-label={`#${c.id}`}
                  aria-label={c.label}
                  aria-selected={i === active}
                  onClick={() => { setActive(i); setSplit(50); }}
                ></button>
              ))}
            </div>
          </div>

          <div className="ba-side">
            <span className="eyebrow">Case #{CASES[active].id}</span>
            <h2 style={{fontSize: 32}}>{CASES[active].label}</h2>
            <p className="muted" style={{marginTop: 14}}>
              Treatment plans are always discussed up front, with photo previews, transparent costs,
              and a no-pressure consultation. Browse a few of our most-loved transformations.
            </p>
            <div className="feat-list">
              <div className="feat">
                <span className="check"><Icon name="check" size={16} /></span>
                <div>
                  <div className="feat-title">3D simulated preview</div>
                  <div className="feat-meta">See your final smile before any treatment begins.</div>
                </div>
              </div>
              <div className="feat">
                <span className="check"><Icon name="check" size={16} /></span>
                <div>
                  <div className="feat-title">Transparent pricing</div>
                  <div className="feat-meta">Itemized estimates, no surprise add-ons.</div>
                </div>
              </div>
              <div className="feat">
                <span className="check"><Icon name="check" size={16} /></span>
                <div>
                  <div className="feat-title">Lifetime smile guarantee</div>
                  <div className="feat-meta">Free touch-ups on any cosmetic work for as long as you're a patient.</div>
                </div>
              </div>
            </div>
            <a href="#contact" className="btn btn-primary" style={{marginTop: 28}}>
              Book a free consultation <Icon name="arrow" size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const INSURERS = [
  'Delta Dental', 'Cigna', 'Aetna', 'MetLife', 'United Healthcare',
  'Guardian', 'Humana', 'Anthem BCBS', 'Principal', 'Ameritas',
  'Blue Shield CA', 'Sun Life',
];

const Insurance = () => {
  return (
    <section className="insurance">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Insurance & financing</span>
          <h2>We work with most major plans.</h2>
          <p>Don't see yours? We'll still help you maximize your benefits — and offer 0% financing through CareCredit and Cherry.</p>
        </div>
        <div className="ins-grid">
          {INSURERS.map((name) => (
            <div key={name} className="ins-badge" title={name}>
              <div className="logo">{name.split(' ').map(w => w[0]).join('').slice(0, 3)}</div>
              <div className="name">{name}</div>
            </div>
          ))}
        </div>
        <div className="ins-note">
          <Icon name="badge-check" size={18} style={{color: 'var(--mint-600)'}} />
          In-network with most PPO plans · HSA / FSA accepted · 0% financing available
        </div>
      </div>
    </section>
  );
};

window.Testimonials = Testimonials;
window.BeforeAfter = BeforeAfter;
window.Insurance = Insurance;
