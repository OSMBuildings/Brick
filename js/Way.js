
Brick.Way = function(prop) {
  Brick.Entity.prototype.constructor.call(this, prop);
};

var proto = Brick.Way.prototype = Brick.Entity.prototype;

proto.type = 'way';

proto.toJXON = function(changesetId) {
  var res = {
    way: {
      '@id': this.id,
      '@version': this.version || 0,
      nd: this.nodes,
      tag: _.map(this.tags, function(value, key) {
        return {
          keyAttributes: { k: key, v: value }
        };
      })
    }
  };

  if (changesetId) {
    res.way['@changeset'] = changesetId;
  }

  return res;
};
