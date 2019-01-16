import { observer } from '@ember/object';
import EmberHighChartsComponent from 'ember-highcharts/components/high-charts';

export default EmberHighChartsComponent.extend({

  // Use 'observer' or 'didUpdateAttrs'???

  contentDidChange: observer('content.@each.isLoaded', function() {
    // let chart = this.get('chart');
    // if (chart) {
    //   // console.log(chart);
    //   chart.setTitle({ text: `Updated title to ${this.content[0].data[0]}`});    // title
    //   chart.setTitle(null, { text: `New sub title ${this.content[0].data[0]}`}); // subTitle
    //   chart.redraw();

    //   // Someone else's example
    //   // when re-rendered update the chart subtitle and series name
    //   // var repo = this.get('content')[0].name;
    //   // chart.series[0].update({ name: repo, data: this.get('content')[0].data }, false);
    //   // chart.setTitle(null, { text: 'Repo: ' + repo }, false);
    //   // chart.redraw();
    // }
  }),

  didUpdateAttrs() {
    let chart = this.get('chart');
    if (chart) {
      // console.log(chart);
      chart.setTitle({ text: `Updated title to ${this.content[0].data[0]}`});    // title
      chart.setTitle(null, { text: `New sub title ${this.content[0].data[0]}`}); // subTitle
      chart.redraw();
    }
  },

  didRender() {
    // console.log(`Did render`);
  },

  init() {
    this._super(...arguments);
  }

});