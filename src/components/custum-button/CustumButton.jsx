import React from 'react';
import './custum-button.scss';

const CustumButton = ({children, ...otherProps}) => (
    <button className="custom-button" {...otherProps}>
        {children}
    </button>
);

export default CustumButton;