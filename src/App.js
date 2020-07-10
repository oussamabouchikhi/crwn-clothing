import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import Header from './components/header/Header';
import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/Shop';
import Register from './pages/account-registration/Register';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/shop' component={ShopPage}></Route>
        <Route path='/register' component={Register}></Route>
      </Switch>
    </div>
  );
}

export default App;
