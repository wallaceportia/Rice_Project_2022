
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

	
	
	
	
	
	
 var canvasElement = document.getElementById("tableCanvas");
 
	 

    // setup 
	
    var data = {
      labels: [''],
      datasets: [{
        label: '',
        data: [],
        backgroundColor: [
          'rgba(255, 26, 104, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(0, 0, 0, 0.2)'
        ],
        borderColor: [
          'rgba(255, 26, 104, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(0, 0, 0, 1)'
        ],
        borderWidth: 1
      }]
    };

    // config 
    var config = {
      type: 'table',
      data,
      options: {
        
      }
    };
	function createTable(){
		var tableCanvas = document.querySelector('.tableCanvas');
		var tableDiv = document.createElement('DIV');
		tableDiv.setAttribute('id', 'tableDiv');
	
	var table = document.createElement('TABLE');
	table.classList.add('chartjs-table');
	
	//add thead
	var thead =table.createTHead();
	thead.classliss.add('chartjs-thead');
	
	thead.insertRow(0);
	for(let i = 0; i <data.labels.length; i++) {
		thead.rows[0].insertCell(i),inner = data.labels[i];
	}
	thead.rows[0].insertCell(0).InnerText ='Days';
	
	//<table>
	
	
	
	
	//</table>
//append
	tableCanvas.appendChild(tableCanvas);
	tableDiv.append(table);
	createTable();	
	
	};

    // render init block
    //const myChart = new Chart(
      //document.getElementById('myChart'),
      //config
    
   
