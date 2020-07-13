import React from 'react';

import {selectCartItems, selectCartTotal} from '../../redux/cart/cart-selectors';

import {createStructuredSelector} from 'reselect';

import './checkout.scss';
import { connect } from 'react-redux';

const Checkout = ({cartItems, total}) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            <div className="cart-items">
                {
                    cartItems.map(cartItem => (
                        cartItem.name
                    ))
                }
            </div>
            <div className="total">
            <span>TOTAL: ${total}</span>
            </div>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);