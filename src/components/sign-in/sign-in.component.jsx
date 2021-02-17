import React from 'react';
import './sign-in.style.scss'

import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import { signInWithGoogle } from '../firebase/firebase.utils.js'

class SignIn extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: ''});
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value})
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>sign in with email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name='email' label='Email' handleChange={this.handleChange} value={this.state.email} />
                    <FormInput type="password"  name='password' label='Password' handleChange={this.handleChange} required value={this.state.password} />

                    <div className='button'>
                        <CustomButton type="submit"> SIGN IN </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> SIGN IN WITH GOOGLE </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;