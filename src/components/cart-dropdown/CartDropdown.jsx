import React from 'react';

import {connect} from 'react-redux';

import CustumButton from '../custum-button/CustumButton';
import CartItem from '../cart-item/CartItem';

import './cart-dropdown.scss';

const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            }
        </div>
        <CustumButton>GO TO CHECKOUT</CustumButton>
    </div>
);

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
});

export default connect(mapStateToProps)(CartDropdown);