// var trace1 = {
//     x: [1, 2, 3, 4, 5],
//     y: [1, 6, 3, 6, 1],
//     mode: 'markers',
//     type: 'scatter',
//     name: 'Team A',
//     text: ['A-1', 'A-2', 'A-3', 'A-4', 'A-5'],
//     marker: { size: 12}
// };
// var trace2 = {
//     x: [1.5, 2.5, 3.5, 4.5, 5.5],
//     y: [4, 1, 7, 1, 4],
//     mode: 'markers',
//     type: 'scatter',
//     name: 'Team B',
//     text: ['B-1', 'B-2', 'B-3', 'B-4', 'B-5'],
//     marker: { size: 12}
// };
// var data = [ trace1, trace2];

// var layout = {
//     xaxis: {
//         range: [0.75, 5.25]
//     },
//     yaxis: {
//         range: [0,8]
//     },
//     title: 'Data Labels Hover'
// };

// Plotly.newPlot('plotArea', data, layout);

// How to Square numbers... example example of mathematical equations
// var doubled = numbers.map(function(integer) {
//     return integer * 2;
// });

// var numbers = [0, 2, 4, 6, 8]

// var add = numbers.map(function(integer) {
//     return integer + 5;
// });

// var cities = [
//     {
//       "Rank": 1,
//       "City": "San Antonio ",
//       "State": "Texas",
//       "Increase_from_2016": "24208",
//       "population": "1511946"
//     },
//     {
//       "Rank": 2,
//       "City": "Phoenix ",
//       "State": "Arizona",
//       "Increase_from_2016": "24036",
//       "population": "1626078"
//     },
//     {
//       "Rank": 3,
//       "City": "Dallas",
//       "State": "Texas",
//       "Increase_from_2016": "18935",
//       "population": "1341075"
//     }
// ];

// var cityNames = cities.map(function(city){
//     return city.City;
// });
// console.log(cityNames);

// var cityPopulation = cities.map(function(city){
//     return city.population;
// });
// console.log(cityPopulation);

// let numbers = [13, 22, 36, 54, 55]
// let evenNumbers = []

// numbers.forEach(function(number){
//     if (number % 2 == 0) {

//         evenNumbers.push(number)
//     }
// });

// let numbers = [13, 22, 36, 54, 55]
// let evenNumbers = numbers.filter(number => number % 2 == 0)

// console.log(evenNumbers)

// var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
// const startsWiths = words.filter((word) => word.startsWith("s"));
// console.log(startsWiths);

// *doubling using .map()

// var numbers = [1,2,3,4,5];
// var doubled = numbers.map(num => num * 2);
// console.log(doubled);

// *reversing javascript using sort

// var familyAge = [3,2,39,37,9];
// var sortedAge = familyAge.sort((a,b) => a - b);
// console.log(sortedAge)

// *variation on reversing

// var familyAge = [3,2,39,37,9];
// var sortedAge = familyAge.sort((anElement,anotherElement) => anElement -
// anotherElement);

// * Example on how to create descending order.

// var familyAge = [3,2,39,37,9];
// sortedAge = familyAge.sort((a,b) => b - a);
// console.log(sortedAge)

//Slice method
// var integers = [0, 1, 2, 3, 4, 5];
// var slice1 = integers.slice(0,2);

// var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
// var slice1 = words.slice(0,4);

//Slicing the last two
//var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
// words.slice(3, );

// const url = "https://api.spacexdata.com/v2/launchpads";

// d3.json(url).then(receivedData => console.log(receivedData));

//Retrieve and print Specific result
// d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));


// How would Roza rewrite the code to retrieve the details only from the Vandenberg Air Force Base?
// d3.json(url).then(spaceXResults =>
//     console.log(spaceXResults[0]));

//How would Roza access the latitude of the Vandenberg Airforce Base?
// d3.json(url).then(spaceXResults =>
//     console.log(spaceXResults[0].location.latitude));
// const url = "https://api.spacexdata.com/v2/launchpads";
// d3.json(url).then();

// d3.json("samples.json").then(function(data){
//     console.log("hello");
// });

// the weekly belly button washing frequency, of each person into a new array. 
// d3.json("samples.json").then(function(data){
//     wfreq = data.metadata.map(person => person.wfreq);
//     console.log(wfreq);
// });

// array in descending order
// d3.json("samples.json").then(function(data){
//     wfreq = data.metadata.map(person =>
// person.wfreq).sort((a,b) => b - a);
//     console.log(wfreq);
// });


// delete null values from the sorted array
// d3.json("samples.json").then(function(data){
//     wfreq = data.metadata.map(person =>
// person.wfreq).sort((a,b) => b - a);
//     filteredWfreq = wfreq.filter(element => element !=
// null);
//     console.log(filteredWfreq);
// });

// Delete null values from the sorted
// d3.json("samples.json").then(function(data){
//     wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b-a);
//     filteredWfreq = wfreq.filter(element => element != null);
// });


// You are given the following object.researcher1... to printout each key-value pair inside an array
//
// researcher1 = {
//     name: 'Roza',
//     age: 34,
//     hobby: 'Hiking'
// };
// console.log(Object.entries(researcher1));

// which of the following methods would you use to print to the console each trait and corresponding property?

// researcher1 = [['name', 'Roza'], ['age', 34], ['hobby',
// 'Hiking']];

// researcher1.forEach(([first, second]) => console.log(first
//     + ": " + second));


// d3.json("samples.json").then(function(data){
//     firstPerson = data.metadata[0];
//     Object.entries(firstPerson).forEach(([key, value]) =>
//       {console.log(key + ': ' + value);});
// });



// Open script.js. creates an event listener that triggers the custom function every time...
// a change takes place to the HTML element specified by.

// d3.selectAll("body").on("change", updatePage);

// function updatePage() {
//   var dropdownMenu = d3.selectAll("#selectOption").node();
//   var dropdownMenuID = dropdownMenu.id;
//   var selectedOption = dropdownMenu.value;

//   console.log(dropdownMenuID);
//   console.log(selectedOption);
// };

// Suppose that you add the following line of code to the updatePage() function. What will it print to the browser console when a dropdown menu item is selected?
// console.log(d3.selectAll("#menu").node().id);

// In the line Plotly.restyle(“plot” trace);, what do the two arguments refer to, respectively?
// The first argument, “plot”, refers to the HTML div, and the second argument, trace, refers to a JavaScript object that contains the data.

function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}
  
  init();


In the following code example, what is doSomething?

<select id="myDropdownMenu"
onchange="doSomething(this.value)"></select>
