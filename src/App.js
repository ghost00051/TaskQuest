import logo from './logo.svg';
import Entr from './component/entrance/entrance'
import './App.css';
import './css/entrance.css'
import { BrowserRouter as Route, Link } from 'react-router-dom';
import Registration from './component/registration/registration'; // Путь к вашему компоненту регистрации
import React from 'react';

const App = () => {
  return (
    <div>
      <Entr />
      <Router>
        <Switch>
          <Route path="/" exact component={Entr} />
          <Route path="/registration" component={Registration} />
        </Switch>
      </Router>
    </div>

  );
};


export default App;
