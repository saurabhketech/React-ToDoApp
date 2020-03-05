import React from 'react';
import './App.css';
import Home from './Home/Home';
import { connect } from "react-redux";
import Dashboard from "./Dashboard/Dashboard";
// import { loginRequest } from "../../Redux/Actions/login"

function App(props) {
  let loginStatus = props.loginStatus.isLogin;
  if (localStorage.getItem('token')) {
    loginStatus = true
    props.history.push('/dashboard')
  }
  return (
    <div className="App">
      <Home />
    </div>
  );
}
const mapStateToProps = state => {
  return {
    // registerStatus: state.register,
    loginStatus: state.login
  };
};

const mapDispatchToProps = dispatch => ({
  // loginRequest: LoginData => dispatch(loginRequest(LoginData))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
