import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/todo/dashboard';
import ProductCard from './components/compare/cards';
import Login from './components/login/login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path="/product" component={ProductCard} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
