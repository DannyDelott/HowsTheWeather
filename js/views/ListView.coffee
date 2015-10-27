class window.ListView extends Backbone.View

  id: 'list'

  initialize: ->
    @listenTo @collection, 'add', @render()

  render: ->
    @$el.empty()

    @entries = @collection.models.map (model) ->
      console.log "model is:" + model
      new EntryView({model: model})

    $els = @entries.map (entry) ->
      entry.$el

    @$el.append $els

    @
      
