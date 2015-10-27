class window.EntryView extends Backbone.View

  className: 'entry'

  template: _.template '<p>It is currently <%= weather %><%= unit %> in <%= city %>.</p>'

  events: 'click' : 'clickAction'

  initialize: ->
    @listenTo @model, 'change', @render
    @render()

  render: ->

    entry = @template 
      weather: @model.get 'weather'
      unit: @model.get 'unit'
      city: @model.get 'city'

    @$el.html entry

  clickAction: ->
    @model.toggleUnit()

