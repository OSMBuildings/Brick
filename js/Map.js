
class Map {

  constructor (containerId) {
    this.viewer = new OSMBuildings({
      container: containerId,
      position: { latitude: 52.52111, longitude: 13.41078 },
      tilt: 30,
      zoom: 16,
      minZoom: 15,
      maxZoom: 20,
      attribution: '© Data <a href="https://openstreetmap.org/copyright/">OpenStreetMap</a> & <a href="https://osmbuildings.org/copyright/">others</a> © Map <a href="https://mapbox.com/">Mapbox</a> © 3D <a href="https://osmbuildings.org/copyright/">OSM Buildings</a>'
    });

    this.viewer.addMapTiles('https://{s}.tiles.mapbox.com/v3/osmbuildings.kbpalbpk/{z}/{x}/{y}.png');
    this.viewer.addGeoJSONTiles('https://{s}.data.osmbuildings.org/0.2/anonymous/tile/{z}/{x}/{y}.json', { fixedZoom: 15 });

    this.viewer.on('pointerup', e => {
      if (e.features) {
        app.emit('BUILDING_SELECTED', e.features);
      }
    });

    app.on('PLACE_SELECTED', params => {
      debugger
      // params.zoom = 16;
      // setState(params);
    // if (data.lat !== undefined && data.lon !== undefined) {
    //   this.viewer.setPosition({ latitude: parseFloat(data.lat), longitude: parseFloat(data.lon) });
    // }
    //
    // if (data.zoom !== undefined) {
    //   this.viewer.setZoom(parseFloat(data.zoom));
    // }
    //
    // if (data.rotation !== undefined) {
    //   this.viewer.setRotation(parseFloat(data.rotation));
    // }
    //
    // if (data.tilt !== undefined) {
    //   this.viewer.setTilt(parseFloat(data.tilt));
    // }
    });

    app.on('BUILDING_SELECTED', parts => {
      const partIdList = parts.map(part => part.id);
      this.viewer.highlight(part => {
        if (partIdList.indexOf(part.id) > -1) {
          return '#ffcc00';
        }
      });
    });

    app.on('PART_SELECTED', part => {
      this.viewer.highlight(p => {
        if (p.id === part.id) {
          return '#cc0000';
        }
      });
    });
  }
}
