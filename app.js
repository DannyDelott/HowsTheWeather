// Collection
var weather = new Weather();

// Views
var app = new AppView();

var title = new TitleView();

var input = new InputView({
  collection: weather
});

var list = new ListView({
  collection: weather
});
