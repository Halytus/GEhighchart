var TITLE = 'Grand Exchange Price of a Red Party Hat 2008-2023';

// Caption underneath the chart
var CAPTION = 'Source: Jagex and Kaggle';

// Add download link to the caption
CAPTION += '<br><a href="https://halytus.github.io/GEhighchart/" style="color:blue">View data and code</a>, \
created by <a href="" style="color: blue">Halytus(placeholder for portfolio site)</a> \
with <a href="https://www.highcharts.com/" style="color: blue">Highcharts</a>';

// x-axis label and label in tooltip
var X_AXIS = 'Date';

// y-axis label and label in tooltip
var Y_AXIS = 'Price in Gold Pieces(gp)';

// Should y-axis start from 0? `true` or `false`
var BEGIN_AT_ZERO = true;

// `true` to show the legend, `false` to hide
var SHOW_LEGEND = true;

var TITLE2 = 'Grand Exchange Price of an Abyss Whip 2008-2023';

// Caption underneath the chart
var CAPTION2 = 'Source: Jagex and Kaggle';

// Add download link to the caption
CAPTION2 += '<br><a href="https://github.com/HandsOnDataViz/highcharts-line-annotated" style="color:blue">View data and code</a>, \
created by <a href="https://handsondataviz.org/" style="color: blue">HandsOnDataViz</a> \
with <a href="https://www.highcharts.com/" style="color: blue">Highcharts</a>';

// x-axis label and label in tooltip
var X_AXIS2 = 'Date';

// y-axis label and label in tooltip
var Y_AXIS2 = 'Price in Gold Pieces(gp)';

// Should y-axis start from 0? `true` or `false`
var BEGIN_AT_ZERO2 = true;

// `true` to show the legend, `false` to hide
var SHOW_LEGEND2 = true;

var redph = '/GEhighchart/redpartyhat.csv';

var abysswhip = '/GEhighchart/abysswhip.csv';

var veracsflail = '/GEhighchart/veracsflail.csv';

var graph2 = abysswhip;

$(document).ready(function() {

  // Read data file and create a chart
  $.get(redph, function(csvString) {

    var data = Papa.parse(csvString).data;
    var nSeries = data[0].length - 2

    var annotationPoints = data
      .filter(function(x) {return x[nSeries+1] !== ""})
      .map(function(x) {
        return {
          point: {
            xAxis: 0,
            yAxis: 0,
            x: x[0],
            y: x[1]
          },
          text: x[nSeries+1]
        }
      })

    var series = []
    for (var i = 1; i <= nSeries; i++) {
      series.push({
        data: data.map(function(x) { return [parseFloat(x[0]), parseFloat(x[i])] }),
        name: data[0][i],
        marker: { enabled: false },
      })
    }

    // Now create the chart
    Highcharts.chart('graph', {

      chart: {
        type: 'line',
        zoomType: 'x',
        panning: true,
        panKey: 'shift',
        scrollablePlotArea: {
            minWidth: 400
        }
      },

      title: { text: TITLE },
      caption: { text: CAPTION },
      credits: { enabled: false },

      annotations: [{
        labelOptions: {
          backgroundColor: 'rgba(255,255,255,0.8)',
          verticalAlign: 'top',
          y: 10
        },
        labels: annotationPoints
      }],

      xAxis: {
        title: { text: X_AXIS },
      },

      yAxis: {
        startOnTick: true,
        min: BEGIN_AT_ZERO ? 0 : null,
        title: { text: Y_AXIS },
        labels: { formatter: function(x) {return x.value.toLocaleString()} }
      },

      legend: { enabled: SHOW_LEGEND },

      series: series,

    });

  });




  // Read data file and create a chart
  $.get(graph2, function(csvString) {

    var data = Papa.parse(csvString).data;
    var nSeries = data[0].length - 2

    var annotationPoints = data
      .filter(function(x) {return x[nSeries+1] !== ""})
      .map(function(x) {
        return {
          point: {
            xAxis: 0,
            yAxis: 0,
            x: x[0],
            y: x[1]
          },
          text: x[nSeries+1]
        }
      })

    var series = []
    for (var i = 1; i <= nSeries; i++) {
      series.push({
        data: data.map(function(x) { return [parseFloat(x[0]), parseFloat(x[i])] }),
        name: data[0][i],
        marker: { enabled: false },
      })
    }

    // Now create the chart
    Highcharts.chart('graph2', {

      chart: {
        type: 'line',
        zoomType: 'x',
        panning: true,
        panKey: 'shift',
        scrollablePlotArea: {
            minWidth: 400
        }
      },

      title: { text: TITLE2 },
      caption: { text: CAPTION2 },
      credits: { enabled: false },

      annotations: [{
        labelOptions: {
          backgroundColor: 'rgba(255,255,255,0.8)',
          verticalAlign: 'top',
          y: 10
        },
        labels: annotationPoints
      }],

      xAxis: {
        title: { text: X_AXIS2 },
      },

      yAxis: {
        startOnTick: true,
        min: BEGIN_AT_ZERO2 ? 0 : null,
        title: { text: Y_AXIS2 },
        labels: { formatter: function(x) {return x.value.toLocaleString()} }
      },

      legend: { enabled: SHOW_LEGEND2 },

      series: series,

    });

  });

});

function chngChart(para) {
  const elem = document.getElementById("graph2");
  var graph2 = "veracsflail";
};
