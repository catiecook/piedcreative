import React from 'react';
import { Route, Router, IndexRoute } from 'react-router';
import asyncComponent from "./AsyncComponent";
// import AppliedRoute from "./Misc/AppliedRoutes";
// import AuthenticatedRoute from "./components/AuthenticatedRoute";
// import UnauthenticatedRoute from "./components/UnauthenticatedRoute"

import App from './App';

const Home = asyncComponent(() => import("./Home/Home"));
const Current = asyncComponent(() => import("./Current/Current"));
const Past = asyncComponent(() => import("./Past/Past"));
const Submit = asyncComponent(() => import("./Submit/Submit"));
// const NotFound = asyncComponent(() => import("./Misc/NotFound"));

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/current" component={Current} />
      <Route path="/submit" component={Submit} />
      <Route path="/past" component={Past} />
    </Route>
  </Router>
);

// export default ({ childProps }) =>
//   <Switch>
//     <AppliedRoute
//       path="/"
//       exact
//       component={Home}
//       props={childProps}
//     />
//     <AppliedRoute
//       path="/current"
//       exact
//       component={Current}
//       props={childProps}
//     />
//     <AppliedRoute
//       path="/submit"
//       exact
//       component={Submit}
//       props={childProps}
//     />
//     <AppliedRoute
//       path="/past"
//       exact
//       component={Past}
//       props={childProps}
//     />
//     <Route component={NotFound} />
//   </Switch>

export default Routes;
