import React from 'react';
import CustumButton from '../custum-button/CustumButton';
import './cart-dropdown.scss';

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items"></div>
        <CustumButton>GO TO CHECKOUT</CustumButton>
    </div>
);

export default CartDropdown;