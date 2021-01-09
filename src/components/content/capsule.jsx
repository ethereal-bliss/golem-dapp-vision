import React, { Component } from "react";
import { getMessage } from "../memos/message.js";

class Capsule extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div id="capsuleContent" className="noshow">
          <div id="letter">
            <h6 className="title pinkBorder">An e-letter to my future self.</h6>
            <p />
            <div className="date" />
            <br />
            <textarea
              rows={8}
              cols={40}
              value={""}
              placeholder={""}
              defaultValue={""}
            />
            <p />
            <span id="verb">Receive</span> in &nbsp;
            <input type="number" defaultValue={1} min={1} max={10} />
            &nbsp; &nbsp;
            <span id="nMonths">month</span>
            <p />
            <select>
              <option value="email">Email</option>
              <option value="desktop">Desktop Notification</option>
            </select>
            <p />
            <label />
            <input
              className="btn-primary"
              type="submit"
              defaultValue="Lock Away"
            />
          </div>
          <div className="caption">
            <p>
              {getMessage()["capsule-1"]} <p></p>
              {getMessage()["capsule-2"]}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Capsule;
