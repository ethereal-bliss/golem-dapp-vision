import React, { Component } from "react";
import "../../css/stylesheets.jsx";
// import {dropdownStyle} from '../../css/btn-dropdown-styles.jsx';
import "../../css/btn-dropdown-styles.css";
import Challenge from "./challenge.jsx";
import Suicidal from "./suicidal.jsx";

var $ = require("jquery");

class Status extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            status: "status", 
            hoveredItem: "" 
        };
    }

    handleClickStruggling = () => {
        this.setState({ status: "struggling" });
    };
    handleClickAlright = () => {
        this.setState({ status: "alright" });
    };

    handleHelpClick = () => {
        $("#challenge2").click();
    };

    handleSuicidalClick = () => {
        this.changeModeTo("suicidal");
        setTimeout(() => {
            $("#suicidal").click();
        }, 100);
    };

    changeModeTo = (mode) => {
        this.props.changeModeTo(mode);
    };


    changeBackgroundOnMouseOver = (event) => {
        event.target.style.background = "cyan";
    };
    changeBackgroundOnMouseOut = (event) => {
        event.target.style.background = "#f1f1f1";
    };

    render() {
        return (
            <div
                id="statusContent"
                className={this.state.status.length > 0 ? "noshow" : "show"}
            >
                <h9 />
                <p />
                <h6 className="title pinkBorder">I am...</h6>
                <br />
                <p />

                <div>
                    <div className="dropdown">
                        <button
                            id="state_suicidal"
                            className="btn_default btn_unclicked dropBtn"
                            onClick={() => this.handleClickStruggling()}
                        >
                            Struggling
                        </button>{" "}
                        &nbsp;
                        <div className="dropdown-content">
                            <div
                                id="help"
                                onMouseOver={this.changeBackgroundOnMouseOver}
                                onMouseOut={this.changeBackgroundOnMouseOut}
                                onClick={this.handleHelpClick}
                            >
                                <a href="#">Help</a>
                            </div>
                            <div
                                id="suicidal_state"
                                onMouseOver={this.changeBackgroundOnMouseOver}
                                onMouseOut={this.changeBackgroundOnMouseOut}
                                onClick={this.handleSuicidalClick}
                            >
                                <a href="#">Suicidal</a>
                            </div>
                        </div>
                    </div>
                    <button
                        id="state_fine"
                        className="btn_default btn_unclicked"
                        onClick={() => this.handleClickAlright()}
                    >
                        Alright
                    </button>
                    <p />

                    <div></div>
                </div>
            </div>
        );
    }
}

export default Status;
