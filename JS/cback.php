<?php header('Access-Control-Allow-Origin: *'); ?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Callback</title>
</head>

<body>
<script>
function loadAsset(url, type, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.responseType = type;

  xhr.onload = function() {
    callback(xhr.response);
  };

  xhr.send();
}

function displayImage(blob) {
  let objectURL = URL.createObjectURL(blob);

  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
}

loadAsset('https://www.netty.az/imgs/logo2021.png', 'blob', displayImage);	
</script>
</body>
</html>
