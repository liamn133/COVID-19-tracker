import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<nav className="GlobalNav">
			<Link className="navLink" id="navStart" to="/">
				<a href="">COVID Australia</a>
			</Link>
			<Link className="navLink" to="/Symptoms">
				<a href="/info">About</a>
			</Link>

			<Link className="navLink" id="navEnd" to="/World">
				<a href="/World">World Outlook</a>
			</Link>
		</nav>
	);
};

export default Nav;
