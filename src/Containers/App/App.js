import React, {Component} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../Routes/routes';
import './App.css';

class App extends Component {
	render() {
	   return (
		<Router>
			<div className="App">
				<header className="App-header">
					<Routes/>
				</header>
		   </div>
		</Router>
  	  )	
	}
}

export default App;