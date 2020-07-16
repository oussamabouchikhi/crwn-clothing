import React from 'react';
import {CustumButtonContainer} from './custum-button-styles';

const CustumButton = ({children, ...props}) => (
    <CustumButtonContainer {...props} >
        {children}
    </CustumButtonContainer>
);

export default CustumButton;