import React from 'react';
import Header from './components/header-compnonents/header-components'
import HomePage from './pages/homepage/hompage.component';
import Shop from './pages/shoppage/shoppage.components'
import SignInAndSignUpPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out'
import { Switch, Route } from 'react-router-dom'
import { auth } from './components/firebase/firebase.utils';

import './App.css';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user})

      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  
  render() {
    return (
      <div> 
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/auth' component={ SignInAndSignUpPage } />
          <Route exact path='/' component={ HomePage } />
          <Route exact path='/shop' component={ Shop } />   
        </Switch>
      </div>
    ) 
  }
}

export default App;
 