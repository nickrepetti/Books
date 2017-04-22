"use strict";

(function() {
  const input = document.getElementById("text-input");
  input.addEventListener("keypress", (event) => {
    const keyCode = event.keyCode;
    if (keyCode == 81  ||
        keyCode == 113 ||
        keyCode == 87  ||
        keyCode == 119 ||
        keyCode == 88 ||
        keyCode == 120) {
      event.preventDefault();
    }
  });
})();

