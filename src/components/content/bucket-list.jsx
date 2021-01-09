import React, { Component } from 'react';

class BucketList extends Component {
	render() {
		return (
			<div id="bucketlistContent" className="noshow">
			<h3>Bucket List</h3><br/>
			<ul>
			<li>Work &middot; Save &middot; Invest</li><p></p>
			<li>F.I.</li><p></p> 
			<li>Trust Fund</li><p></p>
			<li>R.I.P</li>
			</ul>

			</div>
		);
	}
}

export default BucketList;