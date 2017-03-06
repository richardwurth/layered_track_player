$(document).ready(function(){

  var spinner6 = document.getElementById('spinner-six');
  var masterPlay = document.getElementById('master-play');
  var music6 = document.getElementById('music6'); // id for audio element
  var pButton6 = document.getElementById('pButton6'); // play button
  var mute6 = document.getElementById('mButton6');

  // play button event6 listenter
  pButton6.addEventListener("click", play);
  masterPlay.addEventListener("click", play);

  // mute6 button event6 listenter
  mButton.addEventListener("click", mute6);
  spinner6.addEventListener("click", mute6);

  //Play and Pause
  function play() {
    // start music6
    var x = document.getElementById("spinner-six");

    if (x.classList.contains("rotateAnimate") && x.classList.contains("stopAnimation")) {
      x.classList.remove("stopAnimation");
    } else if (x.classList.contains("rotateAnimate")) {
      x.classList.add("stopAnimation");
    } else {
      x.classList.add("rotateAnimate");
    }
    if (music6.paused) {
      music6.play();
    } else {
      music6.pause();
    }
  }

  document.getElementById('spinner-six').addEventListener('click', function (e)
  {
    var x = document.getElementById("spinner-six");

    if (x.classList.contains("rotateAnimate") && x.classList.contains("stopAnimation")) {
      x.classList.remove("stopAnimation");
    } else if (x.classList.contains("rotateAnimate")) {
      x.classList.add("stopAnimation");
    } else {
      x.classList.add("rotateAnimate");
    }

    e = e || window.event6;
    music6.muted = !music6.muted;
    e.preventDefault();
  }, false);
});
