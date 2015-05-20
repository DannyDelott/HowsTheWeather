var ListView = Backbone.View.extend({

  id: 'list',

  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'add', this.refreshList);
    //this.collection.on('add', this.refreshList, this);
  },

  render: function() {
    $('#content').append(this.el);
  },

  refreshList: function() {

    this.$el.empty();

    var entries = this.collection.models.map(function(model) {
      return new EntryView({
        model: model
      });
    });

    this.$el.append(entries);

  }

});
