import React from 'react';
import HomePage from './pages/homepage/hompage.component';
import Shop from './pages/shoppage/shoppage.components'
import { Route } from 'react-router-dom'

import './App.css';


function App() {
  return (
    <div> 
      <Route exact='true' path='/' component={ HomePage } />
      <Route exact='true' path='/shop' component={ Shop } />
    </div>
  ) 
}

export default App;
 