import React from 'react';

import {Route} from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import CollectionPage from '../collection/Collection';

const Shop = ({match}) => (
    <div className="shop">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
);

export default Shop;