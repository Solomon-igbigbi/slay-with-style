import React from 'react';
import HomePage from './pages/homepage/hompage.component';
import { Route } from 'react-router-dom'

import './App.css';

const hats = () => (
  <div> react routing </div>
)


function App() {
  return (
    <div> 
      <Route exact='true' path='/' component={ HomePage } />
      <Route exact='true' path='/shop/hats' component={ hats } />
    </div>
  ) 
}

export default App;
 