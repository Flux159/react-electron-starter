import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import {Navigation} from 'app/src/controllers/layout/Navigation.jsx';
import {Homepage} from 'app/src/controllers/homepage/Homepage.jsx';
import {About} from 'app/src/controllers/about/About.jsx';

import 'whatwg-fetch';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Navigation}>
      <IndexRoute component={Homepage} />
      <Route path="about" component={About} />
    </Route>
  </Router>
  ,
  document.getElementById('app')
);
