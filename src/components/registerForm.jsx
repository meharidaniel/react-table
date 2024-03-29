import React, { Component } from 'react';
import Joi from "joi-browser";
import Form from './common/form';

class RegisterForm extends Form {
    state= {
        data: {username: "", password: ""},
        errors: {}
    }

    schema = {
        username: Joi.string().required().email(),
        password: Joi.string().required().min(5),
        name: Joi.string().required()
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
                {this.renderInput('name', 'Name')}
                {this.renderButton('Register')}
            </form>
        </div>
         );
    }
}
 
export default RegisterForm;