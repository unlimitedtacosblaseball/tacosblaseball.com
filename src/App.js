import React from "react";
import { Route, Switch } from "react-router-dom";
import Bottom from "./components/bottom";
import Page from "./components/Page";
import Top from "./components/top";

function App() {
  return (
    <div className="App">
      <div id="main">
        <Top />
        <div id="index">
          <Switch>
            <Route exact path="/">
              <Page slug={"index"} title="Homepage" />
            </Route>
            <Route path="/:slug">
              {({ match: { params } }) => <Page slug={params.slug} />}
            </Route>
            <Route path="/">
              <Page slug={"lost"} title="404" />
            </Route>
          </Switch>
        </div>
        <Bottom />
      </div>
    </div>
  );
}

export default App;
