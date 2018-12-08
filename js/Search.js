
class Search {

  constructor ($container, $list) {
    this.$container = $container;

    this.list = new List($list);

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
    });

    this.list.on('select', e => {
      app.emit('PLACE_SELECTED', e);
    });

    this.list.render = (item) => {
      const type = item.class === 'place' ? item.type : `${item.type} ${item.class}`;
      return `<div class="list-item">
        <b>${item.display_name}</b><br/>
        ${type}
        </div>`;
    }
  }

  search (query) {
    this.list.setData();
    $.ajax(Search.SEARCH_URL.replace('{query}', encodeURIComponent(query))).then(res => {
      app.emit('SEARCH_RESULT', res);

      if (!res.length) {
        // TODO
        this.list.$container.append(`<div class="error">no results for <b>${query}</b></div>`);
        return;
      }

      this.list.setData(res);
      if (res.length > 1) {
        // length 1 get automatically selected..
        this.list.select(0);
      }
    });
  }
}

Search.SEARCH_URL = 'https://nominatim.openstreetmap.org/search?format=json&polygon_geojson=1&limit=5&q={query}';
