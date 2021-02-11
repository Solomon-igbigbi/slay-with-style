import React from 'react';
import Header from './components/header-compnonents/header-components'
import HomePage from './pages/homepage/hompage.component';
import Shop from './pages/shoppage/shoppage.components'
import { Switch, Route } from 'react-router-dom'

import './App.css';


function App() {
  return (
    <div> 
      <Header />
      <Switch>
        <Route exact='true' path='/' component={ HomePage } />
        <Route exact='true' path='/shop' component={ Shop } />   
      </Switch>
    </div>
  ) 
}

export default App;
 