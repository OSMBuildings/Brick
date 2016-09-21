var Data = {};

(function() {

  var yardToMeter = 0.9144;
  var footToMeter = 0.3048;
  var inchToMeter = 0.0254;

  var baseMaterials = {
    asphalt: 'tar_paper',
    bitumen: 'tar_paper',
    block: 'stone',
    bricks: 'brick',
    glas: 'glass',
    glassfront: 'glass',
    grass: 'plants',
    masonry: 'stone',
    granite: 'stone',
    panels: 'panel',
    paving_stones: 'stone',
    plastered: 'plaster',
    rooftiles: 'roof_tiles',
    roofingfelt: 'tar_paper',
    sandstone: 'stone',
    sheet: 'canvas',
    sheets: 'canvas',
    shingle: 'tar_paper',
    shingles: 'tar_paper',
    slates: 'slate',
    steel: 'metal',
    tar: 'tar_paper',
    tent: 'canvas',
    thatch: 'plants',
    tile: 'roof_tiles',
    tiles: 'roof_tiles'
  };

  function getMaterial(str) {
    if (str === undefined) {
      return;
    }
    return baseMaterials[str] || str;
  }

  function getMeters(str) {
    if (str === undefined) {
      return;
    }
    var value = parseFloat(str);
    // no units given
    if (value == str) {
      return Math.round(value);
    }
    if (~str.indexOf('m')) {
      return Math.round(value);
    }
    if (~str.indexOf('yd')) {
      return Math.round(value*yardToMeter);
    }
    if (~str.indexOf('ft')) {
      return Math.round(value*footToMeter);
    }
    if (~str.indexOf('\'')) {
      var footInch = str.split('\'');
      return Math.round(footInch[0]*footToMeter + footInch[1]*inchToMeter);
    }
  }

  function getLevels(str) {
    if (str === undefined) {
      return;
    }
    return parseInt(str, 10);
  }

  Data.read = function(doc) {
    var data = JXON.build(doc.children[0]);

    var nodeIndex = {};
    if (data.node) {
      for (var i = 0; i < data.node.length; i++) {
        nodeIndex[ data.node[i]['@id'] ] = [ data.node[i]['@lon'], data.node[i]['@lat'] ];
      }
    }

    var
      way = data.way || {},
      tagList = way.tag,
      tags = {};
    if (tagList) {
      for (var i = 0; i < tagList.length; i++) {
        tags[ tagList[i]['@k'] ] = tagList[i]['@v'];
      }
    }

    var
      nodeList = way.nd,
      nodes = [];
    if (nodeList) {
      for (var i = 0, il = nodeList.length; i<il; i++) {
        nodes.push(nodeIndex[ nodeList[i]['@ref'] ]);
      }
    }

    var id = way['@id'];

    tags['height'] = getMeters(tags['height'] || tags['building:height']);
    delete tags['building:height'];

    tags['building:levels'] = getLevels(tags['levels'] || tags['building:levels']);
    delete tags['levels'];

    tags['min_height'] = getMeters(tags['min_height'] || tags['building:min_height']);
    delete tags['building:min_height'];

    tags['min_level']  = getLevels(tags['min_level']  || tags['building:min_level']);
    delete tags['building:min_level'];

    // wall material
    tags['building:material'] = getMaterial(tags['building:material'] || tags['building:facade:material'] || tags['building:cladding']);

    // wall color
    tags['building:colour'] = tags['building:color'] || tags['building:colour'];
    delete tags['building:color'];

    // roof material
    tags['roof:material'] = getMaterial(tags['roof:material'] || tags['building:roof:material']);
    delete tags['building:roof:material'];

    // roof color
    tags['roof:colour'] = tags['roof:color'] || tags['roof:colour'] || tags['building:roof:color'] || tags['building:roof:colour'];
    delete tags['roof:color'];
    delete tags['building:roof:color'];
    delete tags['building:roof:colour'];

    tags['roof:shape'] = tags['roof:shape'] || tags['building:roof:shape'];
    delete tags['building:roof:shape'];
    if (tags['roof:shape'] === 'pyramidal') {
      tags['roof:shape'] = 'pyramid';
    }

    tags['roof:height'] = getMeters(tags['roof:height'] || tags['building:roof:height']);
    delete tags['building:roof:height'];

    tags['roof:levels'] = getLevels(tags['roof:levels'] || tags['building:roof:levels']);
    delete tags['building:roof:levels'];

    return { id:id, tags:tags, nodes:nodes, data:data };
  };

  Data.write = function(data, tags) {
    var tagList = [];
    for (var k in tags) {
      tagList.push({ '@k':k, '@v':tags[k] });
    }

    data.way.tag = tagList;
    return data;
  };

}());
