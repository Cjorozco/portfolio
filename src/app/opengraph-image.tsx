import { ImageResponse } from 'next/og';

export const alt = 'José Carlos Orozco – Senior Frontend Engineer · React, Next.js, TypeScript';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 80,
          background: '#0b0b0f',
          color: '#ffffff',
        }}
      >
        <div style={{ fontSize: 76, fontWeight: 700 }}>José Carlos Orozco</div>
        <div style={{ fontSize: 34, marginTop: 24, color: '#fb923c' }}>Senior Frontend Engineer · React, Next.js, TypeScript</div>
        <div style={{ fontSize: 30, marginTop: 24, color: '#9ca3af' }}>React · TypeScript · Next.js · Fintech</div>
      </div>
    ),
    size,
  );
}
