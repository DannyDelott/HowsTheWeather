var TitleView = Backbone.View.extend({

  el: '#container',

  template: _.template('<h1 id="page-title"><%= pageTitle %></h1>'),

  initialize: function() {
    this.render();
  },

  render: function() {

    this.$el.html(this.template({
      pageTitle: 'How\'s the weather?'
    }));

    return this;
  }

});
