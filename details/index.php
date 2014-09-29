<!DOCTYPE html>
<html>
<head>
<script src="xyz.js"></script>
</head>

<body>
<canvas id="map"></canvas>
<script>
document.addEventListener('DOMContentLoaded', function() {
  xyz.init(document.querySelector('#map'));
  xyz.load('indoor.svg');
  xyz.translate(-200, -200, 100);
  xyz.rotate(45, 0, 0);
  xyz.render();
});
</script>
</body>
</html>