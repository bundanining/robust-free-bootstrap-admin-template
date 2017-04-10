/*=========================================================================================
    File Name: bar-stacked.js
    Description: Chartjs bar stacked chart
    ----------------------------------------------------------------------------------------
    Item Name: Robust - Responsive Admin Theme
    Version: 1.2
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

// Bar stacked chart
// ------------------------------
$(window).on("load", function(){

    // Get the context of the Chart canvas element we want to select
    var ctx = $("#bar-stacked");

    // Chart Options
    var chartOptions = {
        title:{
            display:false,
            text:"Chart.js Bar Chart - Stacked"
        },
        tooltips: {
            mode: 'label'
        },
        responsive: true,
        maintainAspectRatio: false,
        responsiveAnimationDuration:500,
        scales: {
            xAxes: [{
                stacked: true,
                display: true,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: true,
                }
            }],
            yAxes: [{
                stacked: true,
                display: true,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: true,
                }
            }]
        }
    };

    // Chart Data
    var chartData = {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [{
            label: "My First dataset",
            data: [65, 59, 80, 81, 56],
            backgroundColor: "#00BFA5",
            hoverBackgroundColor: "rgba(0,191,165,.8)",
            borderColor: "transparent"
        }, {
            label: "My Second dataset",
            data: [28, 48, 40, 19, 86],
            backgroundColor: "#1DE9B6",
            hoverBackgroundColor: "rgba(29,233,182,.8)",
            borderColor: "transparent"
        },
        {
            label: "My Third dataset",
            data: [80, 25, 16, 36, 67],
            backgroundColor: "#64FFDA",
            hoverBackgroundColor: "rgba(100,255,218,.8)",
            borderColor: "transparent"
        }]
    };

    var config = {
        type: 'horizontalBar',

        // Chart Options
        options : chartOptions,

        data : chartData
    };

    // Create the chart
    var lineChart = new Chart(ctx, config);

});