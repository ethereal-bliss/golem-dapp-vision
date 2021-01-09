import React, { Component } from "react";
import { getMessage } from "../memos/message.js";

class Goals extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div id="goalsContent" className="noshow">
        <h8 className="title">
          <span id="thisYear">2020</span> Vision Board
        </h8>
        <i className="fa fa-list-ul" aria-hidden="true" />
        <div className="container">
          <div className="row">
            <div
              id="newgoal"
              data-ph="cool"
              className="goal col-sm"
              contentEditable="true"
              placeholder=""
            >
              {/* <img class="tags-icon" src="imgs/tags-icon.png"/> */}
              {/* <i class="fa fa-tags" aria-hidden="true"></i> */}
              create vision board
            </div>
            <div className="goal col-sm">
              <i className="fa fa-tags" aria-hidden="true" />+ new goal
            </div>
            <div className="goal col-sm">
              <i className="fa fa-tags" aria-hidden="true" />+ new goal
            </div>
            <div className="goal col-sm">
              <i className="fa fa-tags" aria-hidden="true" />+ new goal
            </div>

          </div>
          <div className="row">
            <div className="goal col-sm">
              <i className="fa fa-tags" aria-hidden="true" />+ New Goal
            </div>
            <div className="goal col-sm">
              <i className="fa fa-tags" aria-hidden="true" />+ New Goal
            </div>
            <div className="goal col-sm">
              <i className="fa fa-tags" aria-hidden="true" />+ New Goal
            </div>
            <div className="goal col-sm">
              <i className="fa fa-tags" aria-hidden="true" />+ New Goal
            </div>

            <div className="row">
              <div className="goal col-sm">
                <i className="fa fa-tags" aria-hidden="true" />+ New Goal
              </div>
              <div className="goal col-sm">
                <i className="fa fa-tags" aria-hidden="true" />+ small goal
              </div>
              <div className="goal col-sm">
                <i className="fa fa-tags" aria-hidden="true" />+ small goal
              </div>
              <div className="goal col-sm">
                <i className="fa fa-tags" aria-hidden="true" />+ New Goal
              </div>

              <div className="row">
                <div className="goal col-sm">
                  <i className="fa fa-tags" aria-hidden="true" />+ New Goal
                </div>
                <div className="goal col-sm">
                  <i className="fa fa-tags" aria-hidden="true" />+ small goal
                </div>
                <div className="goal col-sm">
                  <i className="fa fa-tags" aria-hidden="true" />+ small goal
                </div>
                <div className="goal col-sm">
                  <i className="fa fa-tags" aria-hidden="true" />+ New Goal
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="goal col-sm">
              <i className="fa fa-tags" aria-hidden="true" />+ New Goal
            </div>
            <div className="goal col-sm">
              <i className="fa fa-tags" aria-hidden="true" />+ small goal
            </div>
            <div className="goal col-sm">
              <i className="fa fa-tags" aria-hidden="true" />+ small goal
            </div>
            <div className="goal col-sm">
              <i className="fa fa-tags" aria-hidden="true" />+ New Goal
            </div>

            <div className="row">
              <div className="goal col-sm">
                <i className="fa fa-tags" aria-hidden="true" />+ New Goal
              </div>
              <div className="goal col-sm">
                <i className="fa fa-tags" aria-hidden="true" />+ small goal
              </div>
              <div className="goal col-sm">
                <i className="fa fa-tags" aria-hidden="true" />+ small goal
              </div>
              <div className="goal col-sm">
                <i className="fa fa-tags" aria-hidden="true" />+ New Goal
              </div>{" "}
            </div>
          </div>

          <div className="row">
            <div className="goal col-sm">
              <i className="fa fa-tags" aria-hidden="true" />+ New Goal
            </div>
            <div className="goal col-sm">
              <i className="fa fa-tags" aria-hidden="true" />+ New Goal
            </div>
            <div className="goal col-sm">
              <i className="fa fa-tags" aria-hidden="true" />+ New Goal
            </div>
            <div className="goal col-sm">
              <i className="fa fa-tags" aria-hidden="true" />+ New Goal
            </div>{" "}
          </div>
          <div className="row">
            <div className="goal col">+ BIG GOAL</div>
            <div className="goal col">+ F R E E D O M</div>
          </div>
        </div>

        {/* 

      <h8 class="title">Lifelong Goals</h8><br>
      <ul>
      <li>Work &middot; Save &middot; Invest</li>
      <li>F.I.</li>
      <li>Trust fund</li>
      <li>R.I.P</li>
      </ul> */}
        <div className="caption">
          <p>
            {getMessage()["goals"]}            
          </p>
        </div>
      </div>
    );
  }
}

export default Goals;
