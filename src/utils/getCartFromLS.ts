import { calculateTotals } from './calculateTotals';

export const getCartFromLS = () => {
  const data = localStorage.getItem('cart');
  const items = data ? JSON.parse(data) : [];
  const { totalPrice, totalCount } = calculateTotals(items);

  return {
    items,
    totalPrice,
    totalCount,
  };
};
