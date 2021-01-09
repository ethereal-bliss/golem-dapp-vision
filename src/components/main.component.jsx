import React, { Component } from "react";
import Stylesheets from "../css/stylesheets.jsx";
import Navbar from "./navbar.component.jsx";
import Journal from "./content/journal.jsx";
import Status from "./content/status.jsx";
import Budget from "./content/budget.jsx";
import Calendar from "./content/calendar.jsx";
import Goals from "./content/goals.jsx";
import Capsule from "./content/capsule.jsx";
import Community from "./content/community.jsx";
import Bucketlist from "./content/bucket-list.jsx";
import Checklist from "./content/checklist.jsx";
import Challenge from "./content/challenge.jsx";
import Suicidal from "./content/suicidal.jsx";
import Disclaimer from "./content/disclaimer.jsx";
import DeadSwitch from "./content/dead-switch.jsx";
import Memorial from "./content/memorial.jsx";
import WishList from "./content/wish-list.jsx";

import {
  activeTab,
  init,
  displayContent,
  removeCalendar,
} from "../visionboard.js";

import $ from "jquery";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
     navItemIdSelected: "",
     mode: "default"
   };
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.text = "var exports = {};";
    document.body.appendChild(script);
    this.init2();
    console.log('mode: ' + this.state.mode);
  }

  updateMode = (mode) => {
      this.setState({ mode: mode }, () => {
          console.log(`mode changed: ${this.state.mode}`);
      });
  };  


  init2() {
    console.log("initialized");
    init();
  }

  render() {
    var styles = {
      wrapper: { 
        textAlign: "center" 
      },

      innerContent: {
        position: "absolute",
        width: "200px",
        height: "60px",
        left: "50%",
        marginLeft: "-20px",
        top: "50%",
        marginTop: "-10px",
        textAlign: "center",
      },
    };
    return (
      <div>
        <title />
        <Stylesheets />

        <div id="top" className="center">
          <span id="quote" />
        </div>

        <div id="content" style={styles.innerContent} className="blue_border">
          <Goals />
          <WishList /> 
          <Bucketlist />
          <Checklist />
          {/* CALENDAR */
          /* Make every day count */}
          <div id="calendarContent">{/* <div id="#fc_calendar"></div> */}</div>
          {/* PERSONAL FINANCE */}
          <Budget />
          {/* JOURNAL */
          /* Track progress */}
          <Journal />
          {/* HELP */
          /* current state */}
          <Status changeModeTo={this.updateMode} />

          {/* MOTIVATION */
          /* reasons to keep going */}
          <div id="motivationContent" className="noshow">
    
            <div className="btn_previous">
              <i className="fa fa-chevron-circle-left">
                <span />
              </i>
            </div>
            <h6 className="title pinkBorder">Need Inspiration</h6>
            <p />
            <ul id="inspirationList">
              <li>
                {/* <img class="icon" src="imgs/lightbulb-icon.png"/> */}
                <a>Ideation</a>
              </li>
              <li>
                {/* <img class="icon" src="imgs/video-icon.png"/>    */}
                <a>Inspiration</a>
              </li>
              <li>
                <a>Innovation</a>
              </li>
              <li>
                <a>People</a>
              </li>
              <li>
                <a>Podcasts</a>
              </li>
            </ul>
            <p />
            <h6 className="title pinkBorder">Bucket List</h6>
            <p />
            <ul id="inspirationList">
              <li>
                <a>F.I.</a>
              </li>
              <li>
                <a>Clear debt</a>
              </li>
              <li>
                <a>R.I.P.</a>
              </li>
            </ul>
            <p />
            <ul>
              <li />
              <li />
              <li />
              <li> </li>
            </ul>
          </div>
          <Capsule />
          <Community />
          <Challenge />
          <Suicidal />
          <DeadSwitch />
          <Memorial />
          
        </div>
        <Navbar mode={this.state.mode}/>
        {this.init2()}
      </div>
    );
  }
}

export default Main;
