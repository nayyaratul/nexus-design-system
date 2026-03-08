import React from 'react'
import type { Preview } from '@storybook/react-vite'
import '../src/styles/base.css'
import '../src/styles/tokens.scss'
import { setBrandColour } from '../src/utils/setBrandColour'

const preview: Preview = {
  globalTypes: {
    brandColour: {
      description: 'Brand colour',
      toolbar: {
        title: 'Brand',
        icon: 'paintbrush',
        items: [
          { value: '', title: 'Purple (default)' },
          { value: '#1C6EF1', title: 'Blue' },
          { value: '#059669', title: 'Teal' },
          { value: '#E32631', title: 'Red' },
          { value: '#F59E0B', title: 'Amber' },
        ],
        dynamicTitle: true,
      },
    },
    theme: {
      description: 'Theme',
      toolbar: {
        title: 'Theme',
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
          { value: 'side-by-side', title: 'Side by side', icon: 'sidebyside' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    brandColour: '',
    theme: 'light',
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme;
      const brandColour = context.globals.brandColour;

      React.useEffect(() => {
        if (brandColour) {
          setBrandColour(brandColour);
        } else {
          // Reset to default purple
          const defaults = { 0: '#FCF9FF', 10: '#EDD5FF', 20: '#DDB2FF', 30: '#CC8DFF', 40: '#B866FF', 50: '#A03AFF', 60: '#7A00FF', 70: '#6200CD', 80: '#4A009B', 90: '#33006B', 100: '#110024' };
          Object.entries(defaults).forEach(([step, hex]) => {
            document.documentElement.style.setProperty(`--brand-${step}`, hex);
          });
        }
      }, [brandColour]);

      if (theme === 'side-by-side') {
        return (
          <div style={{ display: 'flex', gap: '2rem' }}>
            <div data-theme="light" style={{ flex: 1, padding: '1.5rem', background: 'var(--color-bg-primary)', borderRadius: 'var(--radius-200)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', marginBottom: '1rem', fontFamily: 'var(--sans)' }}>Light</div>
              <Story />
            </div>
            <div data-theme="dark" style={{ flex: 1, padding: '1.5rem', background: 'var(--color-bg-primary)', borderRadius: 'var(--radius-200)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', marginBottom: '1rem', fontFamily: 'var(--sans)' }}>Dark</div>
              <Story />
            </div>
          </div>
        );
      }

      document.documentElement.setAttribute('data-theme', theme);
      return (
        <div style={{ padding: '1.5rem', background: 'var(--color-bg-primary)', minHeight: '100%', fontFamily: 'var(--sans)' }}>
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo'
    },
    layout: 'fullscreen',
  },
};

export default preview;