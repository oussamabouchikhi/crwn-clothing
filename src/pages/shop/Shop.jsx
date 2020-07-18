import React from 'react';

import {connect} from 'react-redux';

import {updateCollections} from '../../redux/shop/shop-actions';

import {Route} from 'react-router-dom';

import WithSpinner from '../../components/with-spinner/WithSpinner';

import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import CollectionPage from '../collection/Collection';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class Shop extends React.Component {

    state = {
        loading: true
    }

    unsubscribeFromSnapshot = null;

    componentDidMount() {

        const {updateCollections} = this.props;
        const collectionsRef = firestore.collection('collections');

        collectionsRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({loading: false});
        });

    }

    render () {
        const {match} = this.props;
        const {loading} = this.state;

        return (
            <div className="shop">
                <Route 
                    exact path={`${match.path}`} 
                    render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} 
                    />
                <Route 
                    path={`${match.path}/:collectionId`}
                    render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} 
                    />
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(Shop);