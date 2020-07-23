import React, { useState } from 'react';

import FormInput from '../form-input/FormInput';
import CustumButton from '../custum-button/CustumButton';

import {auth, signInWithGoogle} from '../../firebase/firebase.utils'; 

import  './sign-in.scss';

const SignIn = () => {

    const [userCredentials, setCredentials] = useState({email: '', password: ''});

    const {email, password} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);
            setCredentials({email: '', password: ''});

        } catch (error) {
            console.error(error);
        }
    }

    const handleChange = event => {
        const {name, value} = event.target
        setCredentials({...userCredentials, [name]: value});
    }

    return (
        <div className="sign-in">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    name='email'
                    type='email'
                    value={email}
                    handleChange={handleChange}
                    label='Email'
                    required
                    />
                <FormInput 
                    name='password'
                    type='password'
                    value={password}
                    handleChange={handleChange}
                    label='Password'
                    required
                    />
                <div className="buttons">
                    <CustumButton type='submit'>Sign in</CustumButton>
                    <CustumButton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign in with Google
                    </CustumButton>
                </div>
            </form>
        </div>
    );

}

export default SignIn;