import React from 'react';
import LoginForm from '../../components/login-form';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import './index.scss';

function LoginPage() {
    return (
        <div className="page">
            <div className="title-div">
                <Logo className="logo" />
                <h1 className="title helvetica">Need for drive</h1>
            </div>
            <LoginForm />
        </div>
    )
}

export default LoginPage;