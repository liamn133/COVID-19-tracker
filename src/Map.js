import React from "react";
import { MapContainer as LeafletMap, TileLayer, GeoJSON } from "react-leaflet";
import "./Map.css";
import "leaflet/dist/leaflet.css";

function Map({ countries, center, zoom, newFeatures }) {
	const countryLoad = (country, layer) => {
		const name = country.properties.ADMIN;
		const confirmedCases = country.cases;
		const confirmedCasesCommas = confirmedCases
			.toString()
			.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

		console.log(confirmedCases);
		layer.options.fillColor = `rgba(0,0,255, ${country.opacityLevel}`;
		layer.bindPopup(`${name} ${confirmedCasesCommas} `);
	};
	console.log(newFeatures);

	const map = (
		<div className="map">
			<LeafletMap center={center} zoom={zoom}>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				/>
				<GeoJSON
					data={newFeatures}
					style={{ weight: 0.7 }}
					onEachFeature={countryLoad}
				/>
			</LeafletMap>
			{console.log(countries)}
		</div>
	);

	return map;
}

export default Map;
