// this is the main.js in the scripts folder.
$(document).ready(function() {
    $(".button-collapse").sideNav();
    $('.parallax').parallax();
    $('.collapsible').collapsible();

<<<<<<< HEAD

// Nav Scroll Logic
//==================================
=======
  // Nav Scroll Logic
  //==================================
>>>>>>> c1f114b99d9bc539a09bd1a2427db0957d134951
  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
     $('.counter').html(scrollTop);
    
    if (scrollTop >= 100) {
      $("#global-nav").addClass("scrolled-nav");
    } else if (scrollTop < 100) {
      $("#global-nav").removeClass("scrolled-nav");
    }   
  }); 


// Gauge Logic
//==================================
  
<<<<<<< HEAD
  var gaugeOptions = {
=======
    var gaugeOptions = {

>>>>>>> c1f114b99d9bc539a09bd1a2427db0957d134951
      chart: {
          type: 'solidgauge'
      },

      title: null,

      pane: {
          center: ['50%', '85%'],
          size: '140%',
          startAngle: -90,
          endAngle: 90,
          background: {
              backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
              innerRadius: '60%',
              outerRadius: '100%',
              shape: 'arc'
          }
      },

      tooltip: {
          enabled: false
      },

      // the value axis
      yAxis: {
          stops: [
              [0.1, '#55BF3B'], // green
              [0.5, '#DDDF0D'], // yellow
              [0.9, '#DF5353'] // red
          ],
          lineWidth: 0,
          minorTickInterval: null,
          tickAmount: 2,
          title: {
              y: -70
          },
          labels: {
              y: 16
          }
      },

      plotOptions: {
          solidgauge: {
              dataLabels: {
                  y: 5,
                  borderWidth: 0,
                  useHTML: true
              }
          }
      }
    };

<<<<<<< HEAD

  // The speed gauge
  var chartSpeed = Highcharts.chart('container-speed', Highcharts.merge(gaugeOptions, {
=======
    var chartSpeed = Highcharts.chart('container-speed', Highcharts.merge(gaugeOptions, {
>>>>>>> c1f114b99d9bc539a09bd1a2427db0957d134951
      yAxis: {
          min: 0,
          max: 300,
          title: {
              text: 'kWH'
          }
      },

      credits: {
          enabled: false
      },

      series: [{
<<<<<<< HEAD
          name: 'Building kWH',
          data: [80],
=======
          name: 'Speed',
          data: [0],
>>>>>>> c1f114b99d9bc539a09bd1a2427db0957d134951
          dataLabels: {
              format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                  ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                     '<span style="font-size:12px;color:silver">kWH</span></div>'
          },
          tooltip: {
              valueSuffix: ' kWH'
          }
      }]

    }));

<<<<<<< HEAD

  // The RPM gauge
  var chartRpm = Highcharts.chart('container-rpm', Highcharts.merge(gaugeOptions, {
=======
    var chartRpm = Highcharts.chart('container-rpm', Highcharts.merge(gaugeOptions, {
>>>>>>> c1f114b99d9bc539a09bd1a2427db0957d134951
      yAxis: {
          min: 0,
          max: 300,
          title: {
              text: 'kBTU'
          }
      },

      series: [{
<<<<<<< HEAD
          name: 'Building kBTU',
          data: [1],
=======
          name: 'RPM',
          data: [0],
>>>>>>> c1f114b99d9bc539a09bd1a2427db0957d134951
          dataLabels: {
              format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                  ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                     '<span style="font-size:12px;color:silver">kBTU</span></div>'
          },
          tooltip: {
              valueSuffix: ' kBTU'
          }
      }]

<<<<<<< HEAD
  }));


// Location or Building Submit Logic
//==================================
  function runQuery(value) {
    //take in the value and plug it into the google docs info.
  }

  var queryURL = "https://data.austintexas.gov/resource/5mvc-79r6.json" 
  function runQuery(facilityAddress){       
=======
    }));

    function runQuery(facilityAddress){
        var facAddress = facilityAddress;
        var queryURL = "https://data.austintexas.gov/resource/5mvc-79r6.json"; 

>>>>>>> c1f114b99d9bc539a09bd1a2427db0957d134951
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response){
            console.log("------------------------------------");
            console.log("URL: " + queryURL);
            console.log("------------------------------------");
            console.log(response);
            console.log("------------------------------------");
    
            for (var i=0; i<response.length; i++){
                if (response[i].facility_address === facilityAddress){
                    console.log(response[i]);
                    var kWHinc = response[i].calculated_eui_kwh_sqft;
                    console.log(kWHinc);
                    var kBTUinc = response[i].portfolio_manger_site_eui_kbtu_sqft;
                    console.log(kBTUinc);
    
                    function updateDialData(){
                        // var point,
                        //     kWHnewVal,
                        //     kBTUnewVal;
        
                        if (chartSpeed) {
                            point = chartSpeed.series[0].points[0];
                            console.log(point);
                            kWHnewVal = Math.floor(kWHinc);
                            console.log(kWHnewVal);

                            if (kWHnewVal < 0 || kWHnewVal > 300) {
                                kWHnewVal = 300;
                            }
        
                            point.update(kWHnewVal);
                        }
        
                        if (chartRpm) {
                            point = chartRpm.series[0].points[0];
                            console.log(point);
                            kBTUnewVal = Math.floor(kBTUinc);
                            console.log(kBTUnewVal);
        
                            if (kBTUnewVal < 0 || kBTUnewVal > 300) {
                                kBTUnewVal = 300;
                            }
        
                            point.update(kBTUnewVal);
                        }
                    }; 
                    updateDialData(response[i].portfolio_manager_energy_star_score);
                    $("#profManScore").text(response[i].portfolio_manager_energy_star_score); 
                    
                }
<<<<<<< HEAD
            };
  
            // Bring life to the dials
            setInterval(function (response) {      
                var point, // Speed
                    newVal,
                    inc;

                if (chartSpeed) {
                    point = chartSpeed.series[0].points[0];
                    inc = Math.round((Math.random() - 0.5) * 100);
                    newVal = point.y + inc;

                    if (newVal < 0 || newVal > 300) {
                        newVal = point.y - inc;
                    };
                    point.update(newVal);
                }

                if (chartRpm) { // RPM
                    point = chartRpm.series[0].points[0];
                    inc = Math.round((Math.random() - 0.5) * 100);
                    newVal = point.y + inc;

                    if (newVal < 0 || newVal > 300) {
                        newVal = point.y - inc;
                    };

                    point.update(newVal);
                }
            }, 2000);
=======
                    
                
            }
>>>>>>> c1f114b99d9bc539a09bd1a2427db0957d134951

            function renderMetrics(facAddress){
                $("#metricsView").empty();
                $.ajax({
                    url: "/data",
                    dataType: "json",
                    method: "GET"
                }).done(function(bldgdata){
<<<<<<< HEAD
                    for(var i=0; i<bldgdata.length; i++) {
                      if (facility_address === facAddress) {
                        console.log(bldgdata[i]);
                        // var metricsUl = $("<ul class='list-group list-group-flush'>");
                        // var metricsLi = $("<li class='list-group-item'>json[i]</li>")
                        // metricsUl.append(metricsLi);
                      }
                    }
                });      
            }
            renderMetrics(facilityAddress);        
        }) //end of .done
      }//end of run query function
      
}); //end of document.ready "file"
=======
                    console.log(bldgdata);
                    for(var i=0; i<bldgdata.length; i++)
                    if (bldgdata[i].facility_address === facAddress)
                    console.log(bldgdata[i].facility_address);
                    // var metricsUl = $("<ul class='list-group list-group-flush'>");
                    // var metricsLi = $("<li class='list-group-item'>json[i]</li>")
                    // metricsUl.append(metricsLi);
                })
                
            }
            renderMetrics();
        }) 

    };

    $('#searchButton').click(function(){
        runQuery($('#search-field').val());
        console.log($('#search-field').val());
    });
//   runQuery();
});
//"3311 ESPERANZA CROSSING, AUSTIN TX, 78758"
>>>>>>> c1f114b99d9bc539a09bd1a2427db0957d134951
