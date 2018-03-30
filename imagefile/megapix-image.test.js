window.onload = function() {
  var fileInput = document.getElementById('fileInput');
  fileInput.onchange = function() {
    var file = fileInput.files[0];

    var mpImg = new MegaPixImage(file);
   
    var resImg = document.getElementById('resultImage');
    mpImg.render(resImg, { maxWidth: 300, maxHeight: 300, quality: 0.5 });
  };
};
