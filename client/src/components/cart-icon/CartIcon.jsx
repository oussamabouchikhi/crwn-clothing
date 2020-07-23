import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart-actions';

import {selectCartItemsCount} from '../../redux/cart/cart-selectors';

import './cart-icon.scss';

const CartIcon = ({toggleCartHidden, itemsCount}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <div className="item-count">{itemsCount}</div>
    </div>
);

const mapStateToProps = (state) => ({
itemsCount: selectCartItemsCount(state)
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);