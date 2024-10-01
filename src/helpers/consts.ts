import { SortingType, SortPropertyEnum } from '../helpers/interfaces';
export const categoriesList: string[] = [
  'Всі',
  'Мед',
  'Горішки в меду',
  'Соти',
  'Свічки',
  'Настоянки',
];

export const sortingList: SortingType[] = [
  { name: 'популярністю', sortProperty: SortPropertyEnum.RATING },
  { name: 'ціною', sortProperty: SortPropertyEnum.PRICEMIN },
  { name: 'алфавітом', sortProperty: SortPropertyEnum.TITLE },
];
