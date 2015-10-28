class window.WeatherEntry extends Backbone.Model

  defaults:
    zipcode: '',
    city: '',
    weather: '',
    unit: '°F'

  initialize: ->

  toggleUnit: ->

    isImperial = @get('unit') is '°F'

    if isImperial
      celsius = ( @get('weather') - 32) * ( 5 / 9)
      @set 'unit': '°C', 'weather': celsius.toFixed 2
    else
      fahrenheit = ( @get('weather') / (5 / 9)) + 32
      @set 'unit': '°F', 'weather': fahrenheit.toFixed 2
