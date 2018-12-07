
class Buildings {

  constructor ($list) {
    this.$list = $list;

    app.on('BUILDING_SELECTED', parts => {
      this.setData(parts);
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
        app.emit('PART_SELECTED', this.data[index]);
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
    let html = '<div class="list-item">';

    html += 'ID <b>' + item.id + '</b><br/>';

    for (let key in item.properties) {
      html += key + ' <b>' + item.properties[key] + '</b><br/>'
    }

    html += '</div>';

    return html;
  }
}
