"use strict";

let recordButton = document.getElementById("recBtn");
let stopButton = document.getElementById("stopBtn");
let downloadButton = document.getElementById("downloadBtn");
let videoElement = document.getElementById("videoElement");

let mediaRecorder;
let recordedMedia;

stopButton.addEventListener("click", (event) => {
  recordButton.disabled = false;
  stopButton.disabled = true;
  downloadButton.disabled = false;
  mediaRecorder.stop();
});

downloadButton.addEventListener("click", (event) => {
  const url = URL.createObjectURL(recordedMedia);

  let a = document.createElement("a");
  a.style = "display: none";
  a.href = url;
  a.download = "media_" + new Date().getTime() + ".webm";

  document.body.appendChild(a);
  a.click();

  URL.revokeObjectURL(url);
  document.body.removeChild(a);
});

recordButton.addEventListener("click", (event) => {
  recordButton.disabled = true;
  stopButton.disabled = false;
  downloadButton.disabled = true;

  navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
  }).then((stream) => {
    let recordedData = [];

    videoElement.src = URL.createObjectURL(stream);
    videoElement.controls = false;
    mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = (event) => { 
      if (event.data.size > 0) {
        recordedData.push(event.data);
      }
    };

    mediaRecorder.onstop = (event) => {
      mediaRecorder.stream.getTracks().forEach((track) => {
        track.stop();
      });

      recordedMedia = new Blob(recordedData, { 
        type: "video/webm" 
      });
      videoElement.src = URL.createObjectURL(recordedMedia);
      videoElement.controls = true;
    };

    mediaRecorder.start(1000);
  });
});

