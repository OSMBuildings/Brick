Brick.Entity = function(attrs) {
    // For prototypal inheritance.
    if (this instanceof Brick.Entity) return;

    // Create the appropriate subtype.
    if (attrs && attrs.type) {
        return Brick.Entity[attrs.type].apply(this, arguments);
    } else if (attrs && attrs.id) {
        return Brick.Entity[Brick.Entity.id.type(attrs.id)].apply(this, arguments);
    }

    // Initialize a generic Entity (used only in tests).
    return (new Brick.Entity()).initialize(arguments);
};

Brick.Entity.id = function(type) {
    return Brick.Entity.id.fromOSM(type, Brick.Entity.id.next[type]--);
};

Brick.Entity.id.next = {node: -1, way: -1, relation: -1};

Brick.Entity.id.fromOSM = function(type, id) {
    return type[0] + id;
};

Brick.Entity.id.toOSM = function(id) {
    return id.slice(1);
};

Brick.Entity.id.type = function(id) {
    return {'n': 'node', 'w': 'way', 'r': 'relation'}[id[0]];
};

// A function suitable for use as the second argument to d3.selection#data().
Brick.Entity.key = function(entity) {
    return entity.id + 'v' + (entity.v || 0);
};

Brick.Entity.prototype = {
    tags: {},

    initialize: function(sources) {
        for (var i = 0; i < sources.length; ++i) {
            var source = sources[i];
            for (var prop in source) {
                if (Object.prototype.hasOwnProperty.call(source, prop)) {
                    this[prop] = source[prop];
                }
            }
        }

        if (!this.id && this.type) {
            this.id = Brick.Entity.id(this.type);
        }

        if (Brick.debug) {
            Object.freeze(this);
            Object.freeze(this.tags);

            if (this.loc) Object.freeze(this.loc);
            if (this.nodes) Object.freeze(this.nodes);
            if (this.members) Object.freeze(this.members);
        }

        return this;
    },

    osmId: function() {
        return Brick.Entity.id.toOSM(this.id);
    },

    isNew: function() {
        return this.osmId() < 0;
    },

    update: function(attrs) {
        return Brick.Entity(this, attrs, {v: 1 + (this.v || 0)});
    },

    mergeTags: function(tags) {
        var merged = _.clone(this.tags), changed = false;
        for (var k in tags) {
            var t1 = merged[k],
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
    },

    intersects: function(extent, resolver) {
        return this.extent(resolver).intersects(extent);
    },

    isUsed: function(resolver) {
        return _.without(Object.keys(this.tags), 'area').length > 0 ||
            resolver.parentRelations(this).length > 0;
    },

    hasInterestingTags: function() {
        return _.keys(this.tags).some(function(key) {
            return key !== 'attribution' &&
                key !== 'created_by' &&
                key !== 'source' &&
                key !== 'odbl' &&
                key.indexOf('tiger:') !== 0;
        });
    },

    isHighwayIntersection: function() {
        return false;
    },

    deprecatedTags: function() {
        var tags = _.pairs(this.tags);
        var deprecated = {};

        Brick.data.deprecated.forEach(function(d) {
            var match = _.pairs(d.old)[0];
            tags.forEach(function(t) {
                if (t[0] === match[0] &&
                    (t[1] === match[1] || match[1] === '*')) {
                    deprecated[t[0]] = t[1];
                }
            });
        });

        return deprecated;
    }
};
