import React from 'react';
import './App.css';

import SignupComponent from "./components/Signup/SignupComponent"
import Home from "./components/Home/dashboard/Home"
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
const browserHistory = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
      <BrowserRouter history={browserHistory}>
        <Route path="/" component={SignupComponent} >
          <Redirect to="/SignupComponent" />
          <Route path="/SignupComponent" component={SignupComponent} />
          <Route path="/home" component={Home} />
        </Route>
      </BrowserRouter>
    );
  }
}

export default App;
