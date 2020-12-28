import React, { useState, useEffect } from "react";

import "./Home.css";
import Hospital from "./Hospital";
import AustraliaMap from "./AustraliaMap";
import AustraliaStats from "./AustraliaStats";
import hospitalImage from "./images/hospitalImg.png"
import testImage from "./images/test.svg"


const Home = () => {
	const [info, setInfo] = useState([]);
	const [loaded, setLoaded] = useState(false);

	const loadCheck = () => {
		setLoaded(true);
	};

	useEffect(() => {
		async function getStuff() {
			const res = await fetch("https://api.covid19api.com/summary");
			const data = await res.json();
			if (data != null) {
				if (data) {
					setInfo(
						data.Countries.filter((country) => country.Country === "Australia")
					);
				}
			}
		}

		getStuff();
	}, []);

	const home = (
		<div>
			<section id="splitPage">
				<section>
					<AustraliaStats info={info} loadCheck={loadCheck} />

					<section id="statsSectionImgs">
						<img id="headImg" src={hospitalImage}/>
						<img id="testImg" src={testImage} />
					</section>

					<section id="statsSection">
						<Hospital />
					</section>
				</section>
				<section id="mapSection">
					<AustraliaMap />
				</section>
			</section>
		</div>
	);

	const home2 = (
		<div>
			<section id="splitPage">
				<section>
					<AustraliaStats info={info} loadCheck={loadCheck} />
				</section>
			</section>
		</div>
	);
	return loaded ? home : home2;
};

export default Home;
