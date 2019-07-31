import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import '../src/assets/css/sass/main.scss';
import EmployeeBase from './components/EmployeeBase';
import Home from './components/Home';
import ContactUs from './components/Contact'

function App() {
	return (
		<Router>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<NavLink to="/home" activeClassName="active" className="nav-link">Home</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/employees" activeClassName="active" className="nav-link">Employees</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/contact" activeClassName="active" className="nav-link">Contact</NavLink>
						</li>
					</ul>
				</div>
			</nav>
			<div className="container py-2">
				<Route path="/home/" exact component={Home} />
				<Route path="/employees/" component={EmployeeBase} />
				<Route path="/contact/" component={ContactUs} />
			</div>
		</Router>
	);
}

export default App;
