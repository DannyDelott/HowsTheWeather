class window.AppView extends Backbone.View

  el: '#app'

  initialize: ->
    @title = new TitleView()
    @input = new InputView(collection: @collection)
    @list = new ListView(collection: @collection)
    @render()

  render: ->
    @$el.append [@title.$el, @input.$el, @list.$el]
    @
