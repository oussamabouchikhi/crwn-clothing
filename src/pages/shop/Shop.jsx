import React from 'react';

import {connect} from 'react-redux';

import {updateCollections} from '../../redux/shop/shop-actions';

import {Route} from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import CollectionPage from '../collection/Collection';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

class Shop extends React.Component {

    unsubscribeFromSnapshot = null;

    componentDidMount() {

        const {updateCollections} = this.props;
           
        const collectionsRef = firestore.collection('collections');
        collectionsRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
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


const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(Shop);