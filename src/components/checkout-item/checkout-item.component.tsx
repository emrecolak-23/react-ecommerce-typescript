import {
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  Name,
  Price,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-item.styles';

// import useCartContext from '../../hooks/cart-context.hooks';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from '../../store/cart/cart.actions';
import { selectCartItems } from '../../store/cart/cart.selector';

import { CartItem } from '../../store/cart/cart.types';
import {FC} from 'react'
type CheckoutItemProp = {
  cartItem: CartItem
}

const CheckoutItem:FC<CheckoutItemProp> = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { imageUrl, name, price, quantity } = cartItem;
  // const { clearItemFromCart, addItemToCart, removeItemFromCart } =
  //   useCartContext();
  const cartItems = useSelector(selectCartItems);

  const clearItemFromCartHandler = () => {
    dispatch(clearItemFromCart(cartItems, cartItem));
  };

  const removeItemFromCartHandler = () => {
    dispatch(removeItemFromCart(cartItems, cartItem));
  };

  const addItemToCartHandler = () => {
    dispatch(addItemToCart(cartItems, cartItem));
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={removeItemFromCartHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemToCartHandler}>&#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={clearItemFromCartHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
