var time = []; // System time
var likes = []; // Total Likes
var comments = []; // Total Comments
var convertedTime = []; // Human time

// Function to push data from var globalData into individula variables in array form so we can use them with chart.js
// This function also calls the timeConvert function to convert the unix time to Human time
var loopData = function (globalInfo){
    chartClear();
  _.each(globalInfo, function(value){

    time.push(value.created_time);
    likes.push(value.likes.count);
    comments.push(value.comments.count);

  });

  chartData.datasets[0].data = likes;
  timeConvert(time);
  chartData.labels = convertedTime.reverse();

  console.log("The chart time has been converted");
}

// Function to convert system time into human time for the chart
var timeConvert = function(time){
  for (var i = 0; i < time.length; i++){
    var currentTime = Math.floor(time[i]);
    currentTime = moment.unix(currentTime).format('h:mm');
    convertedTime.push(currentTime);
  };
};

var chartLoad = function(){
  var loadedChart;
  $('#chart').remove();
  $('#chartholder').append('<canvas id="chart" width="1000" height="400"></canvas>');
  var chart = document.getElementById('chart').getContext('2d');
      new Chart(chart).Line(chartData);
      console.log("chart is being loaded");
}

var chartData = {
    labels: [],
    datasets: [
        {
            label: "Likes dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,0.5)",
            pointColor: "rgba(220,220,220,0.5)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#0465b0",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: []
        },
    ]
};


var chartClear = function(){
  console.log("chart has been cleared");
  time = []; // System time
  likes = []; // Total Likes
  comments = []; // Total Comments
  convertedTime = []; // Human time
  chartData.datasets[0].data = []; // Loaded likes
  chartData.labels = []; // loaded converted time
}