import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Posts, SinglePost, Login, Signup } from 'pages';
import isAuthenticated from 'utils/isAuthenticated';

const Routes  = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={props => <Login {...props} />} />
        <Route path="/login" exact render={props => <Login {...props} />} />
        <Route path="/signup" exact render={props => <Signup {...props} />} />
        <Route path="/posts" exact render={props => <Posts {...props} isAuthenticated={isAuthenticated()} />} />
        <Route
          path="/singlepost"
          exact
          render={props => <SinglePost {...props} isAuthenticated={isAuthenticated()} />}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
