import React from 'react';

import './cart-item.scss';

const CartItem = ({item: {name, price, imageUrl, quantity}}) => (
    <div className="cart-item">
        <img src={imageUrl} alt="item"/>
        <div className="item-details">
            <div className="name">{name}</div>
            <div className="price">
                {quantity} x {price}
            </div>
        </div>
    </div>
);

export default CartItem;