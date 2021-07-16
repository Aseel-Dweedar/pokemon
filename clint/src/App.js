import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Main from "./components/Main";
import Fav from "./components/Fav";

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/">Main</Link>
        <br />
        <Link to="/fav">Favorite</Link>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/fav">
            <Fav />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
