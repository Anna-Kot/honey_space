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
  onChangeCategory: any;
};

export interface CartProps {
  id: string;
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
