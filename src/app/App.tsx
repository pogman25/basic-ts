import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import People from 'src/pages/people';
import logo from './logo.svg';
import Notification from './Notification';
import s from './app.module.scss';

function App() {
  return (
    <div className={s.app}>
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>Пример работы с редюсерами</p>
      </header>
      <Switch>
        <Route path="/" exact component={People} />
        <Route path="/works" component={People} />
        <Route path="/contacts" component={People} />
        <Route path="/catalog" component={People} />
        <Redirect to="/" />
      </Switch>
      <Notification />
    </div>
  );
}

export default App;
