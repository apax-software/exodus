require(['dojo/topic'], function(topic) {
  /*
   * Custom Javascript to be executed while the application is initializing goes here
   */

  // The application is ready
  topic.subscribe('tpl-ready', function() {
    /*
     * Custom Javascript to be executed when the application is ready goes here
     */

     setTimeout(()=> {
       var myChart = Highcharts.chart(app.data.sections[2]._medias[0]._domID, {
           chart: {
               type: 'bar'
           },
           title: {
               text: ''
           },
           xAxis: {
               categories: ['Apples', 'Bananas', 'Oranges']
           },
           yAxis: {
               title: {
                   text: 'Fruit eaten'
               }
           },
           series: [{
               name: 'Jane',
               data: [1, 0, 4]
           }, {
               name: 'John',
               data: [5, 7, 3]
           }]
       });
     }, 0);

    //console.log('Cascade is ready');
  });

  /*
   * Custom Javascript to be executed when a section becomes active
   */
  topic.subscribe('story-navigated-section', function(cfg) {
     console.log(cfg);
     if (cfg.index === 2) {
      console.log(cfg.data._blocks[3]._domID);
      setTimeout(()=> {
        var myChart = Highcharts.chart(app.data.sections[2]._medias[0]._domID, {
            chart: {
                type: 'bar'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: ['Apples', 'Bananas', 'Oranges']
            },
            yAxis: {
                title: {
                    text: 'Fruit eaten'
                }
            },
            series: [{
                name: 'Jane',
                data: [1, 0, 4]
            }, {
                name: 'John',
                data: [5, 7, 3]
            }]
        });
      }, 0);
     }
  });

});
