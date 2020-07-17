import React from 'react';

import {Route} from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import CollectionPage from '../collection/Collection';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

class Shop extends React.Component {

    unsubscribeFromSnapshot = null;

    componentDidMount() {
           
        const collectionsRef = firestore.collection('collections');
        collectionsRef.onSnapshot(async snapshot => {
            convertCollectionsSnapshotToMap(snapshot)
        });

    }

    render () {
        const {match} = this.props;

        return (
            <div className="shop">
                <Route exact path={`${match.path}`} component={CollectionsOverview} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        );
    }
}

export default Shop;