
var Picker = (function() {

  function constructor(srcField, pickerDom) {
    Events.call(this);

    var
      $srcField = $(srcField),
      $pickerDom = $(pickerDom),
      $options = $pickerDom.find('.picker-option');

    $pickerDom.find('button').click(function() {
      $pickerDom.hide();
      this.emit('HIDE');
    }.bind(this));

    $options.click(function(e) {
      var $target = $(e.target);
      if (!$target.is('.picker-option')) {
        $target = $target.parent('.picker-option');
      }
      var value = $target.data('value');
      $srcField.val(value);
      $pickerDom.hide();
      this.emit('SELECT', value);
    }.bind(this));

    $srcField.focus(function(e) {
      $srcField.blur();
      $pickerDom.show();

      $options.each(function(index, option) {
        if ($(option).data('value') === $srcField.val()) {
          $(option).addClass('selected');
        } else {
          $(option).removeClass('selected');
        }
      });

      this.emit('SHOW');
    }.bind(this));
  }

  var prototype = constructor.prototype = Object.create(Events.prototype);

  return constructor;

}());
