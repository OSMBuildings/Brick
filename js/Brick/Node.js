
Brick.Node = function(properties) {
  Brick.Entity.prototype.constructor.call(this, properties);
};

var proto = Brick.Node.prototype = Brick.Entity.prototype;

proto.type = 'node';

//proto.geometry = function(graph) {
//  return graph.transient(this, 'geometry', function() {
//    return graph.isPoi(this) ? 'point' : 'vertex';
//  });
//};
//
//proto.move = function(loc) {
//  return this.update({loc: loc});
//};

proto.asJXON = function(changesetId) {
  var root = {
    node: {
      '@id': this.osmId(),
      '@lon': this.loc[0],
      '@lat': this.loc[1],
      '@version': (this.version || 0),
      tag: _.map(this.tags, function(v, k) {
        return { keyAttributes: { k: k, v: v } };
      })
    }
  };
  if (changesetId) {
    root.node['@changeset'] = changesetId;
  }
  return root;
};

proto.asGeoJSON = function() {
  return {
    type: 'Point',
    coordinates: this.loc
  };
};
