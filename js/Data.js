class Data {

  constructor (doc) {
    this.load(doc);
  }

  write () {
    const tagList = [];
    for (let k in this.tags) {
      if (this.tags[k] !== undefined && this.tags[k] !== 'undefined') {
        tagList.push({'@k': k, '@v': this.tags[k]});
      }
    }

    if (this.feature.hasOwnProperty('relation')) {
      this.feature.relation.tag = tagList;
    } else {
      this.feature.way.tag = tagList;
    }
  }

  addHeight (height) {
    // same value from user and in OSM -> do nothing, consider 0 as no value
    if (this.tags['height'] === parseInt(height) || parseInt(height) === 0) {
      return false;
    }
    this.tags['height'] = height;
    return true;
  }

  addLevels (levels) {
    // same value from user and in OSM -> do nothing, consider 0 as no value
    if (this.tags['building:levels'] === parseInt(levels) || parseInt(levels) === 0) {
      return false;
    }
    this.tags['building:levels'] = levels;
    return true;
  }

  load (doc) {
    this.feature = JXON.build(doc.children[0]);
    let tagList, nodeList, memberList;
    let nodeIndex = {};
    this.tags = {};
    this.nodes = [];

    if (this.feature.hasOwnProperty('relation')) {
      this.id = this.feature.relation['@id'];
      memberList = this.feature.relation.member;
      tagList = this.feature.relation.tag;
      nodeList = this.feature.way.nd;
      this.member = [];

      if (memberList) {
        for (let i = 0, il = memberList.length; i < il; i++) {
          this.member.push({
            '@ref': memberList[i]['@ref'],
            '@role': memberList[i]['@role'],
            '@type': memberList[i]['@type']
          });
        }
      }
    } else {
      this.id = this.feature.way['@id'];
      tagList = this.feature.way.tag;
      nodeList = this.feature.way.nd;
    }

    if (this.feature.node) {
      for (let i = 0; i < this.feature.node.length; i++) {
        nodeIndex[this.feature.node[i]['@id']] = [this.feature.node[i]['@lon'], this.feature.node[i]['@lat']];
      }
    }

    // if there is only a single key-value pair on tagList(aka this.feature.way.tag) we need to force it to be an array
    if (tagList) {
      if (!tagList.length) {
        tagList = [tagList];
      }

      for (let i = 0; i < tagList.length; i++) {
        this.tags[tagList[i]['@k']] = tagList[i]['@v'];
      }
    }

    if (nodeList) {
      for (let i = 0, il = nodeList.length; i < il; i++) {
        this.nodes.push(nodeIndex[nodeList[i]['@ref']]);
      }
    }

    this.tags['height'] = this.getMeters(this.tags['height'] || this.tags['building:height']);
    delete this.tags['building:height'];

    this.tags['building:levels'] = this.getLevels(this.tags['levels'] || this.tags['building:levels']);
    delete this.tags['levels'];
  }

  getMeters (str) {
    const yardToMeter = 0.9144;
    const footToMeter = 0.3048;
    const inchToMeter = 0.0254;

    if (str === undefined) {
      return;
    }
    const value = parseFloat(str);
    // no units given
    if (value == str) {
      return Math.round(value);
    }
    if (~str.indexOf('m')) {
      return Math.round(value);
    }
    if (~str.indexOf('yd')) {
      return Math.round(value * yardToMeter);
    }
    if (~str.indexOf('ft')) {
      return Math.round(value * footToMeter);
    }
    if (~str.indexOf('\'')) {
      const footInch = str.split('\'');
      return Math.round(footInch[0] * footToMeter + footInch[1] * inchToMeter);
    }
  }

  getLevels (str) {
    if (str === undefined) {
      return;
    }
    return parseInt(str, 10);
  }
}
