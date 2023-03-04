import { useContext } from 'react';

import { CategoriesContext } from '../contexts/categories.context';

const useCategoriesContext = () => {
  return useContext(CategoriesContext);
};

export default useCategoriesContext;
