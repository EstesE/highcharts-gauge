import { observer } from '@ember/object';
import EmberHighChartsComponent from 'ember-highcharts/components/high-charts';

export default EmberHighChartsComponent.extend({

  // Use 'observer' or 'didUpdateAttrs'???

  // contentDidChange: observer('content.@each.isLoaded', function() {
  //   var chart = this.get('chart');
  //   console.log(chart);

  //   if (chart) {
  //     // when re-rendered update the chart subtitle and series name
  //     // var repo = this.get('content')[0].name;
  //     // chart.series[0].update({ name: repo, data: this.get('content')[0].data }, false);
  //     // chart.setTitle(null, { text: 'Repo: ' + repo }, false);
  //     chart.redraw();
  //   }

  // }),

  didUpdateAttrs() {
    console.log(`Did update attrs`);
    var chart = this.get('chart');
    if (chart) {
      chart.redraw();
    }
  },

  didRender() {
    console.log(`Did render`);
  },

  init() {
    this._super(...arguments);
  }

});