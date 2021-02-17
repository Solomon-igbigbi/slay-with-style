import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../firebase/firebase.utils.js'

import './header-component.style.scss';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link to="/">
            <Logo className='logo-container' /> 
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            <Link>
                { 
                    currentUser ? <div className='option' onClick={() => auth.signOut()} >SIGN OUT</div> : <Link to='/auth' className='option'>SIGN IN</Link>
                }
            </Link>
        </div>
    </div>

)

export default Header;