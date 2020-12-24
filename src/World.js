import React, { useState, useEffect } from "react";
import "./App.css";
import {
	Card,
	CardContent,
} from "@material-ui/core";

import Table from "./Table";
import { sortData} from "./Helper";
import Map from "./Map";
import { features } from "./data/countries.json";
import "leaflet/dist/leaflet.css";

const World = () => {
	const [country, setInputCountry] = useState("worldwide");
	const [countryInfo, setCountryInfo] = useState({});
	const [countries, setCountries] = useState([]);
	const [mapCountries, setMapCountries] = useState([]);
	
	const [tableData, setTableData] = useState([]);
	const [casesType, setCasesType] = useState("cases");
	const [mapZoom, setMapZoom] = useState(3);
	 
	
	

	const attachCovidData = () => {
		const newFeatures = [];

		for (let i = 0; i < features.length; i++) {
			newFeatures.push(features[i]);
		}

		for (let i = 0; i < newFeatures.length; i++) {
			const featureCountry = newFeatures[i];
			featureCountry.cases = 0;
			featureCountry.casesText = "";
			const covidCountry = tableData.find(
				(country) =>
					country.countryInfo.iso3 === featureCountry.properties.ISO_A3
			);
			if (covidCountry != null) {
				let cases = covidCountry.cases;
				let deaths = covidCountry.deaths;
				featureCountry.cases = cases;
				featureCountry.opacityLevel = 0;
				if (featureCountry.cases < 50000) {
					featureCountry.opacityLevel = 0.1;
				} else if (featureCountry.cases < 50000) {
					featureCountry.opacityLevel = 0.2;
				} else if (
					featureCountry.cases >= 50000 &&
					featureCountry.cases < 100000
				) {
					featureCountry.opacityLevel = 0.3;
				} else if (
					featureCountry.cases >= 100000 &&
					featureCountry.cases < 250000
				) {
					featureCountry.opacityLevel = 0.4;
				} else if (
					featureCountry.cases >= 250000 &&
					featureCountry.cases < 500000
				) {
					featureCountry.opacityLevel = 0.5;
				} else if (
					featureCountry.cases >= 500000 &&
					featureCountry.cases < 1000000
				) {
					featureCountry.opacityLevel = 0.6;
				} else {
					featureCountry.opacityLevel = 1;
				}
				featureCountry.deaths = deaths;
				featureCountry.casesText = "";
			}
		}
		console.log(newFeatures);
		return newFeatures;
	};

	useEffect(() => {
		fetch("https://disease.sh/v3/covid-19/all")
			.then((response) => response.json())
			.then((data) => {
				setCountryInfo(data);
				console.log(data);
			});
	}, []);

	useEffect(() => {
		const getCountriesData = async () => {
			fetch("https://disease.sh/v3/covid-19/countries")
				.then((response) => response.json())
				.then((data) => {
					const countries = data.map((country) => ({
						name: country.country,
						value: country.countryInfo.iso2,
					}));
					let sortedData = sortData(data);
					setCountries(countries);

					setMapCountries(data);
					setTableData(sortedData);
				});
		};

		getCountriesData();
	}, []);

	const onCountryChange = async (e) => {
		const countryCode = e.target.value;

		const url =
			countryCode === "worldwide"
				? "https://disease.sh/v3/covid-19/all"
				: `https://disease.sh/v3/covid-19/countries/${countryCode}`;
		await fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setInputCountry(countryCode);
				setCountryInfo(data);
				// setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
				setMapZoom(4);
			});
	};

	return (
		<div className="app">
			<div className="app__left">
				<div className="app__header">
					<h1>World Overview</h1>
				</div>
				<Map
					countries={mapCountries}
					casesType={casesType}
					center={{ lat: 34.80746, lng: -40.4796 }}
					zoom={mapZoom}
					newFeatures={attachCovidData()}
				/>
			</div>
			<Card style = {{marginTop: '50px'}} className="app__right">
				<CardContent>
					<div className="app__information">
						<h3>Total Cases</h3>
						<Table countries={tableData} />
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default World;
