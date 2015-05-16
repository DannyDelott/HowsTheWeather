var TitleView = Backbone.View.extend({

  el: '#content',

  template: _.template('<h1><%= pageTitle %></h1>'),

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template({
      pageTitle: 'How\'s the weather?'
    }));
  }

});
