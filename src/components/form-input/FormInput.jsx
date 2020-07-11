import React from 'react';
import './form-input.scss'

const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className="group">
        <input 
            {...otherProps}
            className="form-input" 
            onChange={handleChange} />
        {label ? (
            <label 
                className={`${otherProps.value.lenght ? 'shrink' : ''} form-input-label`}
            >
                {label}
            </label>
        ) : null}
    </div>
)

export default FormInput;