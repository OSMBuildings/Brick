
var Picker = (function() {

  function constructor(srcField, pickerDom) {
    var
      $srcField = $(srcField),
      $pickerDom = $(pickerDom),
      $options = $pickerDom.find('.picker-option');

    $pickerDom.find('button').click(function() {
      $pickerDom.hide();
    });

    $options.click(function(e) {
      $srcField.val($(this).data('value'));
      $pickerDom.hide();
    });

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
    });
  }

  var prototype = constructor.prototype;

  return constructor;

}());
