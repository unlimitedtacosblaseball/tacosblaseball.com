import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Index from './components/index';
import Snackrifice from './components/snackrifice';
import Resources from './components/resources';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Index } />
        <Route path="/snackrifice" component={ Snackrifice } />
        <Route path="/resources" component={ Resources } />
      </Switch>
    </div>
  );
}

export default App;
