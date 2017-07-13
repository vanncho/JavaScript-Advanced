var app = function () {
    var initPackageChart = function () {
        if (google.charts !== undefined) {
            google.charts.load("current", {packages: ["corechart"]});
            google.charts.setOnLoadCallback(drawChart);
        }
    };

    var drawChart = function () {
        //google.charts.load('current', {'packages':['corechart']});
        var data = google.visualization.arrayToDataTable(window.versionChart);

        // var options = {
        //     legend: 'none',
        //     pieSliceText: 'label',
        //     pieStartAngle: 100,
        //     pieHole: 0.4,
        //     sliceVisibilityThreshold: .05,
        //     chartArea: {
        //         width: '80%', height: '80%'
        //     }
        // };
        //var chart = new google.visualization.PieChart(document.getElementById('package-versions-chart'));
        // TODO: maybe later - make this chart as picture with alt!!!
        var chart = new google.visualization.AreaChart(document.getElementById('package-versions-chart'));

        var options = {
//            title: 'Company Performance',
            curveType: 'function',
            legend: {position: 'bottom'},
            chartArea: {
                width: '100%', height: '60%'
            }
        };
        chart.draw(data, options);

    };

    var setTooltip = function (btn, message) {
        $(btn).tooltip('hide')
            .attr('data-original-title', message)
            .tooltip('show');
    };

    var hideTooltip = function (btn) {
        setTimeout(function () {
            $(btn).tooltip('hide');
        }, 1000);
    };

    var searchAjax = null;

    var init = function () {

        $('#searchform-search').typeahead({
                hint: true,
                highlight: true,
                minLength: 1
            },
            {
                name: 'search',
                display: 'name',
                templates: {
                    suggestion: function (data) {
                        return $('<a href="' + data.url + '"><img src="/images/sources/16/' + data.source_id + '.png"> ' + data.name + '</a>');// value.name;//'{{value.name}}';// + value.name + '}}';
                        //Handlebars.compile('<div><strong>{{value}}</strong> – {{year}}</div>')
                    }
                },
                source: function (q, sync, async) {
                    if (searchAjax != null)
                        searchAjax.abort();

                    searchAjax = $.ajax({
                        method: "GET",
                        url: "/site/ajax-search",
                        data: {
                            search: q
                        },
                        dataType: 'json',
                        success: function (data) {
                            //  alert('ok');
                            console.log("like me");
                            //console.log(data);
                            //console.log(cb);
                            async(data);
                            //async(['each', 'item']);
                            // $.each(data, function (index, value) {
                            //     console.log(value.name);
                            //     db()
                            //     cb(value.name);
                            // });
                        }
                    });
                }
            });
    };

    var initPackage = function () {
        initPackageChart();
        $(function () {
            $('[data-toggle="tooltip"]').tooltip({
                'container': 'body',
                'trigger': 'manual'
                //'delay': { "show": 500, "hide": 1000}
            });
            // manual?
        });

        var clipboard = new Clipboard('.example-copy');

        clipboard.on('success', function (e) {
            // console.info('Action:', e.action);
            //console.info('Text:', e.text);
            //console.info('Trigger:', e.trigger);
            setTooltip(e.trigger, 'Copied');
            hideTooltip(e.trigger);
            // $('[data-toggle="tooltip"]').tooltip('hide');
            // $('[data-toggle="tooltip"]').tooltip({
            //     'title': 'Copied',
            //     'container': 'body',
            //     'hide': 500
            // });
            // $('[data-toggle="tooltip"]').tooltip('show');
            //e.clearSelection();
        });

        clipboard.on('error', function (e) {
            //console.error('Action:', e.action);
            //console.error('Trigger:', e.trigger);
            setTooltip(e.trigger, 'Fail');
            hideTooltip(e.trigger);
        });
        /*
         $('.example-copy').on('click', function () {
         console.log("ttt");
         var forId = $(this).data('for');

         //var copyTextarea = document.querySelector('.js-copytextarea');
         $('#'+forId).select();
         try {
         var successful = document.execCommand('copy');
         var msg = successful ? 'successful' : 'unsuccessful';
         console.log('Copying text command was ' + msg);
         } catch (err) {
         console.log('Oops, unable to copy');
         }
         });*/
    };

    return {
        initPackage: initPackage,
        init: init
    }
}();


$(document).ready(function () {
    app.init();
    app.initPackage();
});