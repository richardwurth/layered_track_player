$(document).ready(function(){

  var spinner5 = document.getElementById('spinner-five');
  var masterPlay = document.getElementById('master-play');
  var music5 = document.getElementById('music5'); // id for audio element
  var pButton5 = document.getElementById('pButton5'); // play button
  var mute5 = document.getElementById('mButton5');

  // play button event5 listenter
  pButton5.addEventListener("click", play);
  masterPlay.addEventListener("click", play);

  // mute5 button event5 listenter
  mButton.addEventListener("click", mute5);
  spinner5.addEventListener("click", mute5);

  //Play and Pause
  function play() {
    // start music5
    var x = document.getElementById("spinner-five");

    if (x.classList.contains("rotateAnimate") && x.classList.contains("stopAnimation")) {
      x.classList.remove("stopAnimation");
    } else if (x.classList.contains("rotateAnimate")) {
      x.classList.add("stopAnimation");
    } else {
      x.classList.add("rotateAnimate");
    }
    if (music5.paused) {
      music5.play();
    } else {
      music5.pause();
    }
  }

  document.getElementById('spinner-five').addEventListener('click', function (e)
  {
    var x = document.getElementById("spinner-five");

    if (x.classList.contains("rotateAnimate") && x.classList.contains("stopAnimation")) {
      x.classList.remove("stopAnimation");
    } else if (x.classList.contains("rotateAnimate")) {
      x.classList.add("stopAnimation");
    } else {
      x.classList.add("rotateAnimate");
    }

    e = e || window.event5;
    music5.muted = !music5.muted;
    e.preventDefault();
  }, false);
});
