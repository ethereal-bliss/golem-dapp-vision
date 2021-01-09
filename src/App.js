import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/main.component.jsx";
import Disclaimer from "./components/content/disclaimer.jsx";
import Music from "./components/content/music.jsx";
import "./styles2.scss";

class App extends Component {
  constructor(props) {
    super(props);

    // Default state
    this.state = {
      disclaimerShown: false,
      stylePath: "./styles2.scss",
      stylePath2: "css/enter-style.css",
    };
  }
  componentDidMount() {}

  render() {
    return (
      <div className="container">
        <Music />
        <Main />
      </div>
    );
  }
}

export default App;
