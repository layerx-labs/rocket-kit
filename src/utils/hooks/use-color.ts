import { colors, colorHues } from '../../ions/variables';

export interface UseColorResult {
  /** The actual hex color value */
  color: string;
  /** The hover color hex value */
  hover: string;
  /** CSS variable reference (e.g., "var(--purple500)") */
  colorVar: string;
  /** CSS variable reference for hover state */
  hoverVar: string;
}

export const useColor = (value: string): UseColorResult => {
  // @ts-ignore
  const color = colors[value] ?? colors.black;
  const c = value.split(/([0-9]+)/).filter(Boolean);
  const tint = c[0];
  const hue = parseFloat(c[1]);

  const getHoverHue = (hue: number): number => {
    const indexCurrentHue = colorHues.indexOf(hue);
    const indexIsLast = indexCurrentHue === colorHues.length - 1;
    return indexIsLast ? colorHues[indexCurrentHue - 1] : colorHues[indexCurrentHue + 1];
  };

  const getHoverColor = (tint: string, hue: number): string => {
    const indexCurrentHue = colorHues.indexOf(hue);
    // @ts-ignore
    const hoverColor = colors[indexCurrentHue > -1 ? tint + getHoverHue(hue) : tint];
    return hoverColor ?? colors.black;
  };

  const getHoverColorName = (tint: string, hue: number): string => {
    const indexCurrentHue = colorHues.indexOf(hue);
    if (indexCurrentHue > -1) {
      return `${tint}${getHoverHue(hue)}`;
    }
    return tint;
  };

  const hover = getHoverColor(tint, hue);
  const hoverColorName = getHoverColorName(tint, hue);

  return {
    color,
    hover,
    colorVar: `var(--${value})`,
    hoverVar: `var(--${hoverColorName})`,
  };
};