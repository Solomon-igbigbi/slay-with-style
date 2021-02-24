import React from 'react';
import Header from './components/header-compnonents/header-components'
import HomePage from './pages/homepage/hompage.component';
import Shop from './pages/shoppage/shoppage.components'
import SignInAndSignUpPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out'
import CheckoutPage from './pages/checkout/checkout.page'


import { Switch, Route, Redirect } from 'react-router-dom'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from  './redux/user/user.selectors'


import { connect } from 'react-redux'

import './App.css';
import { setCurrentUser } from './redux/user/user.actions';


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
        })
      }
      setCurrentUser(userAuth);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  
  render() {
    return (
      <div> 
        <Header />
        <Switch>
          <Route exact path='/auth' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
          <Route exact path='/' component={ HomePage } />
          <Route path='/shop' component={ Shop } />   
          <Route exact path='/checkout' component={ CheckoutPage } />
        </Switch>
      </div>
    ) 
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
 