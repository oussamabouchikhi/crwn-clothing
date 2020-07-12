import React from 'react';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';

import {ReactComponent as Logo} from '../../assets/crown.svg';

import {auth} from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

import './header.scss';

const Header = ({ currentUser, hidden }) => (
    <header className="header">
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className="options">
            <Link className="option" to='/shop'>SHOP</Link>
            <Link className="option" to='/contact'>CONTACT</Link>
            {
                currentUser ? // If user is authenticated
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                    <Link className="option" to='/register'>REGISTER</Link>
            }
            <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
    </header>
);

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
});


export default connect(mapStateToProps)(Header);