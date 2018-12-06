
class Buildings {

  constructor ($list) {
    this.$list = $list;

    app.on('BUILDING_SELECTED', parts => {
      this.setData(parts);
    });

    this.$list.click(e => {
      const index = $(e.target).closest('.list-item').index();
      if (index >= 0 && this.data[index]) {
        app.emit('PART_SELECTED', this.data[index]);
      }
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
    let html = '<div class="list-item">';

    html += 'ID <b>' + item.id + '</b><br/>';

    for (let key in item.properties) {
      html += key + ' <b>' + item.properties[key] + '</b><br/>'
    }

    html += '<button name="button-edit">Edit</button>';
    html += '</div>';

    return html;
  }
}
