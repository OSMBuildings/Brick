
Brick.PhotoColorPicker = (function() {

var $container;
var callback;

var endpoint = 'http://osmbuildings.org/brick/upload.php';
var getMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);

function captureVideo() {
  getMedia.call(this, ({ video: true }, showVideoPreview, function onError(err) {
    alert(err);
  }));
}

function showVideoPreview(stream) {
  var videoPreview = $('<video>').appendTo($container).get(0);
  videoPreview.src = window.URL ? window.URL.createObjectURL(stream) : stream;
  videoPreview.play();

  $('<button>CAPTURE</button>').appendTo($container).click(function() {
    var canvas = $('<canvas>').get(0);
    canvas.width  = videoPreview.videoWidth;
    canvas.height = videoPreview.videoHeight;

    var context = canvas.getContext('2d');
    context.drawImage(videoPreview, 0, 0);

    onCapture(canvas.toDataURL('image/jpeg'));
  });
}

function uploadImage() {
  var $upload = $('<input type="file" accept="image/*" capture="camera">').appendTo($container);
  var $progress = $('<div></div>').appendTo($container);

  $upload.on('change', function() {
    var files = $upload.prop('files');
    var formData = new FormData();
    formData.append('upload', files[0]);
    $progress.text('');

    var xhr = new XMLHttpRequest();
    xhr.upload.addEventListener('progress', function(e) {
      if (e.lengthComputable) {
        var percentComplete = Math.round(e.loaded*100/e.total);
        $progress.text((percentComplete <<0) +'%');
      }
    }
    , false);
    xhr.addEventListener('load', function(e) {
      onCapture(endpoint +'?show=1');
    }, false);
    xhr.open('POST', endpoint);
    xhr.send(formData);
  });
}

function onCapture(url) {
  var img = new Image();
  img.crossOrigin = '';
  img.onload = function() {
    $container.empty();
    var $canvas = $('<canvas></canvas>').appendTo($container);
    $canvas.prop('width', this.width);
    $canvas.prop('height', this.height);
    var context = $canvas.get(0).getContext('2d');
    context.drawImage(this, 0, 0);

    $canvas.click(function(e) {
      var radius = 10;
      var x = e.offsetX ? e.offsetX : e.pageX - $canvas.prop('offsetLeft');
      var y = e.offsetY ? e.offsetY : e.pageY - $canvas.prop('offsetTop');
      var imgData = context.getImageData(x-radius, y-radius, 2*radius, 2*radius).data;
      var r = 0, g = 0, b = 0;
      var len = imgData.length;
      for (var i = 0; i < len-3; i+=4) {
        r += imgData[i  ];
        g += imgData[i+1];
        b += imgData[i+2];
      }
      var len4 = len/4;
      var hex = (b/len4) | (g/len4 <<8) | (r/len4<<16);
      callback('#'+ (0x1000000 + hex).toString(16).slice(1));
      $container.hide();
    });
  };
  img.src = url;
}

return {
  capture: function(config) {
    $container = config.$container;
    $('<button class="close-button">✕</button>').appendTo($container).click($container.hide);

    callback = config.callback;

    $container.show();
//  if (/iP(ad|hone|od)/g.test(navigator.userAgent)) {
    if (getMedia) {
      uploadImage();
    } else {
      captureVideo();
    }
  }
};

}());
