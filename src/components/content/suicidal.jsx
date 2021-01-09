import React, { Component } from "react";
import $ from "jquery";
import "jquery-ui";
import Radium, { StyleRoot } from "radium";
import styles from "../../css/animations.js";
import { getMessage } from "../memos/message.js";

class Suicidal extends Component {
  constructor(props) {
    super(props);

    // Default state
    this.state = {
      modeChanged: false,
    };
  }

  handleLinkClick = (navId) => {
    $(navId).click();
  };

  render() {
    const redirStyle = {
      color: "pink",
      fontWeight: "bold",
      cursor: "pointer",
    };

    return (
      <StyleRoot>
        <div id="suicidalContent" className="noshow unselectable">
          <div id="0" className="community_post">
            <h3>
              <span className="timeStamp" style={styles.fadeIn}>
                Farewell
              </span>
            </h3>
            <p className="newEntry" style={styles.fadeIn}>
              {getMessage()["suicidal"]}
            </p>
          </div>
        </div>
      </StyleRoot>
    );
  }
}

export default Suicidal;
