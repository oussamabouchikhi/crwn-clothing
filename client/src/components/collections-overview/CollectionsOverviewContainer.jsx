import {compose} from 'redux';

import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';
import { selectIsCollectionsFetching } from '../../redux/shop/shop-selectors';

import WithSpinner from '../../components/with-spinner/WithSpinner';

import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionsFetching
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner,
)(CollectionsOverview);

// const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview));

export default CollectionsOverviewContainer;