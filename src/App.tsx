import React from 'react';

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import NotFound from './views/NotFound';
import Money from './views/Money';
import Statistics from './views/Statistics';
import Tags from './views/Tags';

function App() {
  return (
    <Router>
          <Switch>
            <Route path="/tags">
              <Tags />
            </Route>
            <Route path="/money">
              <Money />
            </Route>
            <Route path="/statistics">
              <Statistics />
            </Route>
            <Route exact path="/">
              <Redirect to="/money" />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
    </Router>
  );
}


export default App;