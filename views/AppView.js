var AppView = Backbone.View.extend({

  id: 'container',

  initialize: function(){
    this.render();
  },
  render: function(){
    $('body').append(this.el);
    return this;
  }
});
