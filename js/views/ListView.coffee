class window.ListView extends Backbone.View

  id: 'list'

  initialize: ->
    @collection.on 'add', => 
      @render()
    @render()

  render: ->
    @$el.empty()

    console.log "trying to render the list"

    @entries = @collection.models.map (model) =>
      # console.log model
      new EntryView({model: model})

    $els = @entries.map (entry) ->
      console.log entry
      entry.$el

    @$el.append $els

    @
      
