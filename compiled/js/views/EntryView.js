// Generated by CoffeeScript 1.10.0
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  window.EntryView = (function(superClass) {
    extend(EntryView, superClass);

    function EntryView() {
      return EntryView.__super__.constructor.apply(this, arguments);
    }

    EntryView.prototype.className = 'entry';

    EntryView.prototype.template = _.template('<p>It is currently <%= weather %><%= unit %> in <%= city %>.</p>');

    EntryView.prototype.events = {
      'click': 'clickAction'
    };

    EntryView.prototype.initialize = function() {
      this.listenTo(this.model, 'change', this.render);
      return this.render();
    };

    EntryView.prototype.render = function() {
      var entry;
      entry = this.template({
        weather: this.model.get('weather'),
        unit: this.model.get('unit'),
        city: this.model.get('city')
      });
      return this.$el.html(entry);
    };

    EntryView.prototype.clickAction = function() {
      return this.model.toggleUnit();
    };

    return EntryView;

  })(Backbone.View);

}).call(this);

//# sourceMappingURL=EntryView.js.map
