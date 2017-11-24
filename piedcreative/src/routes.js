import React from 'react';
import { Router, IndexRoute, Route } from 'react-router';
import asyncComponent from "./pages/AsyncComponent";

import App from './App';
// import Nav from './partials/Nav'
// import Footer from './partials/Footer'
// import Submit from './pages/Submit';
// import Past from './pages/Past';
// import Current from './pages/Current';
// import Home from './pages/Home';

const Home = asyncComponent(() => import("./pages/Home"));
const Current = asyncComponent(() => import("./pages/Current"));
const Past = asyncComponent(() => import("./pages/Past"));
const Submit = asyncComponent(() => import("./pages/Submit"));
// const App = asyncComponent(() => import("./App"));

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




export default Routes;
