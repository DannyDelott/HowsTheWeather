var EntryView = Backbone.View.extend({

  className: 'entry',

  template: _.template('<p>It is currently <%= weather %> in <%= city %>.</p>'),

  initialize: function() {
    this.render();
  },

  render: function() {

    var entry = this.template({
      weather: this.model.get('weather'),
      city: this.model.get('city')
    });

    this.$el.html(entry);

    return this;
  }
});
