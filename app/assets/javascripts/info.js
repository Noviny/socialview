var time = []; // System time
var likes = []; // Total Likes
var comments = []; // Total Comments
var convertedTime = []; // Human time

// Function to push data from var globalData into individula variables in array form so we can use them with chart.js
// This function also calls the timeConvert function to convert the unix time to Human time
var loopData = function (globalInfo){
  _.each(globalInfo, function(value){
    console.log("Chart Data ready to fucking rock!");
    time.push(value.created_time);
    likes.push(value.likes.count);
    comments.push(value.comments.count);
  });
  timeConvert(time);
  console.log("The chart time has been converted FUCKER!")
}

// Function to convert system time into human time for the chart
var timeConvert = function(time){
  for (var i = 0; i < time.length; i++) {
    var currentTime = Math.floor( time[i] );
    currentTime = moment.unix( currentTime ).format('h:mm:ss:ms');
    convertedTime.push( currentTime );
  };
};