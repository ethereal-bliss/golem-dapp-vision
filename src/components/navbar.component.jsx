import React, { Component } from "react";
// import { activeTab, displayContent, removeCalendar, clearContent, hideContent, getCalendar } from "../visionboard.js";
import * as main from "../visionboard.js";
import $ from "jquery";
import { bounce, fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";

class Navbar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			navItemIdSelected: "",
			mode: "default",
		};
	}

	componentDidMount() {}

	// nav list click event listener
	clickEventListener = (e) => {
		let previousNavItem;
		let navItemId = e.target.id;
		let contentID = "#" + navItemId + "Content";
		let content = $("#" + navItemId + "Content");

		this.setState({ navItemIdSelected: contentID });

		// this.css('color', 'cyan');

		if (previousNavItem) {
			let prevContent = $("#" + previousNavItem.attr("id") + "Content");
			prevContent.removeClass("show");
			prevContent.addClass("noshow");

			previousNavItem.css("color", "#fff");
		}

		previousNavItem = this;

		console.log(`contentID: ${contentID}`);

		main.displayContent(content);

		console.log(`${navItemId} clicked`);
	};

	displayNavContentComponent = (e) => {
		main.displayContent($("#" + e.target.id + "Content"));
	};

	handleClick = (e) => {
		$("#content")
			.find('[id$="Content"]')
			.each(function () {
				main.hideContent($(this));
			});

		$(this).css("color", "cyan !important");
		$(this).addClass("cyan-text");
		this.displayNavContentComponent(e);
	};

	updateMode = (mode) => {
		this.setState({ mode: mode }, () => {
			console.log(`mode now: ${this.state.mode}`);
		});
	};

	render() {
		const styles = {
			fadeIn: {
				animation: "x 3s",
				animationName: Radium.keyframes(fadeIn, "fadeIn"),
			},
		};

		// const Bounce = styled.div`animation: 2s ${keyframes}${bounce}} infinite`;
		// 		}
		return (
			<StyleRoot>
				<nav>
					{/* BADGES */}
					{/* NAV */}
					<ul onClick={() => this.clickEventListener}>
						{/* <ul class="memo">Memo</ul> */}
						<li id="goals" onClick={this.handleClick}>
							Vision Board
						</li>
						{/* <li id="wishlist" onClick={this.handleClick}>Wish List</li> */}
						<li id="bucketlist" onClick={this.handleClick}>
							Bucket List
						</li>
						<li id="checklist" onClick={this.handleClick}>
							Checklist
						</li>
						<li id="calendar" onClick={this.handleClick}>
							Days Ahead
						</li>{" "}
						{/* calendar */}
						{/* <ul class="getaway">Getaway</ul> */}
						<li id="budget" onClick={this.handleClick}>
							Budget
						</li>
						<li id="journal" onClick={this.handleClick}>
							Diary
						</li>
						<li id="status" onClick={this.handleClick}>
							Status Check
						</li>
						<li id="capsule" onClick={this.handleClick}>
							Time Capsule
						</li>
						<li id="community" onClick={this.handleClick}>
							Community
						</li>
						<li id="challenge" onClick={this.handleClick}>
							Challenge
						</li>
						<li id="suicidal" onClick={this.handleClick}>
							Suicidal
						</li>
						<li id="compatability">Get Matched</li>
						<li id="dead-switch" onClick={this.handleClick}>
							Dead Man Switch
						</li>
						<li id="memorial" onClick={this.handleClick}>
							Digital Memorial
						</li>
						<li id="notification">
							<i className="fa fa-bell" aria-hidden="true" />
						</li>
					</ul>
				</nav>
			</StyleRoot>
		);
	}
}

export default Navbar;
