import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Users from 'src/pages/users';
import useActions from 'src/utils/useActions';
import Navigate from './navigate';
import Notification from '../containers/notification';
import logo from '../logo.svg';
import s from '../app.module.scss';
import { showError, showSuccess } from '../duck/noty-duck';

function App() {
  const [sendError, sendSuccess] = useActions([() => showError(`тестовая нотификация ${new Date()}`), () => showSuccess('тестовая нотификация')])

  return (
    <div className={s.app}>
      <header className={s.appHeader}>
        <img src={logo} className={s.appLogo} alt="logo" />
        <Navigate />
      </header>
      <button onClick={sendError}>message</button>
      <button onClick={sendSuccess}>Success</button>
      <Switch>
        <Route path="/" exact component={Users} />
        <Redirect to="/" />
      </Switch>
      <Notification />
    </div>
  );
}

export default App;
