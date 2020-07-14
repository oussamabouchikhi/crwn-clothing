import React from 'react';

import {connect} from 'react-redux';

import {clearItemFromCart, removeItem, addItem} from '../../redux/cart/cart-actions';

import './checkout-item.scss';

const CheckoutItem = ({cartItem, dispatch}) => {
    const {name, price, quantity, imageUrl} = cartItem
    return (<div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item"/>
        </div>
        <span className="name">{name}</span>
        <div className="quantity">
            <span className="arrow" onClick={()=> dispatch(removeItem(cartItem))}>&#10094;</span>
            <span className="value">{quantity}</span>
            <span className="arrow" onClick={()=> dispatch(addItem(cartItem))}>&#10095;</span>
        </div>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={()=> dispatch(clearItemFromCart(cartItem))}>&#10005;</div>
    </div>)
};

export default connect()(CheckoutItem);