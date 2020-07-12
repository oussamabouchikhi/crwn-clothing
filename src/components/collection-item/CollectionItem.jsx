import React from 'react';

import CustumButton from '../custum-button/CustumButton';

import './collection-item.scss';

const CollectionItem = ({ name, price, imageUrl }) => {
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
            <CustumButton>Add to cart</CustumButton>
        </div>
    )
}

export default CollectionItem;