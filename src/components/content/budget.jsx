import React, { Component } from "react";

class Budget extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div id="budgetContent" className="noshow">
                <div id="financial">
                    <div className="form-group">
                        <h8>Short-Term Financial Goal</h8>
                        <br />
                        {/* <i class="fas fa-sort-up"> </i> */}
                        {/* <i class="fas fa-sort-down"> </i> */}
                        {/* <i class="fa fa-minus"> &nbsp; </i> */}
                        <span className="md-font">
                            (<span id="dailyWorkHrs"> X</span>-hr work days){" "}
                        </span>
                        <p>Current balance: $XXX</p>
                        <p>Target savings: $YYYYY</p>
                        <p>$XXYY</p>
                        {/* <i class="fa fa-plus"> &nbsp;</i> */}
                        <p />
                        {/*                     <label for="target_savings">Target Savings ($)</h8>
                    <input type="text" id="target" class="form-control  " placeholder="xxxx" value="2000"/>   

                    <label for="amount_saved">Amount Saved ($)</label>
                    <input type="text" id="saved" class="form-control " placeholder="xxx"/>
                
                     <label for="wage">Hourly Wage (USD)</label>

                        <input type="text" id="hourlyWage" class="form-control  " placeholder="xx" value="15"/>
              
                    <button type="submit" id="calculateWorkDays" value="Calculate">Calculate</button>    */}
                    </div>
                    <i className="fa fa-edit" aria-hidden="true" />
                    <p id="result" />
                </div>
            </div>
        );
    }
}

export default Budget;
