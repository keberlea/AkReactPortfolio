import React from 'react';

function Logo() {
  return (
    <svg
      width="205"
      height="54"
      viewBox="0 0 205 54"
      aria-label="Alicia Keberle"
      role="img"
    >
      {/* Outer hex ring */}
      <polygon
        points="27,3 47,14.5 47,37.5 27,49 7,37.5 7,14.5"
        style={{ fill: 'none', stroke: 'var(--accent)', strokeWidth: 0.7 }}
      />
      {/* Inner hex ring */}
      <polygon
        points="27,9 42,18 42,34 27,43 12,34 12,18"
        style={{ fill: 'none', stroke: 'var(--accent)', strokeWidth: 0.6, opacity: 0.42 }}
      />
      {/* AK initials */}
      <text
        x="27"
        y="30"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="15"
        fontStyle="italic"
        style={{ fill: 'var(--accent)' }}
      >
        AK
      </text>
      {/* Divider */}
      <line
        x1="59" y1="10" x2="59" y2="44"
        style={{ stroke: 'var(--accent)', strokeWidth: 0.4, opacity: 0.22 }}
      />
      {/* ALICIA */}
      <text
        x="70"
        y="23"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        fontSize="10"
        letterSpacing="3"
        style={{ fill: 'var(--text-primary)' }}
      >
        ALICIA
      </text>
      {/* KEBERLE */}
      <text
        x="70"
        y="38"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        fontSize="10"
        letterSpacing="3"
        style={{ fill: 'var(--text-primary)' }}
      >
        KEBERLE
      </text>
    </svg>
  );
}

export default Logo;