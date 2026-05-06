// Inline SVG icons (stroke style, 24x24)
const Icon = ({ name, size = 24, stroke = 'currentColor', fill = 'none', ...rest }) => {
  const common = {
    width: size, height: size, viewBox: '0 0 24 24',
    fill, stroke, strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round',
    ...rest,
  };
  switch (name) {
    case 'tooth':
      return (
        <svg {...common}>
          <path d="M7 3.5c-2.5 0-4 1.7-4 4 0 1.6.6 2.5 1 3.6.4 1 .3 2.3.6 3.6.4 1.6.7 3.4 1.4 5 .4.9 1.5.9 1.9 0 .6-1.4.5-2.6.9-3.7.3-.9.9-1.6 2.2-1.6s1.9.7 2.2 1.6c.4 1.1.3 2.3.9 3.7.4.9 1.5.9 1.9 0 .7-1.6 1-3.4 1.4-5 .3-1.3.2-2.6.6-3.6.4-1.1 1-2 1-3.6 0-2.3-1.5-4-4-4-1.6 0-2.3.8-3 1.5-.4.4-1 .4-1.4 0-.7-.7-1.4-1.5-3-1.5z"/>
        </svg>
      );
    case 'sparkle':
      return (
        <svg {...common}>
          <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6z"/>
          <path d="M19 15l.7 1.8L21.5 17.5l-1.8.7L19 20l-.7-1.8L16.5 17.5l1.8-.7z"/>
        </svg>
      );
    case 'shield':
      return (
        <svg {...common}>
          <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      );
    case 'kid':
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="4"/>
          <path d="M5 21c0-3.9 3.1-7 7-7s7 3.1 7 7"/>
          <path d="M9.5 8h0M14.5 8h0"/>
        </svg>
      );
    case 'align':
      return (
        <svg {...common}>
          <rect x="4" y="9" width="16" height="6" rx="2"/>
          <path d="M8 9V7M12 9V7M16 9V7M8 17v-2M12 17v-2M16 17v-2"/>
        </svg>
      );
    case 'emergency':
      return (
        <svg {...common}>
          <path d="M12 3v18M3 12h18"/>
          <circle cx="12" cy="12" r="9"/>
        </svg>
      );
    case 'calendar':
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="16" rx="3"/>
          <path d="M3 10h18M8 3v4M16 3v4"/>
        </svg>
      );
    case 'phone':
      return (
        <svg {...common}>
          <path d="M5 4h3l2 5-2 1c1 2.5 3 4.5 5.5 5.5l1-2 5 2v3c0 1-1 2-2 2A15 15 0 0 1 3 6c0-1 1-2 2-2z"/>
        </svg>
      );
    case 'pin':
      return (
        <svg {...common}>
           <path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13z"/>
           <circle cx="12" cy="9" r="2.5"/>
        </svg>
      );
    case 'clock':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9"/>
          <path d="M12 7v5l3 2"/>
        </svg>
      );
    case 'mail':
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2"/>
          <path d="M3 7l9 6 9-6"/>
        </svg>
      );
    case 'check':
      return (
        <svg {...common}>
          <path d="M5 12l4 4 10-10"/>
        </svg>
      );
    case 'arrow':
      return (
        <svg {...common}>
          <path d="M5 12h14M13 6l6 6-6 6"/>
        </svg>
      );
    case 'star':
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M12 3l2.6 5.4L20.5 9l-4.5 4 1.2 6L12 16.6 6.8 19l1.2-6L3.5 9l5.9-.6z"/>
        </svg>
      );
    case 'quote':
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M7 7h4v4H8c0 2 1 3 3 3v3c-3 0-5-2-5-5V7zm8 0h4v4h-3c0 2 1 3 3 3v3c-3 0-5-2-5-5V7z"/>
        </svg>
      );
    case 'menu':
      return (
        <svg {...common}>
          <path d="M4 7h16M4 12h16M4 17h16"/>
        </svg>
      );
    case 'leaf':
      return (
        <svg {...common}>
          <path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14z"/>
          <path d="M5 19c4-4 7-7 14-14"/>
        </svg>
      );
    case 'badge-check':
      return (
        <svg {...common}>
          <path d="M12 3l2.4 1.8 3 .2.2 3 1.8 2.4-1.8 2.4-.2 3-3 .2L12 18l-2.4-1.8-3-.2-.2-3L4.6 10.6 6.4 8.2l.2-3 3-.2z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      );
    case 'play':
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M8 5l12 7-12 7z"/>
        </svg>
      );
    case 'chevron':
      return (
        <svg {...common}>
          <path d="M9 6l6 6-6 6"/>
        </svg>
      );
    case 'instagram':
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/>
        </svg>
      );
    case 'facebook':
      return (
        <svg {...common}>
          <path d="M14 8h2V5h-2c-2 0-3 1-3 3v2H9v3h2v6h3v-6h2l1-3h-3V8z"/>
        </svg>
      );
    default:
      return null;
  }
};

window.Icon = Icon;
