import React from 'react';
import './collection-item.scss';

const CollectionItem = ({ id, name, price, imgUrl }) => {
    return (
        <div className="collection-item">
            <div 
                className="image"
                style={{
                    backgroundImage: `url(${imgUrl})`
                }}
            />
            <div className="collectio-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
        </div>
    )
}

export default CollectionItem;