/*=========================================================================================
    File Name: advance-cards.js
    Description: intialize advance cards
    ----------------------------------------------------------------------------------------
    Item Name: Robust - Responsive Admin Theme
    Version: 1.2
    Author: GeeksLabs
    Author URL: http://www.themeforest.net/user/geekslabs
==========================================================================================*/
(function(window, document, $) {
    'use strict';

    /****************************************************
    *               Employee Satisfaction               *
    ****************************************************/
    //Get the context of the Chart canvas element we want to select
    var ctx1 = document.getElementById("emp-satisfaction").getContext("2d");

    // Create Linear Gradient
    var white_gradient = ctx1.createLinearGradient(0, 0, 0,400);
    white_gradient.addColorStop(0, 'rgba(255,255,255,0.5)');
    white_gradient.addColorStop(1, 'rgba(255,255,255,0)');

    // Chart Options
    var empSatOptions = {
        responsive: true,
        maintainAspectRatio: false,
        datasetStrokeWidth : 3,
        pointDotStrokeWidth : 4,
        tooltipFillColor: "rgba(0,0,0,0.8)",
        legend: {
            display: false,
        },
        hover: {
            mode: 'label'
        },
        scales: {
            xAxes: [{
                display: false,
            }],
            yAxes: [{
                display: false,
                ticks: {
                    min: 0,
                    max: 85
                },
            }]
        },
        title: {
            display: false,
            fontColor: "#FFF",
            fullWidth: false,
            fontSize: 40,
            text: '82%'
        }
    };

    // Chart Data
    var empSatData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "Employees",
            data: [28, 35, 36, 48, 46, 42, 60],
            backgroundColor: white_gradient,
            borderColor: "rgba(255,255,255,1)",
            borderWidth: 2,
            strokeColor : "#ff6c23",
            pointColor : "#fff",
            pointBorderColor: "rgba(255,255,255,1)",
            pointBackgroundColor: "#3BAFDA",
            pointBorderWidth: 2,
            pointHoverBorderWidth: 2,
            pointRadius: 5,
        }]
    };

    var empSatconfig = {
        type: 'line',

        // Chart Options
        options : empSatOptions,

        // Chart Data
        data : empSatData
    };

    // Create the chart
    var areaChart = new Chart(ctx1, empSatconfig);



    /***********************************************************
    *               New User - Page Visist Stats               *
    ***********************************************************/
    //Get the context of the Chart canvas element we want to select
    var ctx2 = document.getElementById("line-stacked-area").getContext("2d");

    // Chart Options
    var userPageVisitOptions = {
        responsive: true,
        maintainAspectRatio: false,
        pointDotStrokeWidth : 4,
        legend: {
            display: false,
            labels: {
                fontColor: '#FFF',
                boxWidth: 10,
            },
            position: 'top',
        },
        hover: {
            mode: 'label'
        },
        scales: {
            xAxes: [{
                display: false,
            }],
            yAxes: [{
                display: true,
                gridLines: {
                    color: "rgba(255,255,255, 0.3)",
                    drawTicks: false,
                    drawBorder: false
                },
                ticks: {
                    display: false,
                    min: 0,
                    max: 70,
                    maxTicksLimit: 4
                },
            }]
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart - Legend'
        },
    };

    // Chart Data
    var userPageVisitData = {
        labels: ["2010", "2011", "2012", "2013", "2014", "2015"],
        datasets: [{
            label: "iOS",
            data: [0, 10, 5, 26, 12, 20],
            backgroundColor: "#eeda54",
            borderColor: "#eeda54",
            pointBorderColor: "#eeda54",
            pointBackgroundColor: "#eeda54",
            pointRadius: 2,
            pointBorderWidth: 2,
            pointHoverBorderWidth: 2,
        },{
            label: "Windows",
            data: [0, 20, 20, 30, 26, 32],
            backgroundColor: "rgba(166,100,255,0.8)",
            borderColor: "transparent",
            pointBorderColor: "transparent",
            pointBackgroundColor: "transparent",
            pointRadius: 2,
            pointBorderWidth: 2,
            pointHoverBorderWidth: 2,
        }, {
            label: "Android",
            data: [0, 30, 15, 40, 38, 45],
            backgroundColor: "#40cae4",
            borderColor: "#40cae4",
            pointBorderColor: "#40cae4",
            pointBackgroundColor: "#40cae4",
            pointRadius: 2,
            pointBorderWidth: 2,
            pointHoverBorderWidth: 2,
        }]
    };

    var userPageVisitConfig = {
        type: 'line',

        // Chart Options
        options : userPageVisitOptions,

        // Chart Data
        data : userPageVisitData
    };

    // Create the chart
    var stackedAreaChart = new Chart(ctx2, userPageVisitConfig);


    /*********************************************
    *               Total Earnings               *
    **********************************************/
    //Get the context of the Chart canvas element we want to select
    var ctx3 = document.getElementById("earning-chart").getContext("2d");

    // Chart Options
    var earningOptions = {
        responsive: true,
        maintainAspectRatio: false,
        datasetStrokeWidth : 3,
        pointDotStrokeWidth : 4,
        tooltipFillColor: "rgba(0,0,0,0.8)",
        legend: {
            display: false,
            position: 'bottom',
        },
        hover: {
            mode: 'label'
        },
        scales: {
            xAxes: [{
                display: false,
            }],
            yAxes: [{
                display: false,
                ticks: {
                    min: 0,
                    max: 70
                },
            }]
        },
        title: {
            display: false,
            fontColor: "#FFF",
            fullWidth: false,
            fontSize: 40,
            text: '82%'
        }
    };

    // Chart Data
    var earningData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First dataset",
            data: [28, 35, 36, 48, 46, 42, 60],
            backgroundColor: 'rgba(45,149,191,0.1)',
            borderColor: "transparent",
            borderWidth: 0,
            strokeColor : "#ff6c23",
            capBezierPoints: true,
            pointColor : "#fff",
            pointBorderColor: "rgba(45,149,191,1)",
            pointBackgroundColor: "#FFF",
            pointBorderWidth: 2,
            pointRadius: 4,
        }]
    };

    var earningConfig = {
        type: 'line',

        // Chart Options
        options : earningOptions,

        // Chart Data
        data : earningData
    };

    // Create the chart
    var earningChart = new Chart(ctx3, earningConfig);


    /*************************************************
    *               Posts Visits Ratio               *
    *************************************************/
    //Get the context of the Chart canvas element we want to select
    var ctx4 = $("#posts-visits");

    // Chart Options
    var PostsVisitsOptions = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            position: 'top',
            labels: {
                boxWidth: 10,
                fontSize: 14
            },
        },
        hover: {
            mode: 'label'
        },
        scales: {
            xAxes: [{
                display: true,
                gridLines: {
                    lineWidth: 2,
                    color: "rgba(0, 0, 0, 0.05)",
                    zeroLineWidth: 2,
                    zeroLineColor: "rgba(0, 0, 0, 0.05)",
                    drawTicks: false,
                },
                ticks: {
                    fontSize: 14,
                }
            }],
            yAxes: [{
                display: false,
                ticks: {
                    min: 0,
                    max: 100
                }
            }]
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart - Legend'
        }
    };

    // Chart Data
    var postsVisitsData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
            label: "Visits",
            data: [32, 25, 45, 30, 60, 40, 72, 52, 80, 60, 92, 70],
            lineTension: 0,
            fill: false,
            // borderDash: [5, 5],
            borderColor: "#37BC9B",
            pointBorderColor: "#37BC9B",
            pointBackgroundColor: "#FFF",
            pointBorderWidth: 3,
            pointRadius: 6,
        }, {
            label: "Posts",
            data: [12, 10, 25, 15, 35, 22, 42, 28, 50, 32, 58, 28],
            lineTension: 0,
            fill: false,
            borderColor: "#967ADC",
            pointBorderColor: "#967ADC",
            pointBackgroundColor: "#FFF",
            pointBorderWidth: 3,
            pointRadius: 6,
        }]
    };

    var postsVisitsConfig = {
        type: 'line',

        // Chart Options
        options : PostsVisitsOptions,

        data : postsVisitsData
    };

    // Create the chart
    var postsVisitsChart = new Chart(ctx4, postsVisitsConfig);


    /****************************************************
    *               Yearly Revenue Comparision          *
    ****************************************************/
    //Get the context of the Chart canvas element we want to select
    var ctx6 = $("#revenue-comparision");

    // Chart Options
    var revenueComparisionOptions = {
        responsive: true,
        maintainAspectRatio: false,
        responsiveAnimationDuration:500,
        hoverMode: 'label',
        stacked: false,
        legend: {
            display: false,
            position: 'top',
        },
        title:{
            display:false,
            text:"Chart.js Bar Chart - Multi Axis"
        },
        scales: {
            xAxes: [{
                type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                display: true,
                position: "top",
                id: "x-axis-1",
                gridLines: {
                    color: 'rgba(255, 255, 255, 0.3)',
                    zeroLineColor: '#FFF'
                },
                ticks:{
                    fontColor: '#FFF',
                }
            }, {
                type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                display: true,
                position: "bottom",
                id: "x-axis-2",
                gridLines: {
                    color: 'rgba(255, 255, 255, 0.3)',
                    drawOnChartArea: false,
                    zeroLineColor: '#FFF'
                },
                ticks:{
                    fontColor: '#FFF',
                }
            }],
            yAxes:[{
                display: true,
                gridLines: {
                    color: 'rgba(255, 255, 255, 0.3)',
                    drawTicks: false,
                },
                ticks:{
                    fontColor: '#FFF',
                }
            }]
        }
    };

    // Chart Data
    var revenueComparisionData = {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [{
            label: "My First dataset",
            data: [45, -19, 34, 48, -56],
            backgroundColor: "#EFD864",
            // hoverBackgroundColor: "rgba(153,184,152,.8)",
            xAxisID: "x-axis-1",
        }, {
            label: "My Second dataset",
            data: [-28, 40, -28, -56, 48],
            backgroundColor: "#F37A21",
            // hoverBackgroundColor: "rgba(254,206,168,.8)",
            xAxisID: "x-axis-2",
        }]
    };

    var revenueComparisionConfig = {
        type: 'horizontalBar',

        // Chart Options
        options : revenueComparisionOptions,

        data : revenueComparisionData
    };

    // Create the chart
    var revenueComparisionChart = new Chart(ctx6, revenueComparisionConfig);


})(window, document, jQuery);