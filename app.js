var app = new AppView();

// Collection
var weather = new Weathers();

// Views
var title = new TitleView();

var input = new InputView({
  collection: weather
});

var entries = new EntriesView({
  collection: weather
});

