
Brick.ui.TagEditor = function(config) {
  Brick.Events.prototype.constructor.call(this);

  this.$container = config.container;
  this.$items = this.$container.find('.input');

  this.url = config.url;
};

var proto = Brick.ui.TagEditor.prototype = Object.create(Brick.Events.prototype);

proto.populate = function(data) {
  var tags = data.properties && data.properties.tags || {};

  this.clear();
  $('.overlay-title').text('OSM ID '+ data.id + (tags.name ? ' ('+ tags.name +')' : ''));

  var value;
  this.$items.each(function(i, $item) {
/**
    value = data[$item.name];
    switch($item.name) {
      case 'building':
        value = (value === undefined || value === 'yes') ? '' : value;
        $item.find('option[value='+ value +']').attr('selected', 'selected');
      break;

      case 'building:height':
      case 'building:levels':
        value = (value === undefined || value === 'yes') ? '' : value;
        $item.find('option[value='+ value +']').attr('selected', 'selected');
      break;
    }
**/

    if ($item.name && tags[ $item.name ] !== undefined) {
      $item.value = tags[ $item.name ];
    }
  });

/*
        <input type="number" min="0" name="height" value="" class="input">
        <select name="height-unit" class="input">
          <option selected>levels</option>
          <option>m</option>
          <option>ft</option>

        <label>Height above ground</label>
        <input type="number" min="0" name="min_height" value="" class="input">
        <select name="min_height-unit" class="input">
          <option selected>levels</option>
          <option>m</option>
          <option>ft</option>

        <label>Building Shape</label>
        <select name="building:shape" class="input type">
          <option selected></option>
          <option>pyramidal</option>
          <option>dome</option>
          <option>sphere</option>

        <label>Building Color</label>
        <input name="color-choice" class="input color"><br><br>

        <label>Roof Shape</label>
        <select name="roof:shape" class="input type">
          <option selected></option>
          <option>flat</option>
          <option>skillion</option>
          <option>gabled</option>
          <option>half-hipped</option>
          <option>hipped</option>
          <option>pyramidal</option>
          <option>gambrel</option>
          <option>mansard</option>
          <option>dome</option>
          <option>onion</option>
          <option>round</option>
          <option>saltbox</option>
        </select><br>

        <label>Roof Color</label>
        <input name="roof:color-choice" class="input color"><br>

        <label>Roof Height</label>
        <input type="number" min="0" name="roof:height" value="" class="input">
        <select name="roof:height-unit" class="input">
          <option selected>levels</option>
          <option>m</option>
          <option>ft</option>
        </select><br>

        <!-- GENERIC TAGS HERE -->
      </div>

      <!-- button class="back-button">&laquo;</button -->
      <button class="close-button">✕</button>
    </div>

    <script>
    document.addEventListener('DOMContentLoaded', function() {
      new Brick({
        mapId: 'map',
        oauthLandingPage: 'auth.html',
        oauthConsumerKey: config.oauth.consumerKey,
        oauthSecret: config.oauth.secret,
        providerURL: config.providerURL,
        overlayContainer: $('.overlay'),
        partSelectionContainer: $('.part-selection'),
        tagEditorContainer: $('.tag-editor')
      });
    });
    </script>

*/



  this.$items.each(function(i, item) {
    if (item.name && tags[ item.name ] !== undefined) {
      item.value = tags[ item.name ];
    }
  });
};

//  getData: function() {
//    var data = {};
//    for (var i = 0, il = this.items.length; i < il; i++) {
//      this.items[i].name && (data[ this.items[i].name ] = this.items[i].value);
//    }
//    return data;
//  },


proto.clear = function() {
  this.$items.each(function(i, item) {
    item.value = '';
  });
};
