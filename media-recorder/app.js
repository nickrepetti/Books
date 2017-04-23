(function() {
  "use strict";

  const hasGetUserMedia = (navigator.getUserMedia ||
                           navigator.webkitGetUserMedia ||
                           navigator.mozGetUserMedia ||
                           navigator.msGetUserMedia);

  const recordButton = document.getElementById("recBtn");

  recordButton.addEventListener("click", (event) => {
    if (hasGetUserMedia)  {
      const opts = {
        video: true,
        audio: false
      };

      navigator.getUserMedia(
        opts, 
        (stream) => {
          const videoElement = document.getElementById("videoElement");
          videoElement.src = window.URL.createObjectURL(stream);
          videoElement.play();
        },
        (e) => {
          console.log(e);
        }
      );
    } else {
      console.log("Browser does not support getUserMedia");
    }
  });
})();

