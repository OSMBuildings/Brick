
Brick.Entity = function(properties) {
  for (var p in properties) {
    if (properties.hasOwnProperty(p)) {
      this[p] = properties[p];
    }
  }
};

var proto = Brick.Entity.prototype;

proto.tags = {};

proto.update = function(attrs) {
  return Brick.Entity(this, attrs, {v: 1 + (this.v || 0)});
};

proto.mergeTags = function(tags) {
  var merged = _.clone(this.tags), changed = false;
  for (var k in tags) {
    var
      t1 = merged[k],
      t2 = tags[k];

    if (!t1) {
      changed = true;
      merged[k] = t2;
    } else if (t1 !== t2) {
      changed = true;
      merged[k] = _.union(t1.split(/;\s*/), t2.split(/;\s*/)).join(';');
    }
  }
  return changed ? this.update({tags: merged}) : this;
};

proto.isUsed = function(resolver) {
  return _.without(Object.keys(this.tags), 'area').length > 0 ||
    resolver.parentRelations(this).length > 0;
};
