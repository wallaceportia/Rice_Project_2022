
	
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
function footer(tooltipItems) {
	console.log("footer");
	console.log(tooltipItems);
	let continent = tooltipItems[0]["dataset"]["region"];
  let item = [];

  tooltipItems.forEach(function(tooltipItem) {
    item += tooltipItem.parsed.y;
  });
   
  return 'Region: '+ continent;
};
function prepareData(region){



const data = {
      labels: getYears(),
      datasets: [
	  {
        label: 'Consumption',
		region: region,
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
		region: region,
       
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
		  interaction: {
      intersect: false,
      mode: 'index',
    },
		plugins: {
			tooltip: {
        callbacks: {
          footer: footer,
        scales: {
          y: {
            beginAtZero: true
	
          }
        }
      }
    }

}

	  }
	};
	oldChart = new Chart(canvasElement,config);
};
drawChart("Asia");
    // render init block
    //const myChart = new Chart(
      //document.getElementById('myChart'),
      //config
  