var Weathers = Backbone.Collection.extend({

  model: Weather,

  addWeather: function(zipcode) {

    this.getData(
      zipcode,
      function(data) {
        this.add(new Weather({
          zipcode: zipcode,
          city: data.name,
          weather: data.main.temp + '°F'
        }));
      }.bind(this)
    );

  },

  getData: function(zipcode, callback) {

    $.get(
      'http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&units=imperial',
      function(data) {
        callback(data);
      }.bind(this)
    );
  }

});
