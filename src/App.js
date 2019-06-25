import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';

import Layout from './app/layouts/Layout';
import MainPage from './app/pages/Main';
import Users from './app/pages/Users';
import PageNotFound from './app/pages/PageNotFound';
import User from './app/pages/User';

ReactDOM.render(<Router history={browserHistory}>
  <Route path="/" component={Layout}>
    <IndexRoute component={MainPage}/>
      <Route path="users" component={Users}>
        <Route path=":userId" component={User}/>
      </Route>
      <Route path="posts" component={Users}>
          <Route path=":postId" component={User}/>
      </Route>
      <Route path="comments" component={Users}>
          <Route path=":commentId" component={User}/>
      </Route>
    <Route path="*" component={PageNotFound}/>
  </Route>
</Router>, document.querySelector('#root'));


// /users/1
