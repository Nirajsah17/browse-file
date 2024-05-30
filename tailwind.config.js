/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
     "./index.html"
    ],
    
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1200px',
        '2xl': '1920px'
      },
      borderWidth: {
        DEFAULT: '1px',
        0: '0',
        2: '3px',
        4: '4px'
      },
      fontSize: {
        tiny: ['0.65rem', { lineHeight: '0.8rem' }],
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }]
      },
      extend: {
        colors: {
          fg: {
            default: 'var(--fg-default)',
            muted: 'var(--fg-muted)',
            subtle: 'var(--fg-subtle)',
            accent: 'var(--fg-accent)',
            success: 'var(--fg-success)',
            attention: 'var(--fg-attention)',
            severe: 'var(--fg-severe)',
            danger: 'var(--fg-danger)',
            done: 'var(--fg-done)',
            sponsors: 'var(--fg-sponsors)',
            emphasis: 'var(--fg-emphasis)'
          },
          bg: {
            default: 'var(--bg-default)',
            overlay: 'var(--bg-overlay)',
            inset: 'var(--bg-inset)',
            subtle: 'var(--bg-subtle)',
            emphasis: 'var(--bg-emphasis)',
            accent: 'var(--bg-accent)',
            accentEmphasis: 'var(--bg-accent-emphasis)',
            success: 'var(--bg-success)',
            successEmphasis: 'var(--bg-success-emphasis)',
            attention: 'var(--bg-attention)',
            attentionEmphasis: 'var(--bg-attention-emphasis)',
            severe: 'var(--bg-severe)',
            severeEmphasis: 'var(--bg-severe-emphasis)',
            danger: 'var(--bg-danger)',
            dangerEmphasis: 'var(--bg-danger-emphasis)',
            done: 'var(--bg-done)',
            doneEmphasis: 'var(--bg-done-emphasis)',
            sponsors: 'var(--bg-sponsors)',
            sponsorsEmphasis: 'var(--bg-sponsors-emphasis)'
          },
          canvas: {
            default: 'var(--canvas-default)',
            overlay: 'var(--canvas-overlay)',
            inset: 'var(--canvas-inset)',
            subtle: 'var(--canvas-subtle)',
            emphasis: 'var(--canvas-emphasis)'
          },
          accent: {
            emphasis: 'var(--accent-emphasis)',
            muted: 'var(--accent-muted)',
            subtle: 'var(--accent-subtle)'
          },
          success: {
            emphasis: 'var(--success-emphasis)',
            muted: 'var(--success-muted)',
            subtle: 'var(--success-subtle)'
          },
          attention: {
            emphasis: 'var(--attention-emphasis)',
            muted: 'var(--attention-muted)',
            subtle: 'var(--attention-subtle)'
          },
          severe: {
            emphasis: 'var(--severe-emphasis)',
            muted: 'var(--severe-muted)',
            subtle: 'var(--severe-subtle)'
          },
          danger: {
            emphasis: 'var(--danger-emphasis)',
            muted: 'var(--danger-muted)',
            subtle: 'var(--danger-subtle)'
          },
          open: {
            emphasis: 'var(--open-emphasis)',
            muted: 'var(--open-muted)',
            subtle: 'var(--open-subtle)'
          },
          closed: {
            emphasis: 'var(--closed-emphasis)',
            muted: 'var(--closed-muted)',
            subtle: 'var(--closed-subtle)'
          },
          done: {
            emphasis: 'var(--done-emphasis)',
            muted: 'var(--done-muted)',
            subtle: 'var(--done-subtle)'
          },
          sponsors: {
            emphasis: 'var(--sponsors-emphasis)',
            muted: 'var(--sponsors-muted)',
            subtle: 'var(--sponsors-subtle)'
          },
          border: {
            default: 'var(--border-default)',
            muted: 'var(--border-muted)',
            subtle: 'var(--border-subtle)',
            accent: 'var(--border-accent)',
            accentEmphasis: 'var(--border-accent-emphasis)',
            success: 'var(--border-success)',
            successEmphasis: 'var(--border-success-emphasis)',
            attention: 'var(--border-attention)',
            attentionEmphasis: 'var(--border-attention-emphasis)',
            severe: 'var(--border-severe)',
            severeEmphasis: 'var(--border-severe-emphasis)',
            danger: 'var(--border-danger)',
            dangerEmphasis: 'var(--border-danger-emphasis)',
            done: 'var(--border-done)',
            doneEmphasis: 'var(--border-done-emphasis)',
            sponsors: 'var(--border-sponsors)',
            sponsorsEmphasis: 'var(--border-sponsors-emphasis)'
          }
        }
      }
    }
};
