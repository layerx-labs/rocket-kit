const size = {
  xs: '360px',
  s: '700px',
  m: '900px',
  l: '1280px',
  xl: '1600px',
};

export const device = {
  xs: `(min-width: ${size.xs})`,
  s: `(min-width: ${size.s})`,
  m: `(min-width: ${size.m})`,
  l: `(min-width: ${size.l})`,
  xl: `(min-width: ${size.xl})`,
  touch: `(hover: none) and (pointer: coarse)`,
  mouse: '(min-width: 538px) and (min-height: 720px)',
};
