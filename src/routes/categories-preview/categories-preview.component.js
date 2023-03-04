// import useCategoriesContext from '../../hooks/categories-context.hooks';

import CategoryPreview from '../../components/category-preview/category-preview.component';
import { Fragment } from 'react';
import Spinner from '../../components/spinner/spinner.component';

import { useSelector } from 'react-redux';
import {
  selectorCategoriesMap,
  selectIsCategoriesLoading,
} from '../../store/categories/categories.selector';

const CategoriesPreview = () => {
  // const { categoriesMap } = useCategoriesContext();

  const categoriesMap = useSelector(selectorCategoriesMap);
  const isLoading = useSelector(selectIsCategoriesLoading);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
