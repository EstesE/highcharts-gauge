import { set } from '@ember/object';
import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
  dynamicChart: inject('dynamic-chart'),

  chartOptions: null,
  chartData: null,

  init() {
    this._super(...arguments);
    let controller = this;

    let chartOptions = {
      chart: {
        type: 'solidgauge'
      },
      title: {
        text: 'Some Title',
        style: {
          color: '#009dff',
          fontWeight: 'bold'
        }
      },
      subtitle: {
        text: 'Hmm'
      },
      pane: {
        center: ['50%', '85%'],
        size: '140%',
        startAngle: -90,
        endAngle: 90,
        background: {
          backGroundColor: '#eee',
          innerRadius: '60%',
          outerRadius: '100%',
          shape: 'arc'
        }
      },
      tooltip: {
        enabled: false
      },
      yAxis: {
        min: 0,
        max: 200,
        stops: [
          [0.1, '#55bf3b'],
          [0.5, '#dddf0d'],
          [0.9, '#df5353']
        ],
        lineWidth: 0,
        minorTickInterval: null,
        tickPixelInterval: 400,
        tickWidth: 0,
        title: {
          y: -160,
          text: 'Speed'
        },
        labels: {
          y: 30
        }
      },
      plotOptions: {
        solidgauge: {
          dataLabels: {
            y: -100,
            borderWidth: 0,
            useHTML: true,
            style: {
              'fontSize': '50px',
              'text-align': 'center'
            },
            format: `<div style="text-align: center;"><p style="line-height: 0.6;">{y:.1f}<br/>
              <span style="font-size:19px;color:silver">mph</span></p></div>`
          }
        }
      }
    };
    set(controller, 'chartOptions', chartOptions);
  
    let chartData = [
      {
        name: 'Speed',
        data: [60],
        dataLabels: {
          format: '<div style="text-align:center;"><span style="font-size:25px;color:' +
            ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
            '<span style="font-size:12px;color:silver">km/h</span></div>'
        },
        tooltip: {
          valueSuffix: 'mph'
        }
      }
    ];
    set(controller, 'chartData', chartData);

    // Update value every five seconds.
    setInterval(function () {
      let randomNum = parseInt(Math.random() * 201);
      let data = [{ data: [randomNum], name: 'Speed' }];
      set(controller, 'chartData', data);
    }, 5000);
  },

  actions: {
    updateData() {
      let randomNum = parseInt(Math.random() * 201);
      let data = [{ data: [randomNum], name: 'Speed' }];
      set(this, 'chartData', data);
    },

    clearData() {
      let data = [{ data: [0], name: 'Speed' }];
      set(this, 'chartData', data);
    }
  }
});
