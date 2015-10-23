var WeatherEntry = Backbone.Model.extend({

  defaults: {
    zipcode: '',
    city: '',
    weather: '',
    unit: '°F'
  },

  initialize: function() {},

  toggleUnit: function() {

    var isImperial = this.get('unit') === '°F';

    if (isImperial) {
      var celsius = (this.get('weather') - 32) * (5 / 9);
      this.set({
        'unit': '°C',
        'weather': celsius.toFixed(2)
      });
    }
    else {
      var fahrenheit = (this.get('weather') / (5 / 9)) + 32;
      this.set({
        'unit': '°F',
        'weather': fahrenheit.toFixed(2)
      });
    }

  }

});
