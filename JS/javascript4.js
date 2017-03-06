$(document).ready(function(){

  var spinner4 = document.getElementById('spinner-four');
  var masterPlay = document.getElementById('master-play');
  var music4 = document.getElementById('music4'); // id for audio element
  var pButton4 = document.getElementById('pButton4'); // play button
  var mute4 = document.getElementById('mButton4');

  // play button event4 listenter
  pButton4.addEventListener("click", play);
  masterPlay.addEventListener("click", play);

  // mute4 button event4 listenter
  mButton.addEventListener("click", mute4);
  spinner4.addEventListener("click", mute4);

  //Play and Pause
  function play() {
    // start music4
    var x = document.getElementById("spinner-four");

    if (x.classList.contains("rotateAnimate") && x.classList.contains("stopAnimation")) {
      x.classList.remove("stopAnimation");
    } else if (x.classList.contains("rotateAnimate")) {
      x.classList.add("stopAnimation");
    } else {
      x.classList.add("rotateAnimate");
    }
    if (music4.paused) {
      music4.play();
    } else {
      music4.pause();
    }
  }

  document.getElementById('spinner-four').addEventListener('click', function (e)
  {
    var x = document.getElementById("spinner-four");

    if (x.classList.contains("rotateAnimate") && x.classList.contains("stopAnimation")) {
      x.classList.remove("stopAnimation");
    } else if (x.classList.contains("rotateAnimate")) {
      x.classList.add("stopAnimation");
    } else {
      x.classList.add("rotateAnimate");
    }

    e = e || window.event4;
    music4.muted = !music4.muted;
    e.preventDefault();
  }, false);
});
