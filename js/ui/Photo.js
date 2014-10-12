
Brick.Photo = function(config) {
  this.callback = config.callback;
//  var canvas = document.createElement('CANVAS');
//  this.context = this.$colorPicker.getContext('2d');

  navigator.myGetMedia = (navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia);

  if (isIOS) {
    this.uploadImage();
  } else {
    this.captureVideo();
  }
};

var proto = Brick.Photo.prototype;

proto.captureVideo = function() {
//  this.$colorPicker = $('#color-picker');
//  this.context = this.$colorPicker.getContext('2d');

//  var scope = this;
  function showVideoPreview(stream) {
    $('#camera-overlay').show();

    $('#video-preview')
      .attr('src', window.URL ? window.URL.createObjectURL(stream) : stream)
      .attr.play();
//    .attr('play')();

    $('#capture-image').click(function() {
      $('#camera-overlay').hide();
//        scope.$colorPicker.show();
//        scope.context.drawImage($('#video-preview'), 0, 0, $('#video-preview').width(), $('#video-preview').height());
    });
  }

  navigator.myGetMedia({ video: true }, showVideoPreview, function(err) { alert(err); });
};

proto.uploadImage = function() {
  function uploadProgress(e) {
    if (e.lengthComputable) {
      var percentComplete = Math.round(e.loaded*100/e.total);
      $('#progress').text((percentComplete <<0) +'%');
    }
  }

//  var scope = this;
  function uploadComplete(e) {
    var img = new Image();
    img.onload = function() {
//        scope.$colorPicker.show();
//      scope.context.drawImage(this, 0, 0, img.width, img.height);
    };
    img.src = 'http://osmbuildings.org/brick/upload.php?show=1';
  }

  $('#upload').on('change', function() {
    var files = $('#upload').attr('files');
    var formData = new FormData();
    formData.append('upload', files[0]);
    $('#progress').text('');

    var xhr = new XMLHttpRequest();
    xhr.upload.addEventListener('progress', uploadProgress, false);
    xhr.addEventListener('load', uploadComplete, false);
    xhr.open('POST', 'upload.php');
    xhr.send(formData);
  });
};
