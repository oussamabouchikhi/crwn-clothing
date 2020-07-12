import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.scss';

const CartIcon = () => (
    <div className="cart-icon">
        <ShoppingIcon className='shopping-icon' />
        <div className="item-count">0</div>
    </div>
);

export default CartIcon;