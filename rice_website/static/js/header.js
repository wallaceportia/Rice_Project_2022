var header=document.getElementById("header");

var map_link=document.createElement("a");

map_link.setAttribute("class", "button");
if(page=="map"){
	map_link.setAttribute("class", "button_selected");
}
map_link.setAttribute("href","map.html");
map_link.innerText="Map";
header.appendChild(map_link);

var chart_link=document.createElement("a");
chart_link.setAttribute("class", "button");
if(page=="charts"){
	chart_link.setAttribute("class", "button_selected");
}
chart_link.setAttribute("href","charts.html");
chart_link.innerText="Chart";
header.appendChild(chart_link);

var table_link=document.createElement("a");
table_link.setAttribute("class", "button");
if(page=="table"){
	table_link.setAttribute("class", "button_selected");
}
table_link.setAttribute("href","table.html");
table_link.innerText="Table";
header.appendChild(table_link);

var about_link=document.createElement("a");
about_link.setAttribute("class", "button");
if(page=="about"){
	about_link.setAttribute("class", "button_selected");
}
about_link.setAttribute("href","about.html");
about_link.innerText="About";
header.appendChild(about_link);
