import { MapHTMLAttributes } from 'react';
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

type TDivElement = Omit<MapHTMLAttributes<HTMLDivElement>, 'onChange'>;

type Options =
  | TSelectInteractiveOption
  | ReadonlyArray<TSelectInteractiveOption>;

export interface SelectInteractiveProps<T extends Options>
  extends TDivElement,
    Pick<NamedProps<T>, 'onInputChange'> {
  name?: string;
  error?: string;
  clear?: boolean;
  multi?: boolean;
  search?: boolean;
  disabled?: boolean;
  placeholder: string;
  formatGroupLabel?: boolean;
  value?: ReadonlyArray<TOptions> | TOptions | null | undefined;
  onChange: (values: Array<TOptions> | TOptions) => void;
  options: ReadonlyArray<TOptions | OptionsGroup<TOptions>>;
}
