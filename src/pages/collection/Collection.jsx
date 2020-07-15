import React from 'react';

import {selectCollection} from '../../redux/shop/shop-selectors';

import CollectionItem from '../../components/collection-item/CollectionItem';

import './collection.scss';
import { connect } from 'react-redux';

const Collection = ({match}) => (
    <div className="collection-page">
        <h1>{match.params.collectionId}</h1>
    </div>
);

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);