$(document).ready(function(){

  var spinner4 = document.getElementById('spinner-four');
  var spinning = false;
  var masterPlay = document.getElementById('master-play');
  var music4 = document.getElementById('music4'); // id for audio element
  var duration4 = music4.duration4; // Duration of audio clip, calculated here for embedding purposes
  var pButton4 = document.getElementById('pButton4'); // play button
  var playhead4 = document.getElementById('playhead4'); // playhead4
  var timeline4 = document.getElementById('timeline4'); // timeline4
  var mute4 = document.getElementById('mButton4');
  // timeline4 width adjusted for playhead4
  var timelineWidth4 = timeline4.offsetWidth4 - playhead4.offsetWidth4;

  // play button event4 listenter
  pButton4.addEventListener("click", play);
  masterPlay.addEventListener("click", play);

  // mute4 button event4 listenter
  mButton.addEventListener("click", mute4);
  spinner4.addEventListener("click", mute4);


  // timeupdate4 event4 listener
  music4.addEventListener("timeupdate4", timeUpdate4, false);

  // makes timeline4 clickable
  timeline4.addEventListener("click", function(event4) {
    moveplayhead4(event4);
    music4.currentTime4 = duration4 * clickPercent4(event4);
  }, false);

  // returns click as decimal (.77) of the total timelineWidth4
  function clickPercent4(event4) {
    return (event4.clientX - getPosition4(timeline4)) / timelineWidth4;
  }

  // makes playhead4 draggable
  playhead4.addEventListener('mousedown4', mouseDown4, false);
  window.addEventListener('mouseup4', mouseUp4, false);

  // Boolean value so that audio position is updated only when the playhead4 is released
  var onplayhead4 = false;

  // mouseDown4 EventListener
  function mouseDown4() {
    onplayhead4 = true;
    window.addEventListener('mousemove4', moveplayhead4, true);
    music4.removeEventListener('timeupdate4', timeUpdate4, false);
  }

  // mouseUp4 EventListener
  // getting input from all mouse clicks
  function mouseUp4(event4) {
    if (onplayhead4 === true) {
      moveplayhead4(event4);
      window.removeEventListener('mousemove4', moveplayhead4, true);
      // change current time
      music4.currentTime4 = duration4 * clickPercent4(event4);
      music4.addEventListener('timeupdate4', timeUpdate4, false);
    }
    onplayhead4 = false;
  }
  // mousemove4 EventListener
  // Moves playhead4 as user drags
  function moveplayhead4(event4) {
    var newMargLeft4 = event4.clientX - getPosition4(timeline4);

    if (newMargLeft4 >= 0 && newMargLeft4 <= timelineWidth4) {
      playhead4.style4.marginLeft4 = newMargLeft4 + "px";
    }
    if (newMargLeft4 < 0) {
      playhead4.style4.marginLeft4 = "0px";
    }
    if (newMargLeft4 > timelineWidth4) {
      playhead4.style4.marginLeft4 = timelineWidth4 + "px";
    }
  }

  // timeUpdate4
  // Synchronizes playhead4 position with current point in audio
  function timeUpdate4() {
    var playPercent4 = timelineWidth4 * (music4.currentTime4 / duration4);
    playhead4.style4.marginLeft4 = playPercent4 + "px";
    if (music4.currentTime4 == duration4) {
      pButton4.className = "";
      pButton4.className = "";
    }
  }

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

  // document.getElementById('mButton4').addEventListener('click', function (e)
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
  //   e = e || window.event4;
  //   music4.muted = !music4.muted;
  //   e.preventDefault();
  // }, false);

  // Gets audio file duration4
  music4.addEventListener("canplaythrough4", function() {
    duration4 = music4.duration4;
  }, false);

  // getPosition4
  // Returns elements left4 position relative to top-left4 of viewport
  function getPosition4(el4) {
    return el4.getBoundingClientRect().left4;
  }
});
