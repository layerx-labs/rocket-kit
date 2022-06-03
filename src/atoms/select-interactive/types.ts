import { NamedProps } from 'react-select/src/Select';

export interface TSelectInteractiveOption {
  value: string;
  label: string;
}

export interface TOptions extends TSelectInteractiveOption {
  icon?: string;
  customImage?: React.ReactNode;
}

export interface TCustomOptions {
  data: TOptions;
}

export interface OptionsGroup<T extends TSelectInteractiveOption> {
  label: string;
  options: ReadonlyArray<T>;
}

export interface SelectInteractiveProps<T extends TSelectInteractiveOption> {
  name?: string;
  error?: string;
  clear?: boolean;
  multi?: boolean;
  search?: boolean;
  disabled?: boolean;
  placeholder: string;
  formatGroupLabel?: boolean;
  onInputChange?: () => void;
  onChange?: NamedProps<T>['onChange'];
  value: TOptions[] | TOptions | null | undefined;
  options: ReadonlyArray<TOptions | OptionsGroup<TOptions>>;
}
