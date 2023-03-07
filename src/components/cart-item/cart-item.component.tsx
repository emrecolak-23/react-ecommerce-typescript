import { FC, memo } from 'react';
import { CartItemContainer, ItemDetails } from './cart-item.styles';

import { CartItem } from '../../store/cart/cart.types';

type CartItemProps = {
  cartItem: CartItem
}

const CartItemComp:FC<CartItemProps> = memo(({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span className="title">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
});

export default CartItemComp;
