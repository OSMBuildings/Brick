
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
    });

    this.$list.click(e => {
      const $target = $(e.target).closest('.list-item');
      const index = $target.index();
      if (index >= 0 && this.data[index]) {
        if (this.$selected) {
          this.$selected.removeClass('selected');
        }
        this.$selected = $target;
        this.$selected.addClass('selected');
        app.emit('PLACE_SELECTED', this.data[index]);
      }
    });
  }

  search (query) {
    this.$list.empty();
    $.ajax(Search.SEARCH_URL.replace('{query}', encodeURIComponent(query))).then(res => {
      app.emit('SEARCH_RESULT', res);

      if (!res.length) {
        this.setData();
        this.$list.append(`<div class="error">no results for <b>${query}</b></div>`);
        return;
      }

      this.setData(res);

      if (res.length) {
        app.emit('PLACE_SELECTED', res[0]);
      }
    });
  }

  setData (data = []) {
    this.data = data;
    this.$list.empty();
    this.$selected = null;
    this.data.forEach(item => {
      this.$list.append(this.render(item));
    });
  }

  render (item) {
    const type = item.class === 'place' ? item.type : `${item.type} ${item.class}`;
    return `<div class="list-item">
      <b>${item.display_name}</b><br/>
      ${type}
    </div>`;
  }
}

Search.SEARCH_URL = 'https://nominatim.openstreetmap.org/search?format=json&polygon_geojson=1&limit=5&q={query}';
