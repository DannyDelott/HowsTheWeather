var AppView = Backbone.View.extend({

  el: 'body',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html('<div id="container"><div id="content"></div></div>');
  }

});
