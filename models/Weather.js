var Weather = Backbone.Model.extend({

  defaults: {
    zipcode: 'Enter your zip code',
    city: '',
    weather: ''
  },

  initialize: function() {

    // set listeners for changes to the model data
    this.on('change:zipcode', this.getData, this);
  },

  getData: function() {

    // access the open weather api and update model properties
    $.get(
      'http://api.openweathermap.org/data/2.5/weather?zip=' + this.get('zipcode') + ',us&units=imperial',
      function(data) {

        // update model properties
        this.set('city', data.name);
        this.set('weather', data.main.temp + ' °F');

        // trigger the changeTitle event on views who are listening for it.
        this.trigger('changeTitle');

      }.bind(this)
    );

  }
});
