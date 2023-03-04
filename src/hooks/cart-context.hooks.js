import { useContext } from 'react';

import { CartContext } from '../contexts/cart.context';

const useCartContext = () => {
  return useContext(CartContext);
};

export default useCartContext;
