import React from 'react';

import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart-actions';

import CustumButton from '../custum-button/CustumButton';

import './collection-item.scss';

const CollectionItem = ({ item, addItem }) => {
    const {name, price, imageUrl} = item;
    return (
        <div className="collection-item">
            <div 
                className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <CustumButton onClick={() => addItem(item)}>Add to cart</CustumButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);