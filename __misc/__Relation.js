
Brick.Relation = function(prop) {
  Brick.Entity.prototype.constructor.call(this, prop);
};

var proto = Brick.Relation.prototype = Object.create(Brick.Entity.prototype);

proto.type = 'relation';

proto.members = [];

// Return an array of members, each extended with an 'index' property whose value
// is the member index.
//proto.indexedMembers = function() {
//  var result = new Array(this.members.length);
//  for (var i = 0; i < this.members.length; i++) {
//    result[i] = _.extend({}, this.members[i], {index: i});
//  }
//  return result;
//};

// Return the first member with the given role. A copy of the member object
// is returned, extended with an 'index' property whose value is the member index.
//proto.memberByRole = function(role) {
//  for (var i = 0; i < this.members.length; i++) {
//    if (this.members[i].role === role) {
//      return _.extend({}, this.members[i], {index: i});
//    }
//  }
//};

// Return the first member with the given id. A copy of the member object
// is returned, extended with an 'index' property whose value is the member index.
//proto.memberById = function(id) {
//  for (var i = 0; i < this.members.length; i++) {
//    if (this.members[i].id === id) {
//      return _.extend({}, this.members[i], {index: i});
//    }
//  }
//};

// Return the first member with the given id and role. A copy of the member object
// is returned, extended with an 'index' property whose value is the member index.
//proto.memberByIdAndRole = function(id, role) {
//  for (var i = 0; i < this.members.length; i++) {
//    if (this.members[i].id === id && this.members[i].role === role) {
//      return _.extend({}, this.members[i], {index: i});
//    }
//  }
//};

proto.updateMember = function(member, index) {
  var members = this.members.slice();
  members.splice(index, 1, _.extend({}, members[index], member));
  return this.update({members: members});
};

proto.toJXON = function(changeset_id) {
  var r = {
    relation: {
      '@id': this.osmId(),
      '@version': this.version || 0,
      member: _.map(this.members, function(member) {
          return { keyAttributes: { type: member.type, role: member.role, ref: Brick.Entity.id.toOSM(member.id) } };
      }),
      tag: _.map(this.tags, function(value, key) {
        return {
          keyAttributes: { k: key, v: value }
        };
      })
    }
  };
  if (changeset_id) r.relation['@changeset'] = changeset_id;
  return r;
};

//proto.isMultipolygon = function() {
//  return this.tags.type === 'multipolygon';
//};

//proto.isComplete = function(resolver) {
//  for (var i = 0; i < this.members.length; i++) {
//    if (!resolver.hasEntity(this.members[i].id)) {
//      return false;
//    }
//  }
//  return true;
//};

// Returns an array [A0, ... An], each Ai being an array of node arrays [Nds0, ... Ndsm],
// where Nds0 is an outer ring and subsequent Ndsi's (if any i > 0) being inner rings.
//
// This corresponds to the structure needed for rendering a multipolygon path using a
// `evenodd` fill rule, as well as the structure of a GeoJSON MultiPolygon geometry.
//
// In the case of invalid geometries, this function will still return a result which
// includes the nodes of all way members, but some Nds may be unclosed and some inner
// rings not matched with the intended outer ring.
//
//proto.multipolygon = function(resolver) {
//  var outers = this.members.filter(function(m) { return 'outer' === (m.role || 'outer'); }),
//    inners = this.members.filter(function(m) { return 'inner' === m.role; });
//
//  outers = Brick.geo.joinWays(outers, resolver);
//  inners = Brick.geo.joinWays(inners, resolver);
//
//  outers = outers.map(function(outer) { return _.pluck(outer.nodes, 'loc'); });
//  inners = inners.map(function(inner) { return _.pluck(inner.nodes, 'loc'); });
//
//  var result = outers.map(function(o) {
//    // Heuristic for detecting counterclockwise winding order. Assumes
//    // that OpenStreetMap polygons are not hemisphere-spanning.
//    return [d3.geo.area({type: 'Polygon', coordinates: [o]}) > 2 * Math.PI ? o.reverse() : o];
//  });
//
//  function findOuter(inner) {
//    var o, outer;
//
//    for (o = 0; o < outers.length; o++) {
//      outer = outers[o];
//      if (Brick.geo.polygonContainsPolygon(outer, inner))
//        return o;
//    }
//
//    for (o = 0; o < outers.length; o++) {
//      outer = outers[o];
//      if (Brick.geo.polygonIntersectsPolygon(outer, inner))
//        return o;
//    }
//  }
//
//  for (var i = 0; i < inners.length; i++) {
//    var inner = inners[i];
//
//    if (d3.geo.area({type: 'Polygon', coordinates: [inner]}) < 2 * Math.PI) {
//      inner = inner.reverse();
//    }
//
//    var o = findOuter(inners[i]);
//    if (o !== undefined)
//      result[o].push(inners[i]);
//    else
//      result.push([inners[i]]); // Invalid geometry
//  }
//
//  return result;
//};
