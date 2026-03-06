import { useState, useRef } from 'react';
import { setBrandColour } from '../utils/setBrandColour.js';

const DEFAULT_HEX = '#A03AFF';

const PRESETS = [
  { label: 'Purple',  hex: '#A03AFF' },
  { label: 'Blue',    hex: '#1C6EF1' },
  { label: 'Teal',    hex: '#059669' },
  { label: 'Red',     hex: '#E32631' },
  { label: 'Amber',   hex: '#F59E0B' },
  { label: 'Pink',    hex: '#EC4899' },
];

export default function BrandPicker() {
  const [active, setActive] = useState(DEFAULT_HEX);
  const inputRef = useRef(null);

  function apply(hex) {
    setActive(hex);
    setBrandColour(hex);
  }

  function handleInput(e) {
    const val = e.target.value.trim();
    if (/^#[0-9A-Fa-f]{6}$/.test(val)) {
      apply(val);
    }
  }

  function reset() {
    apply(DEFAULT_HEX);
    if (inputRef.current) inputRef.current.value = '';
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '10px 20px',
      background: 'var(--card-bg)',
      border: '1px solid var(--rule)',
      borderRadius: '999px',
      boxShadow: '0 4px 24px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.08)',
      fontSize: '13px',
      fontFamily: 'var(--sans)',
    }}>
      <span style={{ color: 'var(--ink-2)', fontWeight: 500, whiteSpace: 'nowrap' }}>
        Brand
      </span>

      <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
        {PRESETS.map((preset) => (
          <button
            key={preset.hex}
            title={preset.label}
            onClick={() => apply(preset.hex)}
            style={{
              width: 22,
              height: 22,
              borderRadius: '50%',
              background: preset.hex,
              border: active === preset.hex ? '2px solid var(--ink)' : '2px solid transparent',
              outline: active === preset.hex ? '2px solid var(--card-bg)' : 'none',
              cursor: 'pointer',
              transition: 'border 0.15s, outline 0.15s',
              padding: 0,
            }}
          />
        ))}
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        marginLeft: '4px',
      }}>
        <input
          ref={inputRef}
          type="text"
          placeholder="#FF6B00"
          maxLength={7}
          onBlur={handleInput}
          onKeyDown={(e) => e.key === 'Enter' && handleInput(e)}
          style={{
            width: 80,
            padding: '3px 8px',
            border: '1px solid var(--rule)',
            borderRadius: 'calc(var(--radius) * 0.6)',
            fontFamily: 'var(--mono)',
            fontSize: '12px',
            color: 'var(--ink)',
            background: 'var(--page-bg)',
            outline: 'none',
          }}
        />
        <button
          onClick={reset}
          style={{
            padding: '3px 10px',
            border: '1px solid var(--rule)',
            borderRadius: 'calc(var(--radius) * 0.6)',
            background: 'var(--page-bg)',
            color: 'var(--ink-2)',
            fontSize: '12px',
            fontFamily: 'var(--sans)',
            cursor: 'pointer',
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
