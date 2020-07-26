import React from 'react';

import {selectCartItems, selectCartTotal} from '../../redux/cart/cart-selectors';

import {createStructuredSelector} from 'reselect';

import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeCheckoutButton from '../../components/stripe-button/StripeButton';

import { connect } from 'react-redux';

import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    HeaderBlockContainer,
    TotalContainer,
    WarningContainer
  } from './checkout-styles';

const Checkout = ({cartItems, total}) => {
    return (
        <CheckoutPageContainer>
            <CheckoutHeaderContainer>
                {
                    ["Product", "Price", "Quantity","Remove"].map(item => (
                        <HeaderBlockContainer>
                            <span>{item}</span>
                        </HeaderBlockContainer>
                    ))
                }
            </CheckoutHeaderContainer>
                {
                    cartItems.map(cartItem => (
                        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                    ))
                }
            <TotalContainer>TOTAL: ${total}</TotalContainer>
            <WarningContainer>
                *Please use the following test credit card for payments*<br />
                4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
            </WarningContainer>
            <StripeCheckoutButton price={total} />
        </CheckoutPageContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);