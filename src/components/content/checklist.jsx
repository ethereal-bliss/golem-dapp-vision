import React, { Component } from "react";
import $ from "jquery";
// import 'jquery-ui/ui/effects/effect-fade';
import "jquery-ui";
import "../../css/checklist-styles.css";

class Checklist extends Component {
	constructor(props) {
		super(props);

		// Default state
		this.state = { filler: "" };
	}

	componentDidMount() {
		$("li").each(function (index, item) {
			console.log(item);
			if ($(item).hasClass("completed")) {
				$(".fa-smile-o").addClass("tasksCompleted");
			}
		});
	}

	handleXClick = (e) => {
		$(this).on("click", "span", function (e) {
			$(this)
				.parent()
				.fadeOut(500, function () {
					$(this).remove();
				});
			e.stopPropagation();
		});
	};

	addNewItem = (e) => {
		if (e.key === "Enter") {
			var todoText = $("#checklistContent input").val();
			$("ul").append(
				"<li>" +
					'<span> <i class="fa fa-trash"></i> </span> ' +
					todoText +
					'<i class="fa fa-check-square check"></i> </li>'
			);
			$(this).val("");
		}
	};

	checkOffItem = (e) => {
		var index = $(".check").index(this) + 1;
		$("li:nth-of-type(" + index + ")").toggleClass("completed");
		$(this).toggleClass("green");
	};

	editItem = (e) => {
		$(this).on("click", function () {
			$("input[type='text']").fadeToggle();
		});
	};

	getDate = (dayWithDate) => {
		var i = dayWithDate.indexOf(" ");
		return dayWithDate.slice(i);
	};

	render() {
		const whiteFont = { color: "#fff" };
		const pos = {position: 'absolute', display: 'block', top: '3em', width: '15em', height: '10em'};
		const pos3 = {position: 'relative', right: 0};
		const pos2 = {float: 'right', marginRight:'7em'};
		const dateStyle = {display: 'block', paddingBottom: '2em'}

		const wrapperStyle = {width: '55em'}
		const center = {position: 'relative',width: '50em', margin: '0 auto'}
		return (
			<div id="checklistContent" className="noshow">
				<h4 style={{...whiteFont, ...dateStyle}}>
					{this.getDate(new Date().toDateString())}
				</h4>
				<div id="wrapper" style={center}>
				<div id="checklist" style={{float:'left'}}>
					<h1>
						Checklist
						<i className="fa fa-pencil" onClick={this.editItem}></i>
					</h1>
					<input
						type="text"
						onKeyPress={this.addNewItem}
						placeholder="Add New To-Do"
					/>

					<ul onClick={this.checkOffItem}>
						<li className="column" draggable="true">
							<span>
								<i className="fa fa-trash"></i>
							</span>
							step out
							<i className="fa fa-check-square check"></i>
						</li>						

						<li className="column" draggable="true">
							<span>
								<i className="fa fa-trash"></i>
							</span>
							vitamins
							<i className="fa fa-check-square check"></i>
						</li>

						<li className="column" draggable="true">
							<span>
								<i className="fa fa-trash"></i>
							</span>
							untangle hair<i className="fa fa-check-square check"></i>
						</li>

						<li className="column" draggable="true">
							<span>
								<i className="fa fa-trash"></i>
							</span>
							shower<i className="fa fa-check-square check"></i>
						</li>
						
						<li className="column" draggable="true">
							<span>
								<i className="fa fa-trash"></i>
							</span>
							declutter
							<i className="fa fa-check-square check"></i>
						</li>						
						<li className="column" draggable="true">
							<span>
								<i className="fa fa-trash"></i>
							</span>
							pack essentials
							<i className="fa fa-check-square check"></i>
						</li>
		
							<li className="column" draggable="true">
							<span>
								<i className="fa fa-trash"></i>
							</span>
							job hunt
							<i className="fa fa-check-square check"></i>
						</li>
					</ul>					
				</div>

				<div style={Object.assign({}, whiteFont, pos2)}>
					<h3>Tasks Completed</h3>
					<p>						
						<p>cut nails</p>
						<p>wash face</p>
						<p>update resume</p>
					</p>
				</div>				

				</div>
			</div>
		);
	}
}

export default Checklist;
