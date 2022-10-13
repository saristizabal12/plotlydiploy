// Bar and Bubble charts
// Create the buildCharts function.
// 1. Create the buildCharts function.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    // 3. Create a variable that holds the samples array. 
    samplesArray = data.samples;
    // 4. Create a variable that filters the samples for the object with the desired sample number.
    outputArray = samplesArray.filter(sampleObj => sampleObj.id == sample);
    //  5. Create a variable that holds the first sample in the array.
    var chartResult = outputArray[0];

    var metadataArray = data.metadata;
    var filteredMetadata = metadataArray.filter(sampleObj => sampleObj.id == sample);
    var metadataResult = filteredMetadata[0];
    var wfreq = parseFloat(metadataResult.wfreq);

    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otuIds = chartResult.otu_ids;
    var otuLabels = chartResult.otu_labels;
    var sampleValues = chartResult.sample_values;

    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 
    var xticks = sampleValues.slice(0, 10).reverse();
    var yticks = otuIds.slice(0, 10).map(x => `OTU ${x}`).reverse();

    // 8. Create the trace for the bar chart. 
    var barData = [{
      x: xticks,
      y: yticks,
      text: otuLabels,
      type: "bar",
      orientation: "h"
    }];
    // 9. Create the layout for the bar chart. 
    var barLayout = {
     title: "<b>Top 10 Bacteria Cultures Found</b>"
    };
    // 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar", barData, barLayout);
  });
}
