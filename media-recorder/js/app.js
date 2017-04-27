(function() {
  "use strict";

  const nav = navigator;

  if (nav.getUserMedia || nav.webkitGetUserMedia || nav.mozGetUserMedia || 
      nav.msGetUserMedia) {

    let recordButton = document.getElementById("recBtn");
    let stopButton = document.getElementById("stopBtn");
    let videoElement = document.getElementById("videoElement");

    let capturedData = [];
    let mediaRecorder;

    const captureData = function(event) {
      if (event.data.size > 0) {
        capturedData.push(event.data);
      }
    };

    const startRecording = function() {
      const options = {
        video: true
      };

      nav.getUserMedia(
        options, 
        (stream) => {
          videoElement.src = window.URL.createObjectURL(stream);

          mediaRecorder = new MediaRecorder(stream);
          mediaRecorder.ondataavailable = captureData;
          mediaRecorder.onstop = stopRecording;
          mediaRecorder.start(1000);
        },
        (err) => {
          console.log(err);
        }
      );
    };

    const stopRecording = function(event) {
      mediaRecorder.stream.getTracks().forEach((track) => {
        track.stop();
      });

      const buffer = new Blob(capturedData);
      videoElement.src = window.URL.createObjectURL(buffer);
      videoElement.play();
      videoElement.controls = true;
      capturedData = [];
    };

    stopButton.addEventListener("click", (event) => {
      recordButton.disabled = false;
      stopButton.disabled = true;

      mediaRecorder.stop();
    });

    recordButton.addEventListener("click", (event) => {
      stopButton.disabled = false;

      if (recordButton.innerText === "Record") {
        recordButton.innerText = "Pause";

        if (capturedData.size > 0) {
          mediaRecorder.resume();
        } else {
          startRecording();
        }
      } else if (recordButton.innerText === "Pause") {
        recordButton.innerText = "Record";
        mediaRecorder.pause();
      }
    });
  } else {
    console.log("Browser does not support getUserMedia");
  }
})();

