var AppView = Backbone.View.extend({

  id: 'container',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html('<div id="content"></div>');
    $('body').append(this.el);
  }

});
