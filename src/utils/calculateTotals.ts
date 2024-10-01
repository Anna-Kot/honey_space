import { CalculationTypes, CartItemTypes } from '../helpers/interfaces';

export const calculateTotals = (items: CartItemTypes[]) => {
  const totalPrice = items.reduce((sum, obj: CalculationTypes) => sum + obj.price * obj.count, 0);
  const totalCount = items.reduce((sum, obj: CalculationTypes) => sum + obj.count, 0);
  return { totalPrice, totalCount };
};
