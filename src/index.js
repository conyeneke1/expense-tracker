import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>30 Days Of React</h1>
      </div>
    );
  }
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
