(function() {
  "use strict";

  const hasGetUserMedia = (navigator.getUserMedia ||
                           navigator.webkitGetUserMedia ||
                           navigator.mozGetUserMedia ||
                           navigator.msGetUserMedia);

  if (hasGetUserMedia)  {
    const recordButton = document.getElementById("recBtn");
    const stopButton = document.getElementById("stopBtn");

    let recordedChunks = [];
    let mediaRecorder;

    stopButton.addEventListener("click", (event) => {
      mediaRecorder.stop();
      mediaRecorder.stream.getTracks().forEach((track) => {
        track.stop();
      });
    });

    recordButton.addEventListener("click", (event) => {
      const options = {
        video: true
      };
 
      navigator.getUserMedia(
        options, 
        (stream) => {
          let videoElement = document.getElementById("videoElement");
          videoElement.src = window.URL.createObjectURL(stream);

          mediaRecorder = new MediaRecorder(stream);
          mediaRecorder.start();
 
          mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
              recordedChunks.push(event.data);
            }
          };
        },
        (err) => {
          console.log(err);
        }
      );
    });
  } else {
    console.log("Browser does not support getUserMedia");
  }
})();

