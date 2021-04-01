import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import store from './config/store';
import { Home } from './components/home';

function App() {
  return (

    <Provider store={store}>
        <BrowserRouter >
          <Switch>
          <Route exact path="/"  component={Home} />
        </Switch>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
