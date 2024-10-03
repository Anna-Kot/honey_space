//full product type
export interface ProductTypes {
  id: number;
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

// sorting:
export enum SortPropertyEnum {
  RATING = 'rating',
  PRICEMIN = 'priceMin',
  TITLE = 'title',
}
export type SortingType = {
  name: string;
  sortProperty: SortPropertyEnum;
};

export type SortProps = {
  sortType: SortingType;
};

export type CategoriesProps = {
  categoryId: number;
  onChangeCategory: (i: number) => void;
};

//cart types:
export type CartProps = {
  id: string;
  title: string;
  price: number;
  size: number;
  imageUrl: string;
  count: number;
  typeUnits: string;
};
export type CartItemType = {
  id: string;
  title: string;
  index?: number;
  price: number;
  size: number;
  imageUrl: string;
  typeUnits: string;
  count: number;
};

export interface CartItemTypes {
  item: CartProps;
}

export interface CartSliceTypes {
  totalPrice: number;
  totalCount: number;
  items: CartItemType[];
}

//filter types:
export interface FilterSliceTypes {
  categoryId: number;
  currentPage: number;
  searchValue: string;
  sortType: SortingType;
}

export interface SetFilterTypes {
  categoryId: number;
  currentPage: number;
  searchValue: string;
  sortType: SortingType;
}

//products types:
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

export interface ProductsSliceTypes {
  items: ProductTypes[];
  status: Status;
  typeError?: string | number | undefined;
}

export type APIProductParams = {
  sortBy: string;
  sortCategory: string;
  currentPage: number;
  search: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type PaginationProps = {
  currentPage: number;
  onChangePage: (page: number) => void;
};

export interface ThemeContextProps {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}
// export type PopupClick = MouseEvent & {
//   path: Node[];
// };
export interface CalculationTypes {
  price: number;
  count: number;
}

export interface ErrorProperties {
  status: number;
  title: string;
}
export type MinusItem = {
  id: string;
};
