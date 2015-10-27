class window.TitleView extends Backbone.View

  el: '<h1>'

  initialize: ->
    @render()

  render: ->
    @$el.text('How\'s the weather?');
    @
