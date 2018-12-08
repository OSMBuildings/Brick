
class Buildings extends List {

  constructor ($container) {
    super($container);

    app.on('BUILDING_SELECTED', parts => {
      this.setData(parts);
    });

    this.on('select', e => {
      app.emit('PART_SELECTED', e);
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
