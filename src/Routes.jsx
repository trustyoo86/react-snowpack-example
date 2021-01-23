import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '@pages/Home';
import Profile from '@pages/Profile';
import Todo from '@pages/Todo';
import GithubStar from '@pages/GithubStar';
import SelectorPrefetch from '@pages/SelectorPrefetch';
import SelectorFamilyPrefetch from '@pages/SelectorFamilyPrefetch';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/todo">
          <Todo />
        </Route>
        <Route path="/githubStar">
          <GithubStar />
        </Route>
        <Route path="/prefetch-trigger" >
          <SelectorFamilyPrefetch />
        </Route>
        <Route path="/selector-prefetch">
          <SelectorPrefetch />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
