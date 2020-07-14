import React from 'react';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {clearItemFromCart} from '../../redux/cart/cart-actions';

import './checkout-item.scss';

const CheckoutItem = ({cartItem, dispatch}) => {
    const {name, price, quantity, imageUrl} = cartItem
    return (<div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item"/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">{quantity}</span>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={()=> dispatch(clearItemFromCart(cartItem))}>&#10005;</div>
    </div>)
};

export default connect()(CheckoutItem);