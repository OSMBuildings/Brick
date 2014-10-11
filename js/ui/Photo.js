
Brick.Photo = function() {
  this.$colorPicker = $('#color-picker');
  this.context = this.$colorPicker.getContext('2d');

  navigator.myGetMedia = (navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia);

  if (!isIOS) {
    this.captureVideo();
  } else {
    this.uploadFile();
  }

  var scope = this;
  this.$colorPicker.click(function(e) {
    var radius = 10;
    var x = e.offsetX ? e.offsetX : e.pageX - scope.$colorPicker.attr('offsetLeft');
    var y = e.offsetY ? e.offsetY : e.pageY - scope.$colorPicker.attr('offsetTop');
    var imgData = scope.context.getImageData(x-radius, y-radius, 2*radius, 2*radius).data;
    var r = 0, g = 0, b = 0;
    var len = imgData.length;
    for (var i = 0; i < len-3; i+=4) {
      r += imgData[i  ];
      g += imgData[i+1];
      b += imgData[i+2];
    }
    var len4 = len/4;
//  var hex = (b/len4) | (g/len4 <<8) | (r/len4<<16);
//  '#'+ (0x1000000 + hex).toString(16).slice(1);
  });
};

var proto = Brick.Photo.prototype;

proto.captureVideo = function() {
  var scope = this;
  function showPreview(stream) {
    var $cameraOverlay = $('#camera-overlay').show();
    var $videoPreview = $('#video-preview')
      .attr('src', window.URL ? window.URL.createObjectURL(stream) : stream)
      .attr.play();
//    .attr('play')();

    $('#capture').click(function() {
      $cameraOverlay.hide();
      scope.$colorPicker.show();
      scope.context.drawImage($videoPreview, 0, 0, $videoPreview.width(), $videoPreview.height());
    });
  }

  navigator.myGetMedia({ video: true }, showPreview, function(err) {
    alert(err);
  });
};

proto.uploadFile = function() {
  var scope = this;

  function uploadProgress(e) {
    var $progress = $('#progress');
    if (e.lengthComputable) {
      var percentComplete = Math.round(e.loaded*100/e.total);
      $progress.text(percentComplete.toFixed(1) +'%');
    } else {
      $progress.text('');
    }
  }

  function uploadComplete(e) {
    var img = new Image();
    img.onload = function() {
      scope.context.drawImage(this, 0, 0, img.width, img.height);
    };
    img.src = 'http://osmbuildings.org/brick/upload.php?show=1';
  }

  var $upload = $('#upload').on('change', function() {
    var files = $upload.attr('files');
    var formData = new FormData();
    formData.append('upload', files[0]);

    var xhr = new XMLHttpRequest();
    xhr.upload.addEventListener('progress', uploadProgress, false);
    xhr.addEventListener('load', uploadComplete, false);
    xhr.open('POST', 'upload.php');
    xhr.send(formData);
  });
};
