export type ActionMenuType = 'default' | 'danger' | 'disabled';

export interface ActionMenu<T> {
  id: string;
  type: ActionMenuType;
  value: string;
  visibilityFunc?: (data: T) => boolean;
  url?: string;
  action?: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    data: T | null
  ) => void;
}
