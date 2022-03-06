import React from 'react'

import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import NotFound from './views/NotFound'
import Money from './views/Money'
import Statistics from './views/Statistics'
import Tags from './views/Tags'
import styled from 'styled-components'
import { Tag } from './views/Tag'

const AppWrapper = styled.div`
  color: #333;
`

function App() {
  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Route exact path="/tags">
            <Tags />
          </Route>
          <Route exact path="/tags/:id">
            <Tag />
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
    </AppWrapper>
  )
}

export default App
