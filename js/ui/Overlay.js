
Brick.ui.Overlay = function(config) {
  Brick.Events.prototype.constructor.call(this);
  this.$container = config.container;

  var scope = this;
  this.$container.find('.close-button').click(function() {
    this.blur();
    scope.hide();
  });
};

var proto = Brick.ui.Overlay.prototype = Object.create(Brick.Events.prototype);

proto.show = function() {
  if (this.$container.is(':hidden')) {
    this.$container.show().animate({ top:'25%' }, 300);
  }
};

proto.hide = function() {this._isHidden = true;
  if (!this.$container.is(':hidden')) {
    var scope = this;
    this.$container.animate({ top:'100%' }, 300, null, function() {
      scope.$container.hide();
    });
  }
};
