/*=========================================================================================
    File Name: interactive-pie.js
    Description: Flot interactive pie chart
    ----------------------------------------------------------------------------------------
    Item Name: Robust - Responsive Admin Theme
    Version: 1.2
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

// Interactive pie chart
// ------------------------------
$(window).on("load", function(){

    var options = {
        series: {
            pie: {
                show: true
            }
        },
        grid: {
            hoverable: true,
            clickable: true
        },
        colors: ['#99B898', '#FECEA8', '#FF847C', '#E84A5F', '#2A363B', '#6C5B7B']
    };

    var data = [
        { label: "Series1",  data: 50},
        { label: "Series2",  data: 70},
        { label: "Series3",  data: 60},
        { label: "Series4",  data: 90},
        { label: "Series5",  data: 80},
        { label: "Series6",  data: 110}
    ];

    var placeholder = $("#interactive-pie-chart");

    $.plot(placeholder, data, options);

    placeholder.bind("plothover", function(event, pos, obj) {

        if (!obj) {
            return;
        }

        var percent = parseFloat(obj.series.percent).toFixed(2);
        $("#hover").html("<span style='font-weight:bold; color:" + obj.series.color + "'>" + obj.series.label + " (" + percent + "%)</span>");
    });

    placeholder.bind("plotclick", function(event, pos, obj) {

        if (!obj) {
            return;
        }

        percent = parseFloat(obj.series.percent).toFixed(2);
        alert(""  + obj.series.label + ": " + percent + "%");
    });
});