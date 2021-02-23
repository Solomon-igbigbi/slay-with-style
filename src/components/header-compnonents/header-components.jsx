import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils.js'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from  '../../redux/user/user.selectors'


import './header-component.style.scss';

const Header = ({ currentUser, hidden }) => (
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
            <CartIcon />
        </div>
        { hidden ? null : <CartDropDown /> }
    </div>

)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);