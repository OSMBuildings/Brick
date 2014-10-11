<?php
if (isset($_FILES["upload"])) {
  move_uploaded_file($_FILES["upload"]["tmp_name"], "./upload.jpg");
} else if (isset($_GET["show"])) {
  header("Content-Type: image/jpeg");
  readfile("./upload.jpg");
}
?>