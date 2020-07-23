import React from 'react';

import {withRouter} from 'react-router-dom';

import {connect} from 'react-redux';

import {selectCartItems} from '../../redux/cart/cart-selectors';
import {toggleCartHidden} from '../../redux/cart/cart-actions';

import CustumButton from '../custum-button/CustumButton';
import CartItem from '../cart-item/CartItem';

import './cart-dropdown.scss';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length
                ? cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                : <span className="empty-message">Your cart is empty</span>
            }
        </div>
        <CustumButton 
            onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}
        >GO TO CHECKOUT</CustumButton>
    </div>
);

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));