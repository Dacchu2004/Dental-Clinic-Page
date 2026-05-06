// Services + Team

const SERVICES = [
  { icon: 'sparkle', title: 'General & preventive', desc: 'Cleanings, exams, fluoride and digital X-rays for lifelong oral health.', tone: '' },
  { icon: 'tooth', title: 'Cosmetic dentistry', desc: 'Veneers, bonding, and professional whitening for a confident smile.', tone: '' },
  { icon: 'align', title: 'Invisalign & orthodontics', desc: 'Clear aligner treatment planned with 3D scans — no goopy molds.', tone: 'mint' },
  { icon: 'shield', title: 'Implants & restorations', desc: 'Single tooth to full-arch solutions, placed and restored in-house.', tone: '' },
  { icon: 'kid', title: 'Pediatric care', desc: 'A warm, kid-friendly experience that builds trust from the first visit.', tone: 'mint' },
  { icon: 'emergency', title: 'Same-day emergencies', desc: 'Toothache or injury? Call before noon and we\'ll see you today.', tone: '' },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">What we do</span>
          <h2>Comprehensive care, all under one calm roof.</h2>
          <p>Six specialties, one coordinated team. Whether it's a routine checkup or a complex restoration, you'll see familiar faces every visit.</p>
        </div>
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <article key={s.title} className={`service-card ${s.tone}`}>
              <div className="icon-wrap"><Icon name={s.icon} size={28} /></div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <a href="#contact" className="more">Learn more <Icon name="arrow" size={14} /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const TEAM = [
  {
    name: 'Dr. Amelia Chen',
    role: 'Lead Dentist · DDS',
    blurb: 'Cosmetic and restorative specialist with a gentle chair-side manner. UCSF-trained, fellowship-certified in implant dentistry.',
    creds: ['UCSF School of Dentistry', 'AGD Fellow', '14 yrs experience'],
    tag: 'Founder',
    hue: 210,
  },
  {
    name: 'Dr. Marcus Patel',
    role: 'Orthodontist · DMD, MS',
    blurb: 'Invisalign Diamond Provider. Specializes in clear aligners for teens and adults, with a knack for tricky bites.',
    creds: ['Tufts Orthodontics', 'Diamond Invisalign', '11 yrs experience'],
    tag: 'Specialist',
    hue: 150,
  },
  {
    name: 'Dr. Sara Okafor',
    role: 'Pediatric Dentist · DDS',
    blurb: 'Makes first visits magical. Board-certified pediatric dentist focused on prevention and parent-friendly care plans.',
    creds: ['Columbia Pediatrics', 'Board Certified', '9 yrs experience'],
    tag: 'Pediatrics',
    hue: 25,
  },
];

const DoctorSilhouette = ({ hue = 210 }) => (
  <svg viewBox="0 0 200 240" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
    <defs>
      <linearGradient id={`grad-${hue}`} x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor={`hsl(${hue} 50% 92%)`} />
        <stop offset="100%" stopColor={`hsl(${hue} 50% 78%)`} />
      </linearGradient>
    </defs>
    {/* shoulders */}
    <path d="M0 240 L0 200 C 30 160, 60 150, 100 150 C 140 150, 170 160, 200 200 L 200 240 Z"
      fill="#FFFFFF" stroke={`hsl(${hue} 30% 80%)`} strokeWidth="1" />
    {/* head */}
    <circle cx="100" cy="110" r="40" fill={`url(#grad-${hue})`} stroke={`hsl(${hue} 30% 75%)`} strokeWidth="1" />
    {/* coat collar */}
    <path d="M70 175 L100 200 L130 175 L120 240 L80 240 Z" fill="#F2F8FE" stroke={`hsl(${hue} 30% 80%)`} strokeWidth="1" />
    {/* stethoscope hint */}
    <path d="M85 195 Q100 215 115 195" stroke={`hsl(${hue} 35% 55%)`} strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
);

const Team = () => {
  return (
    <section id="team">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Meet our team</span>
          <h2>Dentists you'll actually look forward to seeing.</h2>
          <p>Three doctors, one shared philosophy: take time, explain everything, never push treatment you don't need.</p>
        </div>
        <div className="team-grid">
          {TEAM.map((d) => (
            <article key={d.name} className="doctor-card">
              <div className="doctor-photo ph" style={{
                background: `linear-gradient(180deg, hsl(${d.hue} 60% 95%) 0%, hsl(${d.hue} 60% 88%) 100%)`
              }}>
                <span className="doctor-tag">{d.tag}</span>
                <div className="silhouette"><DoctorSilhouette hue={d.hue} /></div>
                <span className="ph-label" style={{position: 'absolute', bottom: 12, right: 12}}>portrait · {d.name.split(' ')[1]}</span>
              </div>
              <div className="doctor-info">
                <h3>{d.name}</h3>
                <div className="role">{d.role}</div>
                <p>{d.blurb}</p>
                <div className="creds">
                  {d.creds.map(c => <span key={c} className="tag">{c}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

window.Services = Services;
window.Team = Team;
