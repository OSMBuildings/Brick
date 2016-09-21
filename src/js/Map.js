
var Map = new Events();

(function() {

  var
    buildingLayer,
    selectedBuilding,
    highlightedBuildingId;

  Map.init = function() {
    var position, p;
    if ((p = State.get('position'))) {
      position = p;
    } else {
      position = config.map.position;
    }

    var zoom = State.get('zoom') || config.map.zoom;

    // if nothing shows up, saving State has failed
    // position = config.map.position;
    // var zoom = config.map.zoom;

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

    map.on('loadfeature', function(e) {
      var feature = e.detail;

      if (!feature.properties) {
        feature.properties = {};
      }

      // not editable for now
      if (feature.id[0] !== 'w' || feature.properties.relationId) {
        feature.properties.color = '#ffffff';
        feature.properties.roofColor = '#ffffff';
      } else {
        /*
        // is well tagged
        if (
          (feature.properties.levels || feature.properties.height) &&
          (feature.properties.color || feature.properties.wallColor || feature.properties.material) &&
          (feature.properties.roofShape) &&
          (feature.properties.roofLevels || feature.properties.roofHeight) &&
          (feature.properties.roofColor || feature.properties.roofMaterial)
        ) {} else {
          // poorly tagged
          feature.properties.color = '#ffcc00';
          feature.properties.roofColor = '#ffcc00';
        }
        */
      }

      return feature;
    });

    buildingLayer = map.addGeoJSONTiles('https://{s}.data.osmbuildings.org/0.2/anonymous/tile/{z}/{x}/{y}.json', { fixedZoom: 15 });

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

      App.emit('MAP_CHANGE', { position:position, zoom:zoom, rotation:rotation, tilt:tilt });
    });

    map.on('pointerdown', function(e) {
      // no mouse interaction, if an object is currently edited
      if (selectedBuilding) {
        return;
      }
      map.getTarget(e.detail.x, e.detail.y, function(featureId) {
        if (featureId) {
          App.emit('FEATURE_SELECT', featureId);
            if (featureId && featureId[0] === 'w') {
              map.highlight(featureId, '#ffcc00');
            }
        }
      });
    });

    map.on('pointermove', function(e) {
      // no mouse interaction, if an object is currently edited
      if (selectedBuilding) {
        return;
      }
      map.getTarget(e.detail.x, e.detail.y, function(featureId) {
        App.emit('FEATURE_HOVER', featureId);
      });
    });

    App.on('POSITION_CHANGE', function(position) {
      map.setPosition(position);
   // map.setZoom(zoom);
    });

    App.on('FEATURE_CHANGE', function(feature) {
      if (buildingLayer) {
        buildingLayer.destroy();
        buildingLayer = undefined;
      }

      if (selectedBuilding) {
        selectedBuilding.destroy();
      }

      var tags = feature.tags;
      console.log(tags);

      // properties are converted into OSMB format
      var geojson = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            id: 'w' + feature.id,
            properties: {
              color: tags['building:colour'],
              height: tags.height,
              levels: tags['building:levels'],
              minHeight: tags.min_height,
              minLevel: tags.min_level,
              material: tags['building:material'],
              roofMaterial: tags['roof:material'],
              roofColor: tags['roof:colour'],
              roofShape: tags['roof:shape'],
              roofHeight: tags['roof:height'],
              roofLevels: tags['roof:levels']
            },
            geometry: {
              type: 'Polygon',
              coordinates: [feature.nodes]
            }
          }
        ]
      };

      // remove selection color effect
      highlightedBuildingId = 'w' + feature.id;
      map.highlight(null);

      selectedBuilding = map.addGeoJSON(geojson, { fadeIn:false });
    });

    App.on('FEATURE_RESET', function() {
      buildingLayer = map.addGeoJSONTiles('https://{s}.data.osmbuildings.org/0.2/anonymous/tile/{z}/{x}/{y}.json', { fixedZoom:15, fadeIn:false });
      map.highlight(highlightedBuildingId, '#ffcc00');
      setTimeout(function() {
        selectedBuilding.destroy();
        selectedBuilding = null;
      }, 1000)
    });

    return map;
  };

}());
