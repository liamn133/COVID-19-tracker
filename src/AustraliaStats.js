import React, {useEffect} from "react";
import "./AustraliaStats.css";
const AustraliaStats = ({info, loadCheck}) => {
	
	useEffect(()=>{
    if(info[0]){
    loadCheck()
	}
	},[info])
	
	const stats = (
		<div>
			<h2 id = "mainStatsHeading">
				<strong>National Statistics</strong>
			</h2>
			<table id="mainStats">
				<tr>
					<th scope="column" id="totalCases">
						Total Cases
					</th>
					<th scope="column" id="activeCases">
						Recovered
					</th>
					<th scope="column" id="deaths">
						Deaths
					</th>
					<th scope="column" id="deathRate">
						Death Rate
					</th>
				</tr>
				<tr>
					<td id="totalCasesAmt">{info[0]&&info[0].TotalConfirmed}</td>
					<td id="activeCasesAmt">{info[0]&&info[0].TotalRecovered}</td>
					<td id="deathsAmt">{info[0]&&info[0].TotalDeaths}</td>
					<td id="percentageAmt">{((info[0]&&info[0].TotalDeaths)/(info[0]&&info[0].TotalConfirmed)*100).toFixed(2)}%</td>
				</tr>
			</table>
		</div>
	);
	return info[0]?stats:null
};

export default AustraliaStats;
