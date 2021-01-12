import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '@pages/Home';
import Profile from '@pages/Profile';
import Todo from '@pages/Todo';
import GithubStar from '@pages/GithubStar';

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
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
