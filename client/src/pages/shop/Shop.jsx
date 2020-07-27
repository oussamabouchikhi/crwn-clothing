import React, {useEffect, lazy, Suspense} from 'react';

import {connect} from 'react-redux';

import {fetchCollectionsStartAsync} from '../../redux/shop/shop-actions';

import {Route} from 'react-router-dom';
import Spinner from '../../components/spinner/Spinner';

const CollectionsOverviewContainer = lazy(() => import('../../components/collections-overview/CollectionsOverviewContainer'));
const CollectionPageContainer = lazy(() => import('../collection/CollectionContainer'));

const Shop = ({fetchCollectionsStartAsync, match}) => {

    useEffect(() => {
        fetchCollectionsStartAsync();
    }, [fetchCollectionsStartAsync]);

    return (
        <div className="shop">
            <Suspense fallback={<Spinner />}>
                <Route 
                    exact path={`${match.path}`} 
                    component={CollectionsOverviewContainer} 
                    />
                <Route 
                    path={`${match.path}/:collectionId`}
                    component={CollectionPageContainer}
                    />
            </Suspense>
        </div>
    );

}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(Shop);