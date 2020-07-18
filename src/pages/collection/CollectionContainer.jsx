import {compose} from 'redux';

import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop-selectors';

import WithSpinner from '../../components/with-spinner/WithSpinner';

import CollectionPage from './Collection';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionsPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner,
)(CollectionPage);

export default CollectionsPageContainer;