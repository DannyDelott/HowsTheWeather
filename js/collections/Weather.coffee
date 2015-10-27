class window.Weather extends Backbone.Collection
  
  model: WeatherEntry

  addWeatherEntry: (zipcode) ->

    that = @

    $.get 'http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&units=imperial&APPID=5c680e5d8c8f29befb9f1c239dfae90b',
      (data) ->
        that.add(
          zipcode: zipcode,
          city: data.name,
          weather: data.main.temp.toFixed(2)
        )
