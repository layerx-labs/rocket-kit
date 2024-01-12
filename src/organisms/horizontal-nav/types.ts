export interface ItemInterface {
  icon?: string;
  label: string;
  url: string;
  active?: boolean;
}

export interface HorizontalNavInterface {
  id?: string;
  items: ItemInterface[];
}