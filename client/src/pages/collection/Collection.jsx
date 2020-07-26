import React from 'react';

import {selectCollection} from '../../redux/shop/shop-selectors';

import CollectionItem from '../../components/collection-item/CollectionItem';

import { connect } from 'react-redux';

import {
    CollectionPageContainer,
    CollectionTitle,
    CollectionItemsContainer
} from './collection-styles';

const Collection = ({ collection }) => {
    const { title, items } = collection;
    return (
        <CollectionPageContainer>
        <CollectionTitle>{title}</CollectionTitle>
        <CollectionItemsContainer>
            {items.map(item => (
            <CollectionItem key={item.id} item={item} />
            ))}
        </CollectionItemsContainer>
        </CollectionPageContainer>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);