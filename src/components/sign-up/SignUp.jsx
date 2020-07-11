import React from 'react';

import FormInput from '../form-input/FormInput';
import CustumButton from '../custum-button/CustumButton';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'; 

import  './sign-up.scss';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password,  confirmPassword} = this.state;

        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            // Create new user
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            // Store this user in DB
            await createUserProfileDocument(user, {displayName});
            // Clear form
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.error(error);
        }
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({[name]: value});
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <h2>Don't have an account yet?</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                <FormInput 
                        name='displayName'
                        type='text'
                        value={displayName}
                        handleChange={this.handleChange}
                        label='Name'
                        required
                        />
                    <FormInput 
                        name='email'
                        type='email'
                        value={email}
                        handleChange={this.handleChange}
                        label='Email'
                        required
                        />
                    <FormInput 
                        name='password'
                        type='password'
                        value={password}
                        handleChange={this.handleChange}
                        label='Password'
                        required
                        />
                    <FormInput 
                        name='confirmPassword'
                        type='password'
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        label='Confirm Password'
                        required
                        />
                    <div className="buttons">
                        <CustumButton type='submit'>Sign up</CustumButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUp;