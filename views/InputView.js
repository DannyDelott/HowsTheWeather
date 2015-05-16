var InputView = Backbone.View.extend({

  id: 'input-container',

  template: _.template('<input id="user-input" placeholder="<%= text %>">'),

  events: {
    'keydown': 'keyAction',
  },

  initialize: function() {
    this.render();
  },

  render: function() {

    // render the template inside the parent DOM element
    this.$el.html(this.template({
      text: 'What\'s your zip code?'
    }));

    // add this view to the container element
    $('#container').append(this.el);
  },

  keyAction: function(e) {

    // Enter key, and input field isn't empty
    if(e.which !== 13 || $('#user-input').val().trim().length === 0) {
      return;
    }

    // validate input
    if(!$('#user-input').val().trim().match(/^(?=.*[1-9].*)[0-9]{1,5}$/)) {
      console.log('bad input');
      return;
    }

    // update collection with a new model
    this.collection.addWeather($('#user-input').val());

  }
});
