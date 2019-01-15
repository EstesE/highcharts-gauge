import { copy } from 'ember-copy';
import Service from '@ember/service';

export default Service.extend({

  getRandomInt(min, max) {
    // debugger;
    return parseInt(Math.random() * 200);
  },

  updateSeriesData(chartData, rangeStart, rangeEnd) {
    // debugger;
    let numPoints = this.getRandomInt(rangeStart, rangeEnd);
    return chartData.map((series) => {
      // debugger;
      return [numPoints];
    });
    // return chartData.map((series) => {
    //   return {
    //     name: series.name,
    //     data: series.data.slice(0, numPoints)
    //   };
    // });
  },

  updateSeriesCount(chartData, numSeries) {
    // debugger;
    let chartDataCopy = copy(chartData, true);
    return chartDataCopy.slice(0, numSeries);
  }
});
