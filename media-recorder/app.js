(function() {

  const hasGetUserMedia = (navigator.getUserMedia ||
                           navigator.webkitGetUserMedia ||
                           navigator.mozGetUserMedia ||
                           navigator.msGetUserMedia);

  if (hasGetUserMedia)  {
    const opts = {
      video: true,
      audio: false
    };

    navigator.getUserMedia(
      opts, 
      (stream) => {
        const videoContainer = document.getElementById("videoContainer");
        videoContainer.src = window.URL.createObjectURL(localMediaStream);
      },
      (e) => {
        if (e.name === "PermissionDeniedError") {
          alert("Please enable webcam permissions to use this app");
        } else {
          alert("Something went wrong, please try again.");
        }
        console.log(e);
      }
    );
  } else {
    alert("Sorry, the browser you are using does not support webcam recordings.");
  }
})();

