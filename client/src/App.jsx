import React, {useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user-selectors';

import './App.css';

import Header from './components/header/Header';

import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/Shop';
import Register from './pages/account-registration/Register';
import CheckoutPage from './pages/checkout/Checkout';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user-actions';

const App = ({ currentUser, setCurrentUser }) => {

  // let unsubscribeFromAuth = null;
  
  useEffect(() => {

    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        });
      }
      setCurrentUser(userAuth);
    });

    return () => {
      // Close subscription from auth observable
      unsubscribeFromAuth();
    }
  }, []);
  
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route 
          exact path='/register' 
          render={() => currentUser ? (<Redirect to='/' />) : (<Register />)}
        />
      </Switch>
    </div>
  );

}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
