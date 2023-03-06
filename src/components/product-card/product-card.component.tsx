import {
  ProductCardContainer,
  ProductCardImage,
  ProductCardButton,
  FooterContainer,
  Name,
  Price,
} from './product-card.styles';
import { BUTTON_TYPE_CLASSES } from '../button/button.component';

// import useCartContext from '../../hooks/cart-context.hooks';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.actions';

import { CategoryItem } from '../../store/categories/categories.types';
import { FC } from 'react';

type ProductCardProps = {
  product: CategoryItem 
}

const ProductCard:FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, price, imageUrl } = product;

  // const { addItemToCart } = useCartContext();

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <ProductCardImage src={imageUrl} alt={`${name}`} />
      <FooterContainer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </FooterContainer>
      <ProductCardButton
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </ProductCardButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
