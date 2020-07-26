import React from 'react';
import CollectionItem from '../collection-item/CollectionItem';

import {
    CollectionPreviewContainer,
    TitleContainer,
    PreviewContainer
  } from './collection-preview-styles';

const CollectionPreview = ({ title, items }) => (
    <CollectionPreviewContainer>
        <TitleContainer>{title.toUpperCase()}</TitleContainer>
        <PreviewContainer>
        {
            items
                .filter((item, index) => index < 4) // show 4 items
                .map(item =>  <CollectionItem key={item.id} item={item}/>)
        }
        </PreviewContainer>
    </CollectionPreviewContainer>
);

export default CollectionPreview;