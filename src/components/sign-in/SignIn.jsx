import React from 'react';
import FormInput from '../form-input/FormInput';
import  './sign-in.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''});
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({[name]: value});
    }

    render() {
        return (
            <div className="sign-in">
                <h2>Already have an account?</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='Email'
                        required
                        />
                    <FormInput 
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='Password'
                        required
                        />
                    <input type="submit" value="Sign in"/>
                </form>
            </div>
        );
    }
}

export default SignIn;