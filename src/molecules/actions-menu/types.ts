export type ActionMenuType = 'danger' | 'default';

export interface ActionMenu<T> {
  visibilityFunc?: (data: T) => boolean;
  id: string;
  type: ActionMenuType;
  url?: string;
  action?: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    data: T | null
  ) => void;
  value: string;
}
