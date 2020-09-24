import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Index from './pages/index/index';
import Snackrifice from './pages/snackrifice/snackrifice';
import seasonATE from './pages/seasonate/seasonate';
import Resources from './pages/resources/resources';
// Add your pages here.
import Template from './pages/template/template'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Index } />
        <Route path="/snackrifice" component={ Snackrifice } />
        <Route path="/seasonate" component={ seasonATE } />
        <Route path="/resources" component={ Resources } />
        <Route path="/template" component={ Template } />
      </Switch>
    </div>
  );
}

export default App;
