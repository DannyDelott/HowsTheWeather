var EntryView = Backbone.View.extend({

  className: 'entry',

  template: _.template('<p>It is currently <%= weather %><%= unit %> in <%= city %>.</p>'),

  events: {
    'click': 'clickAction'
  },

  initialize: function() {

    this.listenTo(this.model, 'change', this.render);
    this.render();

  },

  render: function() {

    var entry = this.template({
      weather: this.model.get('weather'),
      unit: this.model.get('unit'),
      city: this.model.get('city')
    });

    this.$el.html(entry);

  },

  clickAction: function() {

    this.model.toggleUnit();

  }

});
