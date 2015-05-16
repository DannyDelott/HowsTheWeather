var ListView = Backbone.View.extend({
  id: 'cities-container',

  initialize: function() {
    this.render();
    this.collection.on('add', this.makeNewEntry, this);
  },

  render: function() {

    // add this view to the container element
    $('#container').append(this.el);
  },

  makeNewEntry: function() {

    console.log('make a new view');

  }
});
