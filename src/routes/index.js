import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Posts, SinglePost, Login, Signup } from 'pages';

const Routes  = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={props => <Login {...props} />} />
        <Route path="/login" exact render={props => <Login {...props} />} />
        <Route path="/signup" exact render={props => <Signup {...props} />} />
        <Route path="/posts" exact render={props => <Posts {...props} />} />
        <Route
          path="/singlepost"
          exact
          render={props => <SinglePost {...props} />}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
