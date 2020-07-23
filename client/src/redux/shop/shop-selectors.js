import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

// Covert collections from objects to array
export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections ? collections[collectionUrlParam] : null
);

export const selectIsCollectionsFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

/**
 * Check if collections is loaded by checking its value weither it's
 * null or it returned an object
 * !!null @returns false
 * !!{} @returns true (even if the object is empty)
 */
export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
);