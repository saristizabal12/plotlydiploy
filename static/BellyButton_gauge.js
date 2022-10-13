// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);

    // Create a variable that holds the samples array. 

    // Create a variable that filters the samples for the object with the desired sample number.

    // 1. Create the trace for the bubble chart.
    var bubbleData = [{
      x: otuIds,
      y: sampleValues,
      text: otuLabels,
      mode: 'markers',
      marker: {
        color: otuIds,
        colorscale: "Rainbow",
        size: sampleValues,
        sizemode: "diameter"
      }
      //type: "scatter"
    }];

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      title: "<b>Bacteria Cultures Per Sample</b>",
      hovermode: "closest",
      xaxis: {title: {text: "OTU ID"}}
    };

    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot("bubble", bubbleData, bubbleLayout);



    // 4. Create the trace for the gauge chart.
    var gaugeData = [{
      domain: {x: [0, 1], y: [0, 1]},
      type: "indicator",
      mode: "gauge+number",
      value: wfreq,
      title: { text: "<b>Belly Button Washing Frequency</b><br> Scrubs Per Week", font: {size: 24}},
      gauge: {
        axis: {range: [null, 10], tickwidth: 1, tickcolor: "black"},
        bgcolor: "black",
        bar: {color: "black"},
        steps: [
          {range: [0, 2], color: "red"},
          {range: [2, 4], color: "orange"},
          {range: [4, 6], color: "yellow"},
          {range: [6, 8], color: "lightgreen"},
          {range: [8, 10], color: "green"}
        ]
      }
    }];

    var gaugeLayout = { 
     width: 500,
     height: 400,
     margin: {t: 25, r: 25, l: 25, b: 25},
     paper_bgcolor: "white",
     font: {color: "black", family: "Arial"}
    };

    Plotly.newPlot("gauge", gaugeData, gaugeLayout);
  });
};