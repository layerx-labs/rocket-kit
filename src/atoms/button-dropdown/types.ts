export interface ActionMenu<T> {
  id: string;
  value: string;
  visibilityFunc?: (data: T) => boolean;
  url?: string;
  action?: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    data: T | null
  ) => void;
}
