export interface ToggleProps {
  /** The value that is called
   * when one of the fields is clicked
   */
  onClick?: (value: boolean) => void;
  labelLeft?: string;
  labelRight?: string;
  /** The default checked input */
  checked?: boolean;
  disabled?: boolean;
  /** Activates or disactivates the labels */
  isLabelVisible: boolean;
}
