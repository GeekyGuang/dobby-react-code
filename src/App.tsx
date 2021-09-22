import Layout from 'components/Layout';
import React from 'react';

import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

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

function NotFound(){
  return <h2>你访问的页面不存在</h2>
}

function Statistics() {
  return (
    <Layout>
      <h2>统计页</h2>
    </Layout>
    )

}

function Tags() {
  return (
      <Layout>
        <h2>标签页</h2>
      </Layout>
  )
}

function Money() {
  return (
      <Layout>
        <h2>记账页</h2>
      </Layout>
  )
}

export default App;