$(document).ready(function(){

  var spinner1 = document.getElementById('spinner-one');
  var masterPlay = document.getElementById('master-play');
  var music2 = document.getElementById('music2'); // id for audio element
  var pButton2 = document.getElementById('pButton2'); // play button
  var mute2 = document.getElementById('mButton2');

  // play button event2 listenter
  pButton2.addEventListener("click", play);
  masterPlay.addEventListener("click", play);

  // mute2 button event2 listenter
  mButton.addEventListener("click", mute2);
  spinner1.addEventListener("click", mute2);

  //Play and Pause
  function play() {
    // start music2
    var x = document.getElementById("spinner-one");

    if (x.classList.contains("rotateAnimate") && x.classList.contains("stopAnimation")) {
      x.classList.remove("stopAnimation");
    } else if (x.classList.contains("rotateAnimate")) {
      x.classList.add("stopAnimation");
    } else {
      x.classList.add("rotateAnimate");
    }
    if (music2.paused) {
      music2.play();
    } else {
      music2.pause();
    }
  }

  document.getElementById('spinner-one').addEventListener('click', function (e)
  {
    var x = document.getElementById("spinner-one");

    if (x.classList.contains("rotateAnimate") && x.classList.contains("stopAnimation")) {
      x.classList.remove("stopAnimation");
    } else if (x.classList.contains("rotateAnimate")) {
      x.classList.add("stopAnimation");
    } else {
      x.classList.add("rotateAnimate");
    }

    e = e || window.event2;
    music2.muted = !music2.muted;
    e.preventDefault();
  }, false);
});
