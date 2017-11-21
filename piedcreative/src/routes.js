import React from 'react';
import { Router, IndexRoute, Route } from 'react-router';
// import asyncComponent from "./components/AsyncComponent";

import App from './App';
// import Nav from './partials/Nav'
// import Footer from './partials/Footer'
import Submit from './pages/Submit';
import Past from './pages/Past';
import Current from './pages/Current';
import Home from './pages/Home';

// const Home = asyncComponent(() => import("./pagess/Home"));
// const Currend = asyncComponent(() => import("./pagess/Currend"));
// const Past = asyncComponent(() => import("./pagess/Past"));
// const Submit = asyncComponent(() => import("./pagess/Submit"));
// const App = asyncComponent(() => import("./pagess/App"));

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
