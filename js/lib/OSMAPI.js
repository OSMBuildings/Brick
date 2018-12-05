
class OSMAPI {

  constructor (config) {
    this.appName = config.appName
    this.auth = osmAuth({
      url: config.endpoint,
      landing: config.auth.landingPage,
      oauth_consumer_key: config.auth.consumerKey,
      oauth_secret: config.auth.secret
    });
  }

  createChangeset (comment) {
    return {
      osm: {
        changeset: {
          tag: [
            { '@k':'created_by', '@v':this.appName }//,
            // { '@k':'comment', '@v':comment }
          ],
          '@version': 0.6,
          '@generator': this.appName
        }
      }
    };
  }

  nest (x, order) {
    const groups = {};
    x.forEach(item => {
      const tagName = Object.keys(item)[0];
      if (!groups[tagName]) {
        groups[tagName] = [];
      }
      groups[tagName].push(item[tagName]);
    });

    const ordered = {};
    order.forEach(o => {
      if (groups[o]) {
        ordered[o] = groups[o];
      }
    });
    return ordered;
  }

  itemToJXON (item, changesetId) {
    let res;

    if (item.relation) {
      const data = item.relation;
      res = {
        relation: {
          '@id': data['@id'],
          '@version': data['@version'] || 0,
          member: data.member,
          tag: data.tag
        }
      };
    } else if (item.way) {
      const data = item.way;
      res = {
        way: {
          '@id': data['@id'],
          '@version': data['@version'] || 0,
          nd: data.nd,
          tag: data.tag
        }
      };
    }

    if (!res) {
      return;
    }

    if (changesetId) {
      if(item.relation){
        res.relation['@changeset'] = changesetId;
      } else if(item.way){
        res.way['@changeset'] = changesetId;
      }
    }

    return res;
  }

  // Generate an OSM change (http://wiki.openstreetmap.org/wiki/OsmChange)
  createChange(item, changesetId) {
    return {
      osmChange: {
        '@version': 0.6,
        '@generator': config.appName,
        modify: this.nest([this.itemToJXON(item, changesetId)], ['node', 'way', 'relation']),
      }
    };
  }

  readItem (itemType, itemId) {
    return $.ajax(`https://api.openstreetmap.org/api/0.6/${itemType}/${itemId}/full`);
  }

  writeItem (item, comment) {
    return new Promise((resolve, reject) => {
      this.auth.xhr({
        method: 'PUT',
        path: '/api/0.6/changeset/create',
        options: {
          header: {
            'Content-Type': 'text/xml'
          }
        },
        content: JXON.unbuild(this.createChangeset(comment))
      }, (err, changesetId) => {
        if (err) {
          reject(err);
          return;
        }
        this.auth.xhr({
          method: 'POST',
          path: `/api/0.6/changeset/${changesetId}/upload`,
          options: {
            header: {
              'Content-Type': 'text/xml'
            }
          },
          content: JXON.unbuild(this.createChange(item, changesetId))
        }, err => {
          if (err) {
            reject(err);
            return;
          }
          this.auth.xhr({
            method: 'PUT',
            path: `/api/0.6/changeset/${changesetId}/close`
          }, err => {
            if (err) {
              reject(err);
            } else {
              resolve(changesetId);
            }
          });
        });
      });
    });
  }

  isLoggedIn () {
    return this.auth.authenticated();
  }

  login () {
    return new Promise((resolve, reject) => {
      this.auth.authenticate(() => {
        if (!this.auth.authenticated()) {
          reject();
          return;
        }
        resolve();
      });
    });
  }

  logout () {
    this.auth.logout();
  }

  getUserInfo () {
    return new Promise((resolve, reject) => {
      this.auth.xhr({
        method: 'GET',
        accept: 'application/json',
        path: '/api/0.6/user/details.json'
      }, (err, doc) => {
        if (err) {
          reject(err);
          return;
        }
        const user = JXON.build(doc.getElementsByTagName('user')[0]);
        resolve(user);
      });
    });
  }
}
