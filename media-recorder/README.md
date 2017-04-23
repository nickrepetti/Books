# Media Recorder

The purpose of this app is to allow users to record video from their webcams.

This app uses the getUserMedia API to record video from a user's webcam.
Google Chrome only allows use of the API through secure origins only.
See: https://www.chromium.org/Home/chromium-security/deprecating-powerful-features-on-insecure-origins

Because of this, the app must be run through HTTPS or localhost.
I have included a static http file server in order to run the app locally.

To run the app:
1. cd to the top level directory
2. Run the command "node static-server.js"
3. Open a web browser and go to localhost:9000/index.html

