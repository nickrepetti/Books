(function() {
  "use strict";

  const hasGetUserMedia = (navigator.getUserMedia ||
                           navigator.webkitGetUserMedia ||
                           navigator.mozGetUserMedia ||
                           navigator.msGetUserMedia);

  if (hasGetUserMedia)  {
    const recordButton = document.getElementById("recBtn");
    const stopButton = document.getElementById("stopBtn");
    const playButton = document.getElementById("playBtn");

    let videoElement = document.getElementById("videoElement");

    let recordedChunks;
    let mediaRecorder;

    stopButton.addEventListener("click", (event) => {
      stopButton.disabled = true;
      playButton.disabled = false;

      mediaRecorder.stop();
      mediaRecorder.stream.getTracks().forEach((track) => {
        track.stop();
      });
    });

    playButton.addEventListener("click", (event) => {
      recordButton.disabled = false;

      const buffer = new Blob(recordedChunks);
      videoElement.src = window.URL.createObjectURL(buffer);
      videoElement.play();
      videoElement.controls = true;
    });

    recordButton.addEventListener("click", (event) => {
      const options = {
        video: true
      };
 
      navigator.getUserMedia(
        options, 
        (stream) => {
          recordButton.disabled = true;
          stopButton.disabled = false;
          playButton.disabled = true;

          videoElement.src = window.URL.createObjectURL(stream);
          recordedChunks = [];

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

