import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Index from './pages/index/index';
import Snackrifice from './pages/snackrifice/snackrifice';
import seasonATE from './pages/seasonate/seasonate';
import Resources from './pages/resources/resources';
import Friends from './pages/friends/friends';
import Lost from './pages/lost/lost';
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
        <Route path="/friends" component={ Friends } />
        <Route path="/template" component={ Template } />
        <Route path="/" component={ Lost } />
      </Switch>
    </div>
  );
}

export default App;
