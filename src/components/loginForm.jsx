import React, { Component } from 'react';
import Joi from "joi-browser";
import Form from './common/form';
class LoginForm extends Form {

    state= {
        data: {username: "", password: ""},
        errors: {}
    }

    schema = {
        username: Joi.string().required(),
        password: Joi.string().required()
    };

    doSubmit = () => {
        console.log('Submitted!');  
    };

    render() { 
        
        return (
        <div>
            <form onSubmit= {this.handleSubmit}>
                {this.renderInput('username', 'Username')}
                {this.renderInput('password', 'Password', 'password')}
                {this.renderButton('Login')}
            </form>
        </div>
        )
    }
}
 
export default LoginForm;