import React from 'react';
import ReactDOM from 'react-dom';
import { Pet } from './Pet';

class App extends React.Component {
	handleTitleClick() {
		alert('You clicked the title');
	}

	render() {
		return (
			<div className="container">
				<h1 className="main__title" onClick="this.handleTitleClick">
					This is title
				</h1>
				<p className="main__description">This is description</p>
				<div class="pet-list">
					<Pet name="lun" type="Dog" />
				</div>
			</div>
		);
	}
}

const root = document.getElementById(`root`);
ReactDOM.render(React.createElement(App), root);
