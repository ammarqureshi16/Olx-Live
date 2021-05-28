import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from '../Screens/Login/index'
import SignUp from '../Screens/SignUp/SignUp'
import Olx from '../Screens/Olx'

export default function Reactrouter() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

          <Route exact path="/">
            <Login />
          </Route>

          {/* <Route exact path="/SignUp">
            <SignUp />
          </Route>

          <Route exact path="/Olx">
            <Olx/>
          </Route> */}
          
          
        </Switch>
      </div>
    </Router>
  );
}