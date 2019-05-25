import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import People from 'src/pages/people';
import Home from 'src/pages/home';
import Works from 'src/pages/works';
import Contacts from 'src/pages/contacts';
import Catalog from 'src/pages/catalog';

import logo from './logo.svg';
import Notification from './components/Notification';
import Navigate from './components/Navigate';
import s from './app.module.scss';

function App() {
  return (
    <div className={s.app}>
      <header className={s.appHeader}>
        <img src={logo} className={s.appLogo} alt="logo" />
        <p>Пример работы с редюсерами</p>
        <Navigate />
      </header>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/works" component={Works} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/catalog" component={Catalog} />
        <Redirect to="/" />
      </Switch>
      <People />
      <Notification />
    </div>
  );
}

export default App;
