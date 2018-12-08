
const app = new Events();

$(e => {
  const map = new Map('map');
  const search = new Search($('#search'), $('#search-results'));
  const buildings = new Buildings($('#building-details'));
  const editor = new Editor();

  app.on('SEARCH_RESULT', e => {
    search.$list.show();
    buildings.hide();
  });

  app.on('BUILDING_SELECTED', e => {
    search.$list.hide();
    buildings.show();
  });
});
