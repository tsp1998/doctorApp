import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwtDecode from "jwt-decode";
//css
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";

//redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { SET_USER, SET_AUTHENTICATED } from "./redux/types";
import { login, logOut } from "./redux/actions/userActions";

//pages
import {
  AboutPage,
  ContactPage,
  ErrorPage,
  HomePage,
  SignInSignUpPage,
  DoctorPage,
  ProfilePage,
} from "./pages";

//components
import { Header } from "./components";

//utils
import Authenitication from "./utils/Authenitication";

import axios from "axios";

axios.defaults.baseURL = "https://newdoctorapp.herokuapp.com/api";

const token = localStorage.DoctorAppIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logOut());
    window.location.href = "/signin-signup";
  } else {
    const { uid, name } = decodedToken;
    store.dispatch({ type: SET_AUTHENTICATED });
    store.dispatch({ type: SET_USER, payload: { uid, name } });
    axios.defaults.headers.common["Authorization"] = token;
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/doctors" component={DoctorPage} />
          <Route path="/profile" component={ProfilePage} />
          <Authenitication path="/signin-signup" component={SignInSignUpPage} />
          <Route path="/contact" component={ContactPage} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
