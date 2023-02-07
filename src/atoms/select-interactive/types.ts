import { MapHTMLAttributes, ReactNode } from 'react';
import NamedProps from 'react-select/dist/declarations/src/Select';

export interface TSelectInteractiveOption {
  value: string;
  label: string;
  [k: string]: any;
}

export interface TOptions extends TSelectInteractiveOption {
  icon?: string;
  customImage?: string;
}

export interface TCustomOptions {
  data: TOptions;
}

export interface OptionsGroup<T extends TSelectInteractiveOption> {
  label: string;
  options: ReadonlyArray<T>;
}

type TDivElement = Omit<
  MapHTMLAttributes<HTMLDivElement>,
  'onChange' | 'placeholder'
>;

type Options =
  | TSelectInteractiveOption
  | ReadonlyArray<TSelectInteractiveOption>;

export interface SelectInteractiveProps<T extends Options>
  extends TDivElement,
    Partial<Pick<NamedProps<T>, 'onInputChange'>> {
  name?: string;
  error?: string;
  clear?: boolean;
  multi?: boolean;
  search?: boolean;
  disabled?: boolean;
  placeholder?: ReactNode;
  formatGroupLabel?: boolean;
  value?: ReadonlyArray<TOptions> | TOptions | null | undefined;
  onChange: (values: Array<TOptions> | TOptions) => void;
  options: ReadonlyArray<TOptions | OptionsGroup<TOptions>>;
}
