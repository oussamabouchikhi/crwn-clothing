import React from 'react';
import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';
import './register.scss'

const Register = () => (
    <div className="register">
        <SignIn />
        <SignUp />
    </div>
)

export default Register;