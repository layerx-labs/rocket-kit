import { colors as allColors } from '../../ions/variables';

export const colors = Object.keys(allColors);
export type ButtonVariant = 'solid' | 'outline' | 'text';
export type ButtonColor = typeof colors[number];
