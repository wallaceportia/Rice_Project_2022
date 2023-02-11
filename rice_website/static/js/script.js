

// Fetch Block
//async function fetchData() {
	/* const url = fetch('C:\Users\Getli\Documents\rice_consumption_project_2022\rice_consumption_project\Rice-Project-2022\region_data.json')
	const response = await fetch(url);
	// wait until the request has been completed
	const datapoints = await response.json();
	console.log(datapoints);
	return datapoints;
	
};

fetchData().then(datapoints)=> {
	const consumption = datapoints.population
} */




function getYears(){
	
	var years =[];
	for (let i=1961; i<=2017;i++){
		years.push(i);
	}
	return years;
}
function getColumn(region,name){
	var column =[];
	for (let i=1961; i<=2017;i++){
		let j = regionData[name]["('"+region+"', "+i+")"];
		column.push(j);
	}
	return column;
}
function prepareData(region){

const data = {
      labels: getYears(),
      datasets: [
	  {
        label: 'Consumption',
        data: getColumn(region,"Tons Consumption"),
		
         backgroundColor: [
          'rgba(255, 26, 104, 0.2)'
          
        ],
        borderColor: [
          'rgba(255, 26, 104, 1)'
          
        ], 
		
        borderWidth: 1
      },
	  {
        label: 'Production',
       
		data: getColumn(region, "Production"),
         backgroundColor: [
          'rgba(104, 26, 255, 0.2)'
          
        ],
        borderColor: [
          'rgba(104, 26, 255, 1)'
          
        ], 
		
        borderWidth: 1
      }
	  ]
    };
	return data;
}

var oldChart = null;
function drawChart(region){
	if (oldChart != null){
		oldChart.destroy();
	}
	
var canvasElement = document.getElementById("chartCanvas");
var data = prepareData(region);
    // config 
    const config = {
      type: 'line',
	  tension: 0.4,
      data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };
oldChart = new Chart(canvasElement,config);
}
drawChart("Asia");

    // render init block
    //const myChart = new Chart(
      //document.getElementById('myChart'),
      //config
  