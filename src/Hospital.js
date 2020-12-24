import React from "react";
import "./Hospital.css";

const Hospital = () => {
	return (
		<div id="hospContainer">
			<div>
				<h3>Hospital Insights</h3>
				<table id="hospStats">
					<tr>
						<th>Hospitalised:</th>
						<td>0</td>
					</tr>

					<tr>
						<th>ICU:</th>
						<td>0</td>
					</tr>

					<tr>
						<th>Ventilators:</th>
						<td> 0</td>
					</tr>
				</table>
			</div>
			<div>
				<h3>Testing</h3>
				<table id="testStats">
					<tr>
						<th>Tests conducted:</th>
						<td>10,228,773</td>
					</tr>

					<tr>
						<th>Tests/1M pop:</th>
						<td>399,108</td>
					</tr>
				</table>
			</div>
		</div>
	);
};

export default Hospital;
