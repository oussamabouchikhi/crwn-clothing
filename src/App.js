import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import Homepage from './pages/homepage/Homepage';

const Hatspage = () => <h1>HATS Page</h1>;

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={Homepage}></Route>
        <Route path='/hats' component={Hatspage}></Route>
      </Switch>
    </div>
  );
}

export default App;
