
var Picker = (function() {

  function constructor(srcField, pickerDom) {
    var
      $srcField = $(srcField),
      $pickerDom = $(pickerDom),
      $options = $pickerDom.find('.picker-option');

    $pickerDom.find('button').click(function() {
      $pickerDom.hide();
    });

    $srcField.focus(function() {
      $pickerDom.show();

      $options.each(function(index, option) {
        if ($(option).data('value') === $srcField.val()) {
          $(option).addClass('selected');
        } else {
          $(option).removeClass('selected');
        }
      });

      $options.one('click', function(e) {
        $srcField.val($(e.target).data('value'));
        $pickerDom.hide();
      });
    });
  }

  var prototype = constructor.prototype;

  return constructor;

}());
