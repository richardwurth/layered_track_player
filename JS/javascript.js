$(document).ready(function(){


  var spinner2 = document.getElementById('spinner-two'); // For adding control/functionality to the Vinyl Record icon
  var masterPlay = document.getElementById('master-play'); // Ties all tracks to one play button in order to start playing all tracks at once.
  var music = document.getElementById('music'); // id for audio element
  var pButton = document.getElementById('pButton'); // play button; redirects to the var masterPlay
  var mute = document.getElementById('mButton'); //Ties in the Mute functionality to the Vinyl Record icon

  // play button event listenter
  pButton.addEventListener("click", play);
  masterPlay.addEventListener("click", play);

  // mute button event listenter
  mButton.addEventListener("click", mute);
  spinner2.addEventListener("click", mute);

  //Play and Pause
  function play() {
    // start music
    var x = document.getElementById("spinner-two");

    if (x.classList.contains("rotateAnimate") && x.classList.contains("stopAnimation")) {
      x.classList.remove("stopAnimation");
    } else if (x.classList.contains("rotateAnimate")) {
      x.classList.add("stopAnimation");
    } else {
      x.classList.add("rotateAnimate");
    }
    if (music.paused) {
      music.play();
    } else {
      music.pause();
    }
  }

  document.getElementById('spinner-two').addEventListener('click', function (e)
  {
    var x = document.getElementById("spinner-two");

    if (x.classList.contains("rotateAnimate") && x.classList.contains("stopAnimation")) {
      x.classList.remove("stopAnimation");
    } else if (x.classList.contains("rotateAnimate")) {
      x.classList.add("stopAnimation");
    } else {
      x.classList.add("rotateAnimate");
    }

    e = e || window.event;
    music.muted = !music.muted;
    e.preventDefault();
  }, false);
});
