import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import IncompletePage from "./pages/incomplete-tasks/incomplete.component";


import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <IncompletePage />
      </div>
    );
  }
}

export default App;
