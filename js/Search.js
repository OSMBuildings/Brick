
class Search {
  constructor ($container) {
    this.$results = $('#search-results'); // TODO

    this.$input = $container.find('input');
    this.$input.keydown(e => {
      if (e.keyCode !== 13) {
        return;
      }
      const query = this.$input.val();
      if (query) {
        this.$input.blur(); // for iOS in order to close the keyboard
        this.search(query);
      }
      e.preventDefault();
    });

    $('#search button').click(e => {
      const query = this.$input.val();
      if (query) {
        this.search(query);
      }
    });
  }

  search (query) {
    this.$results.empty();
    $.ajax(Search.SEARCH_URL.replace('{query}', encodeURIComponent(query))).done(res => {
      this.showResults(res);
    });
  }

  showResults (res) {
    if (!res.length) {
      // $('<li class="search-error">no results</li>').appendTo(this.$results);
      return;
    }

    res.forEach(function (item) {
      const type = item.class === 'place' ? item.type : item.type + ' ' + item.class;
      $('<div>' + item.display_name +  class="search-result-type" ' + type + '</div></div>')
        .appendTo(this.$results).click(function (e) {
        app.emit('PLACE_SELECTED', item);
      });
    });

    if (res.length) {
      app.emit('PLACE_SELECTED', res[0]);
    }

    app.emit('SEARCH_RESULT', res);
  }
}

Search.SEARCH_URL = 'https://nominatim.openstreetmap.org/search?format=json&polygon_geojson=1&limit=5&q={query}';
