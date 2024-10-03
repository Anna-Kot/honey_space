import { CartItemType } from '../helpers/interfaces';
import { calculateTotals } from './calculateTotals';

export const getCartFromLS = () => {
  const data = localStorage.getItem('cart');
  const items = data ? JSON.parse(data) : [];
  const { totalPrice, totalCount } = calculateTotals(items);

  return {
    items: items as CartItemType[],
    totalPrice,
    totalCount,
  };
};
