import React from 'react';
import './custum-button.scss';

const CustumButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => (
    <button 
        className={`
                ${inverted ? 'inverted' : ''} 
                ${isGoogleSignIn ? 'google-sign-in' : ''} 
                custom-button
            `} 
            {...otherProps}
        >
        {children}
    </button>
);

export default CustumButton;