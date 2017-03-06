$(document).ready(function(){

  var spinner3 = document.getElementById('spinner-three');
  var masterPlay = document.getElementById('master-play');
  var music3 = document.getElementById('music3'); // id for audio element
  var pButton3 = document.getElementById('pButton3'); // play button
  var mute3 = document.getElementById('mButton3');

  // play button event3 listenter
  pButton3.addEventListener("click", play);
  masterPlay.addEventListener("click", play);

  // mute3 button event3 listenter
  mButton.addEventListener("click", mute3);
  spinner3.addEventListener("click", mute3);

  //Play and Pause
  function play() {
    // start music3
    var x = document.getElementById("spinner-three");

    if (x.classList.contains("rotateAnimate") && x.classList.contains("stopAnimation")) {
      x.classList.remove("stopAnimation");
    } else if (x.classList.contains("rotateAnimate")) {
      x.classList.add("stopAnimation");
    } else {
      x.classList.add("rotateAnimate");
    }
    if (music3.paused) {
      music3.play();
    } else {
      music3.pause();
    }
  }

  document.getElementById('spinner-three').addEventListener('click', function (e)
  {
    var x = document.getElementById("spinner-three");

    if (x.classList.contains("rotateAnimate") && x.classList.contains("stopAnimation")) {
      x.classList.remove("stopAnimation");
    } else if (x.classList.contains("rotateAnimate")) {
      x.classList.add("stopAnimation");
    } else {
      x.classList.add("rotateAnimate");
    }

    e = e || window.event3;
    music3.muted = !music3.muted;
    e.preventDefault();
  }, false);
});
