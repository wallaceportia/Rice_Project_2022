





function drawMap(tag,riceData,year){
	let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
	});
	
	let map = L.map(tag, {
	center: [40.7, -94.5],
	zoom: 3,
	layers: [dark]
	});

	let baseMaps = {
	  
	  "Dark": dark
	};
	let production = new L.LayerGroup();
	let consumption = new L.LayerGroup();
	//let population = new L.LayerGroup();
	//let gdp = new L.LayerGroup();

	let overlays = {
		"Production":production,
		"Consumption":consumption
		//"Population":population,
		//"GDP":gdp
	}
	L.control.layers(baseMaps, overlays).addTo(map);
	
	d3.json("../../static/data/continents.json").then(function(data) {
		
	
	
	L.geoJson(data, {
        
      //style: styleInfo,
      
      onEachFeature: function(feature, layer) {
        //layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
        let continent = feature.properties.CONTINENT;
        //let production = c_data[fips].completed;
        //let consumption = c_data[fips].completed_ratio;
        //console.log(completedVaccines)
        //console.log(completed_ratio)
        layer.bindPopup(" Region: " + continent +
                        //"<br>Completed Vaccines: " + completedVaccines +
                        //"<br>Ratio: " + completed_ratio + 
                        "<br>");
        console.log(feature.properties);
        

      }

      
    }).addTo(consumption);

    consumption.addTo(map);

  });
}