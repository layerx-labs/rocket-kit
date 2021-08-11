export interface ActionMenu<T> {
  id: string;
  value: string;
  visibilityFunc?: (data: T) => boolean;
  url?: string;
  action?: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | React.ChangeEvent<HTMLSelectElement>,
    data: T | null
  ) => void;
}
