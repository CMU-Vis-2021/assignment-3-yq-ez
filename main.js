// (function () {
//   var margin = {top:50, left:50, right:50, bottom:50},
//   height = 400 - margin.top - margin.bottom,
//   width = 800 - margin.left - margin.right;

//   var svg = d3.select("#map")
//   .append("svg")
//   .attr("height", height + margin.top + margin.bottom)
//   .attr("width", width + margin.left + margin.right)
//   .append("g")
//   .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//   /***
//    * read in the world.topojson
//    * read in the poverty.json
//    */
//   d3.queue()
//   .defer(d3.json, "world.topojson")
//   .defer(d3.csv, "poverty.csv")
//   .await(ready)


//   /**
//    * create a new projection using mercator and center it(translate)
//    * and zoom in a certain amount(scale)
//    */
//   var offset = [width / 1.8, height / 2]
//   var projection = d3.geoMercator()
//   .translate(offset)
//   .scale(100)

//   /** 
//    * create a path(geopath) using a projection
//   */
//   var path = d3.geoPath()
//   .projection(projection)


//   var maxCountryList = []
//   var lastCountry;
//   var number = 0;
//   var currentCountryName = "";

// function ready (error, data, poverty) {
//   console.log(data)

//   var countries = topojson.feature(data, data.objects.countries).features

//   console.log(countries)


//   var countryNames = {}
//   // poverty.forEach(function(d) {
//   //   countryNames[d.id] = d.name
//   //   option = countryList.append("option");
//   //   option.text(d.name);
//   //   option.property("value", d.id);
//   // })

//   var current;

//   console.log(poverty)
//   /**
//    * add a path for each country (shape --> path)
//    */
//   svg.selectAll(".country")
//   .data(countries)
//   .enter().append("path")
//   .attr("class", "country")
//   .attr("d", path)
//   .on("click", function(d) {

//     number += 1
//     if (number == 1) {
//       current = this;
//       d3.select(current).classed("selected",true)
//       firstCountryName = d.properties.name
//       console.log(firstCountryName)
//       document.getElementById("country_code_1").innerHTML = "The 1st country selected is: " + firstCountryName;
//     }
//     else if (number == 2) {
//       current = this;
//       d3.select(current).classed("selected",true)
//       secondCountryName = d.properties.name
//       console.log(secondCountryName)
//       document.getElementById("country_code_2").innerHTML = "The 2nd country selected is: " + secondCountryName;
//     }
//     else {
//       alert("You have already selected two countries. Page will be reloaded.")
//       location.reload();
//       return false;
//     }
//   })
// }

// }) ();


// if (!current) {
//   if (maxCountryList.length == 2) {
//     //max two countries and pop the last country
//     lastCountry = maxCountryList.pop()
//     d3.select(lastCountry).classed("selected",false);
//     current = this;
//     d3.select(current).classed("selected",true);
//     maxCountryList.push(current)
//     console.log(maxCountryList.length)
//   } 
//   else {
//     //current = this;
//     d3.select(this).classed("selected",true);
//     maxCountryList.push(this)
//     console.log(maxCountryList.length)
//   }
// } 
// else {
//   d3.select(current).classed("selected",false);
//   maxCountryList.pop()
//   current = undefined;
//   // number -= 1;
//   console.log(maxCountryList.length)
// }