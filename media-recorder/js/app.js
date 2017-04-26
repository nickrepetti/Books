(function() {
  "use strict";

  const hasGetUserMedia = (navigator.getUserMedia ||
                           navigator.webkitGetUserMedia ||
                           navigator.mozGetUserMedia ||
                           navigator.msGetUserMedia);

  if (hasGetUserMedia)  {
    const recordButton = document.getElementById("recBtn");
    const stopButton = document.getElementById("stopBtn");
    let videoElement = document.getElementById("videoElement");
    let recordedChunks;
    let mediaRecorder;

    const captureData = function(event) {
      if (event.data.size > 0) {
        recordedChunks.push(event.data);
      }
    };

    const finishRecording = function(event) {
      const buffer = new Blob(recordedChunks);
      videoElement.src = window.URL.createObjectURL(buffer);
      videoElement.play();
      videoElement.controls = true;
    };

    stopButton.addEventListener("click", (event) => {
      recordButton.disabled = false;
      stopButton.disabled = true;

      mediaRecorder.stream.getTracks().forEach((track) => {
        track.stop();
      });

      mediaRecorder.stop();
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

          videoElement.src = window.URL.createObjectURL(stream);
          recordedChunks = [];

          mediaRecorder = new MediaRecorder(stream);
          mediaRecorder.ondataavailable = captureData;
          mediaRecorder.onstop = finishRecording;
          mediaRecorder.start(1000);
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

