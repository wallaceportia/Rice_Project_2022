



var map=null;

function drawMap(tag,riceData,year){
	
	map = L.map(tag, {
	center: [40.7, -94.5],
	zoom: 2
	
	});
	let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
	}).addTo(map);
	let baseMaps = {
	  
	  "Dark": dark
	};
	let production = new L.LayerGroup();
	let consumption = new L.LayerGroup();
	//let population = new L.LayerGroup();
	//let gdp = new L.LayerGroup();

	let overlays = {
		"Production":production
		//"Consumption":consumption
		//"Population":population,
		//"GDP":gdp
	}
	var layerControl=L.control.layers(baseMaps, overlays).addTo(map);
	layerControl.addOverlay(consumption,"Consumption");
	
	d3.json("https://raw.githubusercontent.com/wallaceportia/Rice_Project_2022/main/rice_website/static/data/continents.json").then(function(data) {
		
	function consumptionStyleInfo(feature) {
    console.log(feature);  
	
	let continent = feature.properties.CONTINENT;
	if (continent == "Australia"){
		continent = "Oceania";
	}
	/*
	let cur = riceData["Tons Consumption"]["('"+continent+"', "+year+")"];
	let ratio = cur/max;
	let colorNumber = Math.floor(255*ratio);


	let color = "#"+colorNumber.toString(16).padStart(2,"0")+"0000";
	console.log("continent: "+ continent);
	console.log("cur: "+ cur);
	console.log("ratio: "+ ratio);
	console.log("colorNumber:"+ colorNumber);
	console.log("color: "+ color);
*/
let color = riceData["Consumption Color"]["('"+continent+"', "+year+")"];
	/*
	if(feature.properties.CONTINENT == "Asia"){
		color = "#339FFF";
	}
	if(feature.properties.CONTINENT == "Africa"){
		color = "#FF334F";
	}
	if(feature.properties.CONTINENT == "Antarctica"){
		color = "#FF33D3";
	}
	if(feature.properties.CONTINENT == "Australia"){
		color = "#33FF36";
	}
	if(feature.properties.CONTINENT == "Europe"){
		color = "#FF7C33";
	}
	if(feature.properties.CONTINENT == "South America"){
		color = "#E8FF33";
	}
	if(feature.properties.CONTINENT == "North America"){
		color = "#33FFF6";
	}
	*/
      return {
        opacity: 1,
        fillOpacity: 0.5,
        fillColor: color,
        color: "#000000",
        stroke: true,
        weight: 0.5
      };
    };
	
	function productionStyleInfo(feature) {
     
	
	let continent = feature.properties.CONTINENT;
	if (continent == "Australia"){
		continent = "Oceania";
	}
	
let color = riceData["Production Color"]["('"+continent+"', "+year+")"];
	
      return {
        opacity: 1,
        fillOpacity: 0.5,
        fillColor: color,
        color: "#000000",
        stroke: true,
        weight: 0.5
      };
    };
	
	L.geoJson(data, {
        
      style: consumptionStyleInfo,
      
      onEachFeature: function(feature, layer) {
      
        let continent = feature.properties.CONTINENT;
        
        layer.bindPopup(" Region: " + continent +
	  "<br>Production: " + riceData["Production"]["('"+continent+"', "+year+")"]+
	 
	  "<br>TonsConsumption: " + riceData["Tons Consumption"]["('"+continent+"', "+year+")"]+
	  "<br>GDP: " + riceData["GDP"]["('"+continent+"', "+year+")"]+
	  "<br>Population: " + riceData["Population"]["('"+continent+"', "+year+")"]+
                        
       "<br>");
        
        

      }

      
    }).addTo(consumption);
	
    consumption.addTo(map);
	
	L.geoJson(data, {
        
      style: productionStyleInfo,
      
      onEachFeature: function(feature, layer) {
     
        let continent = feature.properties.CONTINENT;
        
        layer.bindPopup(" Region: " + continent +
	  "<br>Production: " + riceData["Production"]["('"+continent+"', "+year+")"]+
	 
	  "<br>TonsConsumption: " + riceData["Tons Consumption"]["('"+continent+"', "+year+")"]+
	  "<br>GDP: " + riceData["GDP"]["('"+continent+"', "+year+")"]+
	  "<br>Population: " + riceData["Population"]["('"+continent+"', "+year+")"]+
                        
       "<br>");
        
        

      }

      
    }).addTo(production);
	
    production.addTo(map);
	
  });
  
  var slider = document.getElementById('slider');

  noUiSlider.create(slider, {
	start: [20, 80],
	connect: true,
	range: {
        'min': 0,
        'max': 100
    }
});
}