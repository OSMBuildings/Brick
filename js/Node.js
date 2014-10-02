
Brick.Node = function(prop) {
  Brick.Entity.prototype.constructor.call(this, prop);
};

var proto = Brick.Node.prototype = Object.create(Brick.Entity.prototype);

proto.type = 'node';

proto.toJXON = function(changesetId) {
  var res = {
    node: {
      '@id': this.id,
      '@lat': this.lat,
      '@lon': this.lon,
      '@version': this.version || 0,
      tag: _.map(this.tags, function(value, key) {
        return {
          keyAttributes: { k: key, v: value }
        };
      })
    }
  };

  if (changesetId) {
    res.node['@changeset'] = changesetId;
  }

  return res;
};
