
var Map;

(function() {

  Map.init = function() {
    var position, p;
    if ((p = State.get('position'))) {
      position = p;
    } else {
      position = config.map.position;
    }

    var zoom = State.get('zoom') || config.map.zoom;

    var map = new OSMBuildings({
      position: position,
      zoom: zoom,
      tilt: 30,
      baseURL: 'assets', // not an ideal place, but good for now
      minZoom: 16,
      maxZoom: config.map.maxZoom+2,
      effects: ['shadows'],
      attribution: '© Data <a href="https://openstreetmap.org/copyright/">OpenStreetMap</a> · © Map <a href="https://mapbox.com/">Mapbox</a> · © 3D <a href="https://osmbuildings.org/copyright/">OSM Buildings</a>'
    }).appendTo(document.getElementById('map'));

    map.addMapTiles(config.map.basemapUrl);
    // map.addGeoJSONTiles('https://{s}.data.osmbuildings.org/0.2/ph2apjye/tile/{z}/{x}/{y}.json', { fixedZoom: 15 });
    map.addGeoJSONTiles('https://{s}.data.osmbuildings.org/0.2/anonymous/tile/{z}/{x}/{y}.json', { fixedZoom: 15 });

    map.on('change', function() {
      var
        position = map.getPosition(),
        zoom = map.getZoom(),
        rotation = map.getRotation(),
        tilt = map.getTilt();
      State.set('latitude',  position.latitude.toFixed(5));
      State.set('longitude', position.longitude.toFixed(5));
      State.set('zoom', zoom);

      State.set('rotation', rotation.toFixed(5));
      State.set('tilt', tilt.toFixed(5));

      Events.emit('MAP_CHANGE', { position:position, zoom:zoom, rotation:rotation, tilt:tilt });
    });

    map.on('pointerdown', function(e) {
      map.getTarget(e.detail.x, e.detail.y, function(id) {
        if (id) {
          console.log(id);
          Events.emit('FEATURE_SELECTED', id);
        }
      });
    });

    Events.on('LOCATION_CHANGE', function(position) {
      map.setPosition(position);
   // map.setZoom(zoom);
    });

    return map;
  };

}());
