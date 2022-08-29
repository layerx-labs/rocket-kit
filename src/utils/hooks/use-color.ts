import { colors, colorHues } from "../../ions/variables"

export const useColor = (value: string) => {
  // @ts-ignore
  const color = colors?.[value];
  const c = value.split(/([0-9]+)/).filter(Boolean);
  const tint = c[0];
  const hue = parseFloat(c[1]);

  const getHoverColor = (tint: string, hue: number) => {
    const indexCurrentHue = colorHues.indexOf(hue);
    const indexIsLast = indexCurrentHue === colorHues.length - 1;
    const indexHoverHue = indexIsLast ? indexCurrentHue - 1 : indexCurrentHue + 1;
    // @ts-ignore
    const hoverColor = colors?.[indexCurrentHue > -1 ? tint + colorHues[indexHoverHue] : tint];

    return hoverColor ?? colors.black;
  }

  const hover = getHoverColor(tint, hue);

  return {color, hover};
};