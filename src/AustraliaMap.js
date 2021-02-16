import React, { useState, useEffect } from "react";
import "./AustraliaMap.css";
import StateTable from "./StateTable";
import AustraliaImg from "./images/Australia.png";

const AustraliaMap = () => {
	const [showMap, setShowMap] = useState(true);
	const [stateData, setStateData] = useState({});

	useEffect(() => {
		const queryLarge = window.matchMedia("(max-width:600px)");

		queryLarge.addEventListener("change", (e) => {
			if (e.matches) {
				setShowMap(false);
			} else {
				setShowMap(true);
			}
		});
	}, []);

	useEffect(() => {
		fetch("https://api.covid19api.com/country/australia/status/confirmed")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				let stateStats = {};
				for (let i = data.length - 1; i >= 0; i--) {
					let key = data[i]["Province"];
					let cases = data[i]["Cases"];
					if (!stateStats.hasOwnProperty(key)) {
						stateStats[key] = cases;
					}
				}
				function populateStates() {
					let stateVals = {
						wa: "Western Australia",
						vic: "Victoria",
						nsw: "New South Wales",
						sa: "South Australia",
						nt: "Northern Territory",
						tas: "Tasmania",
						qld: "Queensland",
					};
					Object.keys(stateVals).forEach((key) => {
						console.log(key);
						let a = document.querySelector(`.${key}`);
						if (a && a.innerText === "") {
							a.innerText += `${key.toUpperCase()}: ${
								stateStats[stateVals[key]]
							}`;
						}
					});

					console.log(stateStats);
					setStateData(stateStats);

					return stateStats;
				}
				populateStates();
			});
	}, [showMap]);

	const map = (
		<div id="superContainer">
			<div id="container">
				<img src={AustraliaImg} id="australiaImg" alt="Australia COVID Map" />
				<div className="wa"></div>
				<div className="vic"></div>
				<div className="nsw"></div>
				<div className="sa"></div>
				<div className="nt"></div>
				<div className="tas"></div>
				<div className="qld"></div>
			</div>
		</div>
	);

	return showMap ? map : <StateTable states={stateData} />;
};

export default AustraliaMap;
