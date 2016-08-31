
var Picker = (function() {

  function constructor(srcField, pickerDom) {
    var
      $srcField = $(srcField),
      $pickerDom = $(pickerDom),
      $options = $(pickerDom);

    $srcField.focus(function() {
      $pickerDom.show();

      $pickerDom.find('button').click(function() {
        $pickerDom.hide();
      });

      $pickerDom.find('.roof-icon').click(function(e) {
        debugger
        var itemValue = $(e.target).data('value');
        $(input).val(itemValue);
      });

      $pickerDom.find('.roof-icon').each(function(index, item) {
        debugger
        var itemValue = $(e.target).data('value');
        if (itemValue === $(input).val()) {
          $(item).addClass('selected');
        } else {
          $(item).removeClass('selected');
        }
      });
    });
  };

  return constructor;

}());
