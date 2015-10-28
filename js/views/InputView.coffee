class window.InputView extends Backbone.View

  tagName: 'input'

  events: 'keydown': 'keyAction'

  initialize: ->
    @render()

  render: ->
    @resetInput()
    @

  keyAction: (e) ->

    isEnterKey = (e.which is 13)

    if (isEnterKey and !@$el.val().trim().match(/^(?=.*[0-9].*)[0-9]{5}$/))
      @$el.attr "placeholder":"Sorry, zip code invalid."
      @clearInput()
      @

    else if (isEnterKey)
      @collection.addWeatherEntry @$el.val()
      @resetInput()
      @

  resetInput: ->
    @$el.attr "placeholder": "Enter a zip code"
    @clearInput()

  clearInput: ->
    console.log "trying to clear"
    @$el.val('')
