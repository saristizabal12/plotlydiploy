// console.log(cityGrowths);

var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse();
console.log(sortedCities);

// Creating a slice of the top5 cities
var topFiveCities = sortedCities.slice(0,5);
console.log(topFiveCities);

//Create Arrays of City Names and Growth Figures
//The parseInt function converts its first argument to a string, parses that string, then returns an integer or NaN . If not NaN
var topFiveCityNames = cityGrowths.map(city => city.City);
var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));
console.log(topFiveCityNames, topFiveCityGrowths)

//Create a Bar Chart with the Arrays
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
};

var data = [trace];
var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City"},
    yaxis: {title: "Population"}
};
Plotly.newPlot("bar-plot", data, layout)


// var sortedCities = cityGrowths((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse();

// var topSevenCities = sortedCities.slice(0,7)

// var topSevenCityNames = cityGrowths.map(city => city.City);
// var topSevenCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));

// var trace = {
//     x: topSevenCityNames
//     y: topSevenCityGrowths
//     type: "bar"
// };

// var data = [trace];
// var layout = {
//     title: "Most Rapidly Growing Cities",
//     xaxis: {title: "City"}
//     yaxis: {title: "Population"}
// };
// Plotly.newPlot("bar-plot", data, layout)