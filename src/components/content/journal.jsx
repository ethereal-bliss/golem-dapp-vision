import React, { Component } from 'react';
import { activeTab } from "../../visionboard.js";
var $ = require( "jquery" );

class Journal extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

  componentDidMount() {
    $("body").on("contextmenu", function(e) {
        return false;
      });    
  }    

    activeTab = () => {
      alert("Checked stuff");   
      activeTab(); 
      setTimeout($('#journal_tab').click(), 5000);
    }  

    clickJournal = () => {
     alert('on journal tab');
    }  


    render() {
        return (
		<div>
          <div id="journalContent" className="noshow unselectable">
            <div className="btn_default btn_unclicked" id="journal_tab" onClick={activeTab}>Journal</div>
            <div className="btn_default btn_unclicked" id="dream_tab" onClick={activeTab}>Dreams</div>
            <div className="btn_sm round_border btn_unclicked" id="addEntry_btn"> <i className="fa fa-plus" /> </div>
            {/* Journal */}
            <div id="journal_log" className="newLine noshow">
              <div className="journal_entry">
                <span className="timeStamp">mm.dd.yy</span>
                <p className="newEntry" /> 
                <span className="tag round_border">stable</span>                
                <span className="tag round_border">productive</span>                
                <span className="tag round_border">smallsteps</span>
              </div>
              <p />
              <div className="journal_entry">
                <span className="timeStamp">mm.dd.yy</span>
                <p className="newEntry" /> 
                <span className="tag round_border">trapped</span>
                <span className="tag round_border">stifled</span>
                <span className="tag round_border">anxious</span>
                {/* <span class="tag round_border"></span> */}
              </div>
              <p />
              <div className="journal_entry">
                <span className="timeStamp">mm.dd.yy</span>
                <p className="newEntry" />
                <span className="tag round_border">nocturnal</span>
                <span className="tag round_border">undisturbed</span>
                <span className="tag round_border">numb</span>
              </div>
              <p />
              <div className="journal_entry">
                <span className="timeStamp">mm.dd.yy</span>
                <p className="newEntry" /> 
                <span className="tag round_border">hungry</span>                
                <span className="tag round_border">lethargic</span>
                <span className="tag round_border">lightheaded</span>
              </div>              
            </div>
            {/* Dreams */}
            <div id="dream_log" className="darkBackground newLine noshow">
              <div className="dream_entry">
                <span className="timeStamp">mm.dd.yy - 11am</span>
                <p>Dream entry 1</p>
                <span className="tag round_border">neardeath</span> 
                <span className="tag round_border">relief</span> 
                <br />
              </div>
              <div className="dream_entry">
                <span className="timeStamp">mm.dd.yy - 1pm</span>
                <p>Dream entry 3</p>
                <span className="tag round_border">suicide</span>
                <span className="tag round_border">attempt</span>
                <span className="tag round_border">failed</span>
                <br />
              </div>                    
              <div className="dream_entry">
                <span className="timeStamp">mm.dd.yy - 7pm</span>
                <p>Dream entry 2</p>
                <span className="tag round_border">trapped</span><br />
                <span className="tag round_border">despair</span>
                <span className="tag round_border">heartpounding</span>
                <br />          
              </div>
              <div className="dream_entry">
                <span className="timeStamp">mm.dd.yy - 5am</span>
                <p>Dream entry 4</p>
                <span className="tag round_border">panting</span>
                <span className="tag round_border">crying</span><br />
                <span className="tag round_border">hardtobreathe</span>             
              </div>        
              <div className="dream_entry">
                <span className="timeStamp">mm.dd.yy - 2pm</span>
                <p>Dream entry 5</p>
                <span className="tag round_border">nostalgic</span>
                <span className="tag round_border">calm</span>
              </div>
              <div className="dream_entry">
                <span className="timeStamp">mm.dd.yy - 4am</span>
                <p>Dream entry 6</p>    
              </div>
              <div className="dream_entry">
                <span className="timeStamp">mm.dd.yy - 5am</span>
                <p>Dream entry 7</p>
              </div>    
              <div className="dream_entry">
                <span className="timeStamp">mm.dd.yy - 6pm</span>
                <p>Dream entry 8</p>
              </div>
            </div>

            <div id="create_entry" className="noshow">
              <p />
              <textarea rows={8} cols={40} value defaultValue={""} /> 
              <p /> 
              <input type="radio" name="type" defaultValue="journal" /> Journal
              <input type="radio" name="type" defaultValue="dream" /> Dream
              <br />
              {/*               <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select> */}
              <input className="btn-primary" type="submit" defaultValue="Save Log" />
              
            </div>
          </div>
        </div>
        )
    }

}

export default Journal;