$(window).resize(function(){
  drawChart();
}); 

// Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'EntityType');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Events', 43],
          ['Places', 33],
          ['Transports', 24]
        ]);

        // Set chart options
        parentWidth = $('#left-container').width();
        legendPos = 'right';
        var options = {'width':parentWidth,
                       'height':200,
                        'legend': legendPos
                      };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }   