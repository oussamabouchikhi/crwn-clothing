import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import Header from './components/header/Header';
import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/Shop';
import Register from './pages/account-registration/Register';
import {auth} from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;
  
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      // console.log(user);
    });
  }

  componentWillUnmount() {
    // Close subscription
    this.unsubscribeFromAuth();
  }

  render () {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route path='/register' component={Register}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
