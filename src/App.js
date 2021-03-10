import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCard from './TinderCards'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route  path="/chat">
            <h2>chat画面です</h2>
          </Route>
          <Route  path="/">
            <TinderCard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

