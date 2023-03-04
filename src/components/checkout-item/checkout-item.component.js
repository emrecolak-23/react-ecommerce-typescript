import './checkout-item.styles.scss';

// import useCartContext from '../../hooks/cart-context.hooks';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from '../../store/cart/cart.actions';
import { selectCartItems } from '../../store/cart/cart.selector';
const CheckoutItem = ({ cartItem }) => {
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
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemFromCartHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemToCartHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemFromCartHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
