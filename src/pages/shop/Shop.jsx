import React from 'react';

import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';
import { selectIsCollectionsFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop-selectors';

import {fetchCollectionsStartAsync} from '../../redux/shop/shop-actions';

import {Route} from 'react-router-dom';

import WithSpinner from '../../components/with-spinner/WithSpinner';

import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import CollectionPage from '../collection/Collection';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class Shop extends React.Component {

    componentDidMount() {
        const {fetchCollectionsStartAsync} = this.props;
        fetchCollectionsStartAsync();
    }

    render () {
        const {match, isCollectionsFetching, isCollectionsLoaded} = this.props;

        return (
            <div className="shop">
                <Route 
                    exact path={`${match.path}`} 
                    render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionsFetching} {...props} />} 
                    />
                <Route 
                    path={`${match.path}/:collectionId`}
                    render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />} 
                    />
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionsFetching: selectIsCollectionsFetching,
    isCollectionsLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);