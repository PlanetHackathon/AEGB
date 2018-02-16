// This is the bldgAwnsController
var express = require("express");

var router = express.Router();

// Add the API calls here
var facilityAddress = ""; 
var queryURLBase = "https://data.austintexas.gov/resource/5mvc-79r6.json" 

function runQuery(queryURL){
  $.ajax({
      url: queryURL,
      method: "GET"
  }).done(function(aegbData){
    console.log("------------------------------------");
    console.log("URL: " + queryURL);
    console.log("------------------------------------");
    console.log(aegbData);
    console.log("------------------------------------");

    for (var i=0; i<aegbData.length; i++){
        if (aegbData[i].facility_address === facilityAddress){

        }
    }
  })    
}
// Export routes for server.js to use.
module.exports = router;