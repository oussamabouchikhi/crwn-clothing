import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import Homepage from './pages/homepage/Homepage';

const Hatspage = () => <h1>HATS Page</h1>;
const TopicsList = () => <h1>Topics List Page</h1>;
const TopicDetail = () => <h1>Topic Detail Page</h1>;

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={Homepage}></Route>
        <Route path='/topics' component={TopicsList}></Route>
        <Route path='/topics/:tpicId' component={TopicDetail}></Route>
      </Switch>
    </div>
  );
}

export default App;
