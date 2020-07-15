import React from 'react';

import {connect} from 'react-redux';
import {selectCollections} from '../../redux/shop/shop-selectors';

import {createStructuredSelector} from 'reselect';

import CollectionPreview from '../../components/collection-preview/CollectionPreview';

const Shop = ({collections}) => (
    <div className="shop">
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(Shop);