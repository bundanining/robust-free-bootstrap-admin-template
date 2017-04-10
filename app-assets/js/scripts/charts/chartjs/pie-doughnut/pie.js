/*=========================================================================================
    File Name: pie.js
    Description: Chartjs pie chart
    ----------------------------------------------------------------------------------------
    Item Name: Robust - Responsive Admin Theme
    Version: 1.2
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

// Pie chart
// ------------------------------
$(window).on("load", function(){

    //Get the context of the Chart canvas element we want to select
    var ctx = $("#pie-chart");

    // Chart Options
    var chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        responsiveAnimationDuration:500,
    };

    // Chart Data
    var chartData = {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [{
            label: "My First dataset",
            data: [65, 59, 80, 81, 56],
            backgroundColor: ["#99B898","#FECEA8","#FF847C","#E84A5F","#2A363B"],
        }, {
            label: "My Second dataset",
            data: [28, 48, 40, 19, 86],
            backgroundColor: ["#99B898","#FECEA8","#FF847C","#E84A5F","#2A363B"],
        }, {
            label: "My Third dataset - No bezier",
            data: [45, 25, 16, 36, 67],
            backgroundColor: ["#99B898","#FECEA8","#FF847C","#E84A5F","#2A363B"],
        }, {
            label: "My Fourth dataset",
            data: [17, 62, 78, 88, 26],
            backgroundColor: ["#99B898","#FECEA8","#FF847C","#E84A5F","#2A363B"],
        }]
    };

    var config = {
        type: 'pie',

        // Chart Options
        options : chartOptions,

        data : chartData
    };

    // Create the chart
    var pieChart = new Chart(ctx, config);
});