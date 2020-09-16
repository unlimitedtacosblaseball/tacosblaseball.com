import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import './source.css';
import './styles.css';
import Index from './components/index';
import Snackrifice from './components/snackrifice';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Index } />
        <Route path="/snackrifice" component={ Snackrifice } />
      </Switch>
    </div>
  );
}

export default App;
