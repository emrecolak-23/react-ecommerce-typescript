import {
  NavigationContainer,
  NavLinkContainer,
  NavLink,
  LogoContainer,
} from './navigation.styles';

// import useUserContext from '../../hooks/user-context.hooks';
// import useCartContext from '../../hooks/cart-context.hooks';
import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

// import { signOutUser } from '../../utils/firebase/firebase.utils';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CardIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { useSelector, useDispatch } from 'react-redux';
import { signOutStart } from '../../store/user/user.actions';
import { selectorCurrentUser } from '../../store/user/user.selector';

import { selectIsCartOpen } from '../../store/cart/cart.selector';

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectorCurrentUser);
  // const { currentUser } = useUserContext();
  // const { isCartOpen } = useCartContext();
  const isCartOpen = useSelector(selectIsCartOpen);

  const handleSignOut = () => {
    dispatch(signOutStart());
    // await signOutUser();
  };

  let authLink;
  if (!currentUser) {
    authLink = <NavLink to="/auth">SIGN IN</NavLink>;
  } else {
    authLink = (
      <NavLink as="span" onClick={handleSignOut}>
        SIGN OUT
      </NavLink>
    );
  }

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinkContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {authLink}
          <CardIcon />
        </NavLinkContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
