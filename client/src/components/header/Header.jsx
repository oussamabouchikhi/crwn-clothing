import React from 'react';

import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from '../../redux/user/user-selectors';
import {selectCartHidden} from '../../redux/cart/cart-selectors';

import {ReactComponent as Logo} from '../../assets/crown.svg';

import {auth} from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header-styles';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink to='/contact'>CONTACT</OptionLink>
            {
                currentUser ? // If user is authenticated
                    <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
                :
                    <OptionLink to='/register'>REGISTER</OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {hidden ? null : <CartDropdown />}
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});


export default connect(mapStateToProps)(Header);