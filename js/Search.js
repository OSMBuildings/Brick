
class Search {

  constructor ($container, $list) {
    this.$container = $container;
    this.$list = $list;

    const $input = this.$container.find('input');

    $input.keydown(e => {
      if (e.keyCode !== 13) {
        return;
      }
      const query = $input.val();
      if (query) {
        $input.blur(); // for iOS in order to close the keyboard
        this.search(query);
      }

      e.preventDefault();
    });

    this.$container.find('button').click(e => {
      const query = $input.val();
      if (query) {
        this.search(query);
      }
      // e.preventDefault();
    });

    // TODO click event
  // .appendTo(this.$list).click(function (e) {
  //     app.emit('PLACE_SELECTED', item);
  //   });


  }

  search (query) {
    this.$list.empty();
    $.ajax(Search.SEARCH_URL.replace('{query}', encodeURIComponent(query))).then(res => {
      this.setData(res);

      if (res.length) {
        app.emit('PLACE_SELECTED', res[0]);
      }

      app.emit('SEARCH_RESULT', res);
    });
  }

  setData (data = []) {
    this.data = data;
    this.$list.empty();
    this.data.forEach(item => {
      this.$list.append(this.render(item));
    });
  }

  render (item) {
    this.$list.empty();

    // if (!res.length) {
    //   // $('<li class="search-error">no results</li>').appendTo(this.$list);
    //   return;
    // }

    const type = item.class === 'place' ? item.type : `${item.type} ${item.class}`;
    return `<div>${item.display_name}<span class="search-result-type">${type}</span></div>`;
  }
}

Search.SEARCH_URL = 'https://nominatim.openstreetmap.org/search?format=json&polygon_geojson=1&limit=5&q={query}';
