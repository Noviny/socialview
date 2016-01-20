
// $(document).ready(function(){
//   console.log(moment("20111031", "YYYYMMDD").fromNow());
//   console.log("charInfo from info.js", document.chartInfo);
// });

// // Need to conver the system time

// // Need to add charts.js

// // Need to structure the data into the charts
           // console.log(chartInfo) // Uncomment later
// var miles = function(){
//   _.each(document.chartInfo, function(chart){
//       var filtered = chart.filter(function(value, key){
//         if(key > 5){
//           if (value === 0){
//             value = 1; // IF YOU FUCKING TOUCH THIS I WILL RIP YOUR FUCKING FACE OFF AND CONSOLE.LOG IT.
//           }
//           return value;
//         }
//       });
//     // console.log(filtered); // uncomment later
//   });
// };

global



var time = []; //system time
var likes = [];
var comments = [];
var convertedTime = []; // human time

// setTimeout(function(){
var loopData = function (chartInfo) {
  chartInfo.forEach(function(chart){
    console.log("loop running");
    console.log( chart[8] );
    // time.push(chart.created_time);
    // likes.push(chart.likes.count);
    console.log(chart);
    // comments.push(chart.comments.count);
  });
}


$(document).ready(function(){

// document.chartInfo.forEach(function(chart){
//   console.log("loop running");
//   time.push(chart.created_time);
//   likes.push(chart.likes.count);
//   comments.push(chart.comments.count);
// });


var timeConvert = function(time){
  for (var i = 0; i < time.length; i++) {
    var time = parseInt( time[i] );
    time = moment.unix(time).format('h:mm:ss:ms');

    convertedTime.push( time );
  };
};

timeConvert(time);

console.log("this is the converted time", convertedTime, "This is the likes", likes, "This is the comments", comments);

});



// }, 8000);