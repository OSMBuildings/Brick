
$(e => {

  const map = new OSMBuildings({
    container: 'map',
    position: { latitude: 52.52111, longitude: 13.41078 },
    tilt: 30,
    zoom: 16,
    minZoom: 15,
    maxZoom: 20,
    attribution: '© Data <a href="https://openstreetmap.org/copyright/">OpenStreetMap</a> & <a href="https://osmbuildings.org/copyright/">others</a> © Map <a href="https://mapbox.com/">Mapbox</a> © 3D <a href="https://osmbuildings.org/copyright/">OSM Buildings</a>'
  });

  map.addMapTiles('https://{s}.tiles.mapbox.com/v3/osmbuildings.kbpalbpk/{z}/{x}/{y}.png');
  map.addGeoJSONTiles('https://{s}.data.osmbuildings.org/0.2/anonymous/tile/{z}/{x}/{y}.json', { fixedZoom: 15 });

  map.on('pointerup', e => {
    if (!e.features) {
      map.highlight(feature => {});
      return;
    }

    const features = e.features;
    const featureIdList = features.map(feature => feature.id);

    map.highlight(feature => {
      if (featureIdList.indexOf(feature.id) > -1) {
        return '#ffcc00';
      }
    });

    const $buildingData = $('#building-data');
    $buildingData.empty();
    features.forEach(feature => {
      $buildingData.append(renderFeatureInfo(feature));
    });
  });

  function renderFeatureInfo (feature) {
    let html = '<div class="building-data-item">';

    html += 'ID <b>' + feature.id + '</b><br/>';

    for (let key in feature.properties) {
      html += key + ' <b>' + feature.properties[key] + '</b><br/>'
    }

    html += '<button name="button-edit">Edit</button>';
    html += '</div>';

    return html;
  }

  app.on('PLACE_SELECTED', params => {
    debugger
    // params.zoom = 16;
    // setState(params);
  // if (data.lat !== undefined && data.lon !== undefined) {
  //   map.setPosition({ latitude: parseFloat(data.lat), longitude: parseFloat(data.lon) });
  // }
  //
  // if (data.zoom !== undefined) {
  //   map.setZoom(parseFloat(data.zoom));
  // }
  //
  // if (data.rotation !== undefined) {
  //   map.setRotation(parseFloat(data.rotation));
  // }
  //
  // if (data.tilt !== undefined) {
  //   map.setTilt(parseFloat(data.tilt));
  // }
  });
});
