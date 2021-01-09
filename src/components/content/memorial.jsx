import React, { Component } from 'react';
import "../../styles2.scss"

class Memorial extends Component {
	render() {
		const styles = {
			img: {
				marginTop: '-5em',
				marginLeft: '-4.5em'
			},
			
			post: {
				display: 'block',
				padding: '2em!important'
			},
			method: {
				marginTop: '-5em',
				fontSize: '0.9em' 	
			},
			header: {
				color: '#fff !important'
			}
		}

		return (
			<div id="memorialContent" class="noshow">
			<h3 styles={{color: '#fff !important'}}>
				Resting in Peace 💛
			</h3>			
		              <div id="0" className="community_post" styles={styles.post}>
		                <span className="timeStamp">Kate Spade, 56
		                </span><br/>

						<span className="more">6.05.18</span><br/>             
		     	           <div className="newEntry" styles={styles.entry}> 
		                	<img src="https://duckduckgo.com/i/12fddc76.png" style={styles.img} />
		                	<div className="method" style={styles.method}>method: hanging</div>
		                </div>		

		              </div>  
		              <div className="community_post">		
		                <span className="timeStamp">Choi Jin-ri (Sulli), 25
		                </span><br/>

						<span className="more">10.14.19</span><br/>             
		     	           <div className="newEntry">
		                	<img id="sulli-img" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.allkpop.com%2Fupload%2F2018%2F06%2Faf_org%2F28094408%2FSulli.jpg&f=1&nofb=1" />
		                	<div className="method" style={styles.method}>method: hanging </div>
		                </div>		
		                </div>

		              <div className="community_post">		
		                <span className="timeStamp">Goo Hara, 28
		                </span><br/>

						<span className="more">11.24.19</span><br/>             
		     	           <div className="newEntry">
		                	<img id="" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fconsequenceofsound.net%2Fwp-content%2Fuploads%2F2019%2F11%2FGoo-Hara.jpg%3Fquality%3D80&f=1&nofb=1" />
		                	<div className="method" style={styles.method}>method: hanging</div>
		                </div>		
		                </div>

		                <div className="community_post">
		                <span className="timeStamp">Robin Williams, 63
		                </span><br/>

						<span className="more">8.11.14</span><br/>             
		     	           <div className="newEntry" styles={styles.entry}> 
		                	<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.cTQgYIzGg5_i-EAOhVk_5gHaLI%26pid%3DApi&f=1" style={styles.img} />
		                	<div className="method" style={styles.method}>method: hanging </div>
		                </div>		</div>                
			</div>
			
		);
	}
}

export default Memorial;