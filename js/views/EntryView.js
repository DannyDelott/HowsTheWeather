var EntryView = Backbone.View.extend({

  el: '#list',

  template: _.template('<div class="entry">It is currently <%= weather %> in <%= city %>.</div>'),

  initialize: function() {
    this.render();
  },

  render: function() {
    var entry = this.template({
      weather: this.model.get('weather'),
      city: this.model.get('city')
    });

    this.$el.append(entry);
  }
});
