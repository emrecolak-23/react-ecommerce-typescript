import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles';
import { useNavigate } from 'react-router-dom';
import { useCallback, useMemo } from 'react';
import Button from '../button/button.component';
import CartItemComp from '../cart-item/cart-item.component';
// import useCartContext from '../../hooks/cart-context.hooks';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
const CartDropdown = () => {
  // const { cartItems } = useCartContext();
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = useCallback(() => {
    navigate('/checkout');
  }, []);

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItemComp key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your card is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
