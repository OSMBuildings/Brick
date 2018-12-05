
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

  // https://wiki.openstreetmap.org/wiki/Changeset
  createChangeset () {
    return `<osm>
      <changeset version="0.6">
        <tag k="created_by" v="${this.appName}"/>
      </changeset>
    </osm>`;
  }

  // http://wiki.openstreetmap.org/wiki/OsmChange
  createChange($doc, changesetId) {
    $doc.find('*[changeset]').attr('changeset', changesetId);
    return `<osmChange version="0.6">
      <modify>
      ${$doc.html()}
      </modify>
    </osmChange>`;
  }

  readItem (itemType, itemId) {
    return $.ajax(`https://api.openstreetmap.org/api/0.6/${itemType}/${itemId}/full`);
  }

  writeItem ($doc) {
    return new Promise((resolve, reject) => {
      this.auth.xhr({
        method: 'PUT',
        path: '/api/0.6/changeset/create',
        options: {
          header: {
            'Content-Type': 'text/xml'
          }
        },
        content: this.createChangeset()
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
          content: this.createChange($doc, changesetId)
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
        const user = $(doc).find('user')[0];
        resolve(user);
      });
    });
  }
}
