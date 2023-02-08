import { colors as allColors } from '../../ions/variables';

export const colors = Object.keys(allColors);
export type TagVariant = 'solid' | 'outline';
export type TagColor = typeof colors[number];
