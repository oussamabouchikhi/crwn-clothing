import React from 'react';

import {selectCartItems, selectCartTotal} from '../../redux/cart/cart-selectors';

import {createStructuredSelector} from 'reselect';

import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeCheckoutButton from '../../components/stripe-button/StripeButton';

import './checkout.scss';
import { connect } from 'react-redux';

const Checkout = ({cartItems, total}) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                {
                    ["Product", "Price", "Quantity","Remove"].map(product => (
                        <div className="header-block">
                            <span>{product}</span>
                        </div>
                    ))
                }
            </div>
                {
                    cartItems.map(cartItem => (
                        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                    ))
                }
            <div className="total"><span>TOTAL: ${total}</span></div>
            <div className="test-warning">
                *Please use the following test credit card for payments*<br />
                4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
            </div>
            <StripeCheckoutButton price={total} />
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);