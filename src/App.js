import React from 'react';
import Header from './components/header-compnonents/header-components'
import HomePage from './pages/homepage/hompage.component';
import Shop from './pages/shoppage/shoppage.components'
import SignInAndSignUpPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out'
import { Switch, Route } from 'react-router-dom'

import './App.css';


function App() {
  return (
    <div> 
      <Header />
      <Switch>
        <Route exact path='/auth' component={ SignInAndSignUpPage } />
        <Route exact path='/' component={ HomePage } />
        <Route exact path='/shop' component={ Shop } />   
      </Switch>
    </div>
  ) 
}

export default App;
 