// Tweaks panel for BrightSmile

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "primaryColor": "#4A90D9",
  "accentColor": "#2ECC71",
  "headingFont": "Fraunces",
  "bodyFont": "Inter",
  "heroLayout": "split",
  "compact": false
}/*EDITMODE-END*/;

const HEADING_FONTS = ['Fraunces', 'Source Serif Pro', 'Playfair Display', 'DM Serif Display'];
const BODY_FONTS = ['Inter', 'Helvetica Neue', 'Manrope', 'Plus Jakarta Sans'];

const BrightTweaks = () => {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty('--blue', tweaks.primaryColor);
    r.style.setProperty('--mint', tweaks.accentColor);
    document.body.style.fontFamily = `'${tweaks.bodyFont}', 'Helvetica Neue', Helvetica, Arial, sans-serif`;
    document.querySelectorAll('h1,h2,h3,h4').forEach(el => {
      el.style.fontFamily = `'${tweaks.headingFont}', Georgia, serif`;
    });
    // Compact toggle
    document.documentElement.style.setProperty('--maxw', tweaks.compact ? '1100px' : '1240px');
    document.querySelectorAll('section').forEach(s => {
      s.style.paddingTop = tweaks.compact ? '64px' : '';
      s.style.paddingBottom = tweaks.compact ? '64px' : '';
    });
    // Hero layout
    const hero = document.querySelector('.hero-grid');
    if (hero) {
      if (tweaks.heroLayout === 'centered') {
        hero.style.gridTemplateColumns = '1fr';
        hero.style.textAlign = 'center';
        hero.style.maxWidth = '780px';
        hero.style.margin = '0 auto';
      } else {
        hero.style.gridTemplateColumns = '';
        hero.style.textAlign = '';
        hero.style.maxWidth = '';
      }
      const visual = hero.querySelector('.hero-visual');
      if (visual) visual.style.display = tweaks.heroLayout === 'centered' ? 'none' : '';
    }
  }, [tweaks]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Brand colors">
        <TweakColor label="Primary (blue)" value={tweaks.primaryColor} onChange={v => setTweak('primaryColor', v)} />
        <TweakColor label="Accent (mint)" value={tweaks.accentColor} onChange={v => setTweak('accentColor', v)} />
      </TweakSection>
      <TweakSection title="Typography">
        <TweakSelect label="Heading font" value={tweaks.headingFont} options={HEADING_FONTS} onChange={v => setTweak('headingFont', v)} />
        <TweakSelect label="Body font" value={tweaks.bodyFont} options={BODY_FONTS} onChange={v => setTweak('bodyFont', v)} />
      </TweakSection>
      <TweakSection title="Layout">
        <TweakRadio label="Hero style" value={tweaks.heroLayout}
          options={[{label: 'Split', value: 'split'}, {label: 'Centered', value: 'centered'}]}
          onChange={v => setTweak('heroLayout', v)} />
        <TweakToggle label="Compact spacing" value={tweaks.compact} onChange={v => setTweak('compact', v)} />
      </TweakSection>
    </TweaksPanel>
  );
};

window.BrightTweaks = BrightTweaks;
