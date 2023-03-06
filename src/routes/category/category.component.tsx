import {CategoryContainer, CategoryTitle} from './category.styles';
import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
// import useCategoriesContext from '../../hooks/categories-context.hooks';
import ProductCard from '../../components/product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';
import { useSelector } from 'react-redux';
import {
  selectorCategoriesMap,
  selectIsCategoriesLoading,
} from '../../store/categories/categories.selector';

type CategoryRouteParams = {
  category: string
}

const Category = () => {
  const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
  // const { categoriesMap } = useCategoriesContext();
  const categoriesMap = useSelector(selectorCategoriesMap);
  const isLoading = useSelector(selectIsCategoriesLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;
