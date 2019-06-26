import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Users from 'src/pages/users';

import logo from '../logo.svg';
import Notification from '../containers/notification';
import Navigate from './navigate';
import s from '../app.module.scss';

function App() {
  return (
    <div className={s.app}>
      <header className={s.appHeader}>
        <img src={logo} className={s.appLogo} alt="logo" />
        <Navigate />
      </header>
      <Switch>
        <Route path="/" exact component={Users} />
        <Redirect to="/" />
      </Switch>
      <Notification />
    </div>
  );
}

export default App;
