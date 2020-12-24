import React from "react";

import "./Symptoms.css";

function Symptoms() {
	return (
		<div id="symptomsContainer">
			<div id="symptomsContentContainer">
				<h1 id = "symptomsHeading">COVID-19: An Overview</h1>
				<p className="infoParagraph">
					<h2>What is COVID-19?</h2>
					COVID-19 is a disease caused by the novel coronavirus SARS-COV-2.
					First originating in the Wuhan, China in the latter months of 2019,
					the disease was classified as a pandemic by the World Health
					Organisation in March 2020.
				</p>
               
				<p className = "infoParagraph">
					<h2>Covid Symptoms</h2>
					<h3>Common symptoms</h3>
					<ul>
						<li>Persistent dry cough</li>
						<li>Fever</li>
						<li>Runny Nose</li>
						<li>Loss of sense of taste or smell </li>
						<li>Fatigue</li>
					</ul>

					<h3>Less common symptoms</h3>
					<ul>
						<li>Headache</li>
						<li>Body aches</li>
						<li>Rashes</li>
						<li>Sore throat</li>
					</ul>
				</p>
				<p className = "infoParagraph">
					<h2>Treatment</h2>
					As of November 20th, 2020, there are now a number of vaccines which
					show promising results from Phase 3 trials, with efficacy near 95%.
					These vaccines are likely to start being distributed in Early 2021. In
					addition to vaccines, there are several therapeutics being used on
					patients with severe disease, although these have limited
					effectiveness.
				</p>
			</div>
			<div id="symptomsImgContainer">
				<img id="covidImg" src="/covid19.png" />
			</div>
		</div>
	);
}

export default Symptoms;
