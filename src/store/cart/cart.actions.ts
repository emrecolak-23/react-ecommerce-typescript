import { CategoryItem } from '../categories/categories.types';
import { createAction, ActionWithPayload, withMatcher } from '../../utils/reducer/reducer.utils';
import { CART_ACTION_TYPES, CartItem } from './cart.types';

const addCartItem = (cartItems:CartItem[], productToAdd:CategoryItem):CartItem[] => {
  // find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  // If found, increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // return new array with modified cartItems / new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems:CartItem[], productToRemove:CartItem):CartItem[] => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );
  // check if quantity is equal to 1, if it is remove that item from cart
  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }
  // return back cartitems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems:CartItem[], productToClear:CartItem):CartItem[] => {
  return cartItems.filter((cartItem) => cartItem.id !== productToClear.id);
};


export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_CART_OPEN, boolean>
export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>


export const setIsCartOpen = withMatcher((isCartOpen:boolean):SetIsCartOpen =>
  createAction(CART_ACTION_TYPES.SET_CART_OPEN, isCartOpen));

export const setCartItems = withMatcher((cartItems: CartItem[]):SetCartItems => createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems))

export const addItemToCart = (cartItems:CartItem[], productToAdd:CategoryItem):SetCartItems => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

export const removeItemFromCart = (cartItems:CartItem[], productToRemove:CartItem):SetCartItems => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return setCartItems(newCartItems)
};

export const clearItemFromCart = (cartItems:CartItem[], productToClear:CartItem):SetCartItems => {
  const newCartItems = clearCartItem(cartItems, productToClear);
  return setCartItems(newCartItems)
};

export const clearItemsFromCart = ():SetCartItems => {
  return setCartItems([])
};
