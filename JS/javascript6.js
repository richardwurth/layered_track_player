$(document).ready(function(){

  var spinner6 = document.getElementById('spinner-six');
  var spinning = false;
  var masterPlay = document.getElementById('master-play');
  var music6 = document.getElementById('music6'); // id for audio element
  var duration6 = music6.duration6; // Duration of audio clip, calculated here for embedding purposes
  var pButton6 = document.getElementById('pButton6'); // play button
  var playhead6 = document.getElementById('playhead6'); // playhead6
  var timeline6 = document.getElementById('timeline6'); // timeline6
  var mute6 = document.getElementById('mButton6');
  // timeline6 width adjusted for playhead6
  var timelineWidth6 = timeline6.offsetWidth6 - playhead6.offsetWidth6;

  // play button event6 listenter
  pButton6.addEventListener("click", play);
  masterPlay.addEventListener("click", play);

  // mute6 button event6 listenter
  mButton.addEventListener("click", mute6);
  spinner6.addEventListener("click", mute6);


  // timeupdate6 event6 listener
  music6.addEventListener("timeupdate6", timeUpdate6, false);

  // makes timeline6 clickable
  timeline6.addEventListener("click", function(event6) {
    moveplayhead6(event6);
    music6.currentTime6 = duration6 * clickPercent6(event6);
  }, false);

  // returns click as decimal (.77) of the total timelineWidth6
  function clickPercent6(event6) {
    return (event6.clientX - getPosition6(timeline6)) / timelineWidth6;
  }

  // makes playhead6 draggable
  playhead6.addEventListener('mousedown6', mouseDown6, false);
  window.addEventListener('mouseup6', mouseUp6, false);

  // Boolean value so that audio position is updated only when the playhead6 is released
  var onplayhead6 = false;

  // mouseDown6 EventListener
  function mouseDown6() {
    onplayhead6 = true;
    window.addEventListener('mousemove6', moveplayhead6, true);
    music6.removeEventListener('timeupdate6', timeUpdate6, false);
  }

  // mouseUp6 EventListener
  // getting input from all mouse clicks
  function mouseUp6(event6) {
    if (onplayhead6 === true) {
      moveplayhead6(event6);
      window.removeEventListener('mousemove6', moveplayhead6, true);
      // change current time
      music6.currentTime6 = duration6 * clickPercent6(event6);
      music6.addEventListener('timeupdate6', timeUpdate6, false);
    }
    onplayhead6 = false;
  }
  // mousemove6 EventListener
  // Moves playhead6 as user drags
  function moveplayhead6(event6) {
    var newMargLeft6 = event6.clientX - getPosition6(timeline6);

    if (newMargLeft6 >= 0 && newMargLeft6 <= timelineWidth6) {
      playhead6.style6.marginLeft6 = newMargLeft6 + "px";
    }
    if (newMargLeft6 < 0) {
      playhead6.style6.marginLeft6 = "0px";
    }
    if (newMargLeft6 > timelineWidth6) {
      playhead6.style6.marginLeft6 = timelineWidth6 + "px";
    }
  }

  // timeUpdate6
  // Synchronizes playhead6 position with current point in audio
  function timeUpdate6() {
    var playPercent6 = timelineWidth6 * (music6.currentTime6 / duration6);
    playhead6.style6.marginLeft6 = playPercent6 + "px";
    if (music6.currentTime6 == duration6) {
      pButton6.className = "";
      pButton6.className = "";
    }
  }

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

  // document.getElementById('mButton6').addEventListener('click', function (e)
  // {
  //   var x = document.getElementById("spinner-one");
  //
  //   if (x.classList.contains("rotateAnimate") && x.classList.contains("stopAnimation")) {
  //     x.classList.remove("stopAnimation");
  //   } else if (x.classList.contains("rotateAnimate")) {
  //     x.classList.add("stopAnimation");
  //   } else {
  //     x.classList.add("rotateAnimate");
  //   }
  //
  //   e = e || window.event6;
  //   music6.muted = !music6.muted;
  //   e.preventDefault();
  // }, false);

  // Gets audio file duration6
  music6.addEventListener("canplaythrough6", function() {
    duration6 = music6.duration6;
  }, false);

  // getPosition6
  // Returns elements left6 position relative to top-left6 of viewport
  function getPosition6(el6) {
    return el6.getBoundingClientRect().left6;
  }
});
