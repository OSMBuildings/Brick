
class Buildings {

  constructor ($list) {
    this.$list = $list;

    app.on('BUILDING_SELECTED', parts => {
      this.data = parts || [];
      this.$list.empty();
      this.data.forEach(part => {
        this.$list.append(this.render(part));
      });
    });

    this.$list.click(e => {
      const index = $(e.target).closest('.sidebar-content-list-item').index();
      if (index >= 0 && this.data[index]) {
        app.emit('PART_SELECTED', this.data[index]);
      }
    });
  }

  render (feature) {
    let html = '<div class="sidebar-content-list-item">';

    html += 'ID <b>' + feature.id + '</b><br/>';

    for (let key in feature.properties) {
      html += key + ' <b>' + feature.properties[key] + '</b><br/>'
    }

    html += '<button name="button-edit">Edit</button>';
    html += '</div>';

    return html;
  }
}
