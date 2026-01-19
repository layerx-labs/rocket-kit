/**
 * CSS Utilities for CSS Modules migration
 */

/**
 * Convert pixel values to rem units
 * Assumes base font size of 16px
 * @param px - Pixel value as number or string (e.g., 16 or '16px')
 * @returns rem string (e.g., '1rem')
 */
export function rem(px: number | string): string {
  const pxValue = typeof px === 'string' ? parseFloat(px) : px;
  return `${pxValue / 16}rem`;
}

/**
 * Make a color transparent by a given amount
 * @param amount - 0 (fully opaque) to 1 (fully transparent)
 * @param color - hex color string (e.g., '#ff0000' or 'ff0000')
 * @returns rgba color string
 */
export function transparentize(amount: number, color: string): string {
  const hex = color.replace('#', '');
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${1 - amount})`;
}
