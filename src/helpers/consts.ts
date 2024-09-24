import { sortingType } from '../helpers/interfaces';
export const categoriesList: string[] = [
  'Всі',
  'Мед',
  'Горішки в меду',
  'Соти',
  'Свічки',
  'Настоянки',
];

export const sortingList: sortingType[] = [
  { name: 'популярністю', sortProperty: 'rating' },
  { name: 'ціною', sortProperty: 'priceMin' },
  { name: 'алфавітом', sortProperty: 'title' },
];
