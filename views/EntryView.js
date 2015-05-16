var EntryView = Backbone.View.extend({

  el: '#cities-container',

  template: _.template('<div class="city">It is currently <%= weather %> in <%= city %>.</div>'),

  initialize: function() {
    this.render();
  },

  render: function() {

    // render the template inside the parent DOM element
    this.$el.append(this.template({
      weather: this.model.get('weather'),
      city: this.model.get('city')
    }));

  }
});
