var config = {

  appName: 'Brick',
  appVersion: '0.2.0',

  editComment: 'Brick edit',

  map: {
    position: { latitude: 52.52179, longitude: 13.39503 },
    zoom: 17,
    maxZoom: 18,
    basemapUrl: 'https://{s}.tiles.mapbox.com/v3/osmbuildings.kbpalbpk/{z}/{x}/{y}.png'
  },

  osmapi: {
    endpoint: 'https://www.openstreetmap.org', //   https://master.apis.dev.openstreetmap.org    https://www.openstreetmap.org
    auth: {
      landingPage: '/auth.html', // auth.html
      consumerKey: 'QeKxsLrW2630aRNeGNglTee4tj1PUg9Czh6ZZ7S2',
      secret: 'C9g9MAaJHEkif59p2fKwNPFoMld3V5rgTUXOh0qp'
    }
  },

  editor: {
    fields: {
      'building': [
        'yes',
        'apartments',
        'barn',
        'bunker',
        'cabin',
        'cathedral',
        'chapel',
        'church',
        'college',
        'commercial',
        'construction',
        'detached',
        'dormitory',
        'entrance',
        'garage',
        'garages',
        'greenhouse',
        'hospital',
        'hotel',
        'house',
        'hut',
        'industrial',
        'kindergarten',
        'public',
        'residential',
        'retail',
        'roof',
        'school',
        'shed',
        'stable',
        'static_caravan',
        'terrace',
        'train_station',
        'university',
        'warehouse'
      ],

      'building:use': [
        '',
        'apartments',
        'barn',
        'bunker',
        'cabin',
        'cathedral',
        'chapel',
        'church',
        'college',
        'commercial',
        'construction',
        'detached',
        'dormitory',
        'entrance',
        'garage',
        'garages',
        'greenhouse',
        'hospital',
        'hotel',
        'house',
        'hut',
        'industrial',
        'kindergarten',
        'public',
        'residential',
        'retail',
        'roof',
        'school',
        'shed',
        'stable',
        'static_caravan',
        'terrace',
        'train_station',
        'university'
      ],

      'roof:shape': [
        '',
        'flat',
        'skillion',
        'gabled',
        'half-hipped',
        'hipped',
        'pyramidal',
        'gambrel',
        'mansard',
        'dome',
        'onion',
        'round',
        'saltbox'
      ]
     }
   }
};
