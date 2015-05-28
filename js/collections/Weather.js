var Weather = Backbone.Collection.extend({

  model: WeatherEntry,

  addWeatherEntry: function(zipcode) {

    $.get(
      'http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&units=imperial',
      function(data) {
        this.add(
          new WeatherEntry({
            zipcode: zipcode,
            city: data.name,
            weather: data.main.temp + '°F'
          })
        );
      }.bind(this)
    );
  }

});
