export interface ProductTypes {
  title: string;
  imageUrl: string;
  priceList: { sizes: number[]; price: number[] };
  types: string;
  typeUnits: string;
  category: number;
  rating: number;
  description: string;
  priceMin: number;
}

export type sortingType = {
  name: string;
  sortProperty: string;
};

export type CategoriesProps = {
  categoryId: number;
  onChangeCategory: (i: number) => void;
};

export interface CartProps {
  id: number;
  title: string;
  price: number;
  size: number;
  imageUrl: string;
  count: number;
  typeUnits: string;
}

export interface CartItemType {
  item: CartProps;
}

export type PaginationProps = {
  currentPage: number;
  onChangePage: (page: number) => void;
};

export interface ProductBlockProps {
  id: number;
  title: string;
  priceList: PriceSizeTypes;
  imageUrl: string;
  typeUnits: string;
  types: string;
}
export type PriceSizeTypes = {
  price: number[];
  sizes: number[];
};

export interface CartItemTypes {
  id: string;
  title: string;
  index: number;
  price: number;
  size: number;
  imageUrl: string;
  typeUnits: string;
  count: number;
}

export type ParamIdType = {
  id: number;
};

export interface ThemeContextProps {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}
export type PopupClick = MouseEvent & {
  path: Node[];
};
