import Component from '@ember/component';
import { inject } from '@ember/service';
import { get, set } from '@ember/object';

export default Component.extend({
  dynamicChart: inject('dynamic-chart'),

  chartOptions: {
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
  },

  chartData: [
    {
      name: 'Speed',
      data: [60],
      tooltip: {
        valueSuffix: 'mph'
      }
    }
  ],

  actions: {
    updateData() {
      debugger;
      let data = get(this.chartData[0], 'data'); //[80];
      let newChartData = this.get('dynamicChart').updateSeriesData(data, 0, 200);
      set(this.chartData[0], 'data', [newChartData[0][0]]);
    },

    setData(num) {
      debugger;
      let data = [0];
      set(this.chartData[0], 'data', data);
    }
  }

});