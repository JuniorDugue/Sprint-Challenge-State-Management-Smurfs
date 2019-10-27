import React, { Component } from "react";
import "./App.scss";
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {/* <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div> */}
        <h2 className="title">Junior's Smurf Village</h2>
        <SmurfList/>
        <SmurfForm/>
      </div>
    );
  }
}

export default App;