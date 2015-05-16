var Weathers = Backbone.Collection.extend({

  model: Weather,

  addWeather: function(zipcode) {
    this.add(new Weather({
      zipcode: zipcode
    }));
  }

});
