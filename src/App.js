import React from 'react';
import {BrowserRouter,Route, Switch } from 'react-router-dom'
import ShopPage from './pages/shop/shop.component';
import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx';

const ChronographPage = () => (
  <div>
    <h1>CHRONOGRAPH PAGE</h1>
  </div>
);


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
    </Switch>
  </BrowserRouter>

  );
}

export default App;
