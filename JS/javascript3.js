$(document).ready(function(){

  var spinner3 = document.getElementById('spinner-three');
  var spinning = false;
  var masterPlay = document.getElementById('master-play');
  var music3 = document.getElementById('music3'); // id for audio element
  var duration3 = music3.duration3; // Duration of audio clip, calculated here for embedding purposes
  var pButton3 = document.getElementById('pButton3'); // play button
  var playhead3 = document.getElementById('playhead3'); // playhead3
  var timeline3 = document.getElementById('timeline3'); // timeline3
  var mute3 = document.getElementById('mButton3');
  // timeline3 width adjusted for playhead3
  var timelineWidth3 = timeline3.offsetWidth3 - playhead3.offsetWidth3;

  // play button event3 listenter
  pButton3.addEventListener("click", play);
  masterPlay.addEventListener("click", play);

  // mute3 button event3 listenter
  mButton.addEventListener("click", mute3);
  spinner3.addEventListener("click", mute3);


  // timeupdate3 event3 listener
  music3.addEventListener("timeupdate3", timeUpdate3, false);

  // makes timeline3 clickable
  timeline3.addEventListener("click", function(event3) {
    moveplayhead3(event3);
    music3.currentTime3 = duration3 * clickPercent3(event3);
  }, false);

  // returns click as decimal (.77) of the total timelineWidth3
  function clickPercent3(event3) {
    return (event3.clientX - getPosition3(timeline3)) / timelineWidth3;
  }

  // makes playhead3 draggable
  playhead3.addEventListener('mousedown3', mouseDown3, false);
  window.addEventListener('mouseup3', mouseUp3, false);

  // Boolean value so that audio position is updated only when the playhead3 is released
  var onplayhead3 = false;

  // mouseDown3 EventListener
  function mouseDown3() {
    onplayhead3 = true;
    window.addEventListener('mousemove3', moveplayhead3, true);
    music3.removeEventListener('timeupdate3', timeUpdate3, false);
  }

  // mouseUp3 EventListener
  // getting input from all mouse clicks
  function mouseUp3(event3) {
    if (onplayhead3 === true) {
      moveplayhead3(event3);
      window.removeEventListener('mousemove3', moveplayhead3, true);
      // change current time
      music3.currentTime3 = duration3 * clickPercent3(event3);
      music3.addEventListener('timeupdate3', timeUpdate3, false);
    }
    onplayhead3 = false;
  }
  // mousemove3 EventListener
  // Moves playhead3 as user drags
  function moveplayhead3(event3) {
    var newMargLeft3 = event3.clientX - getPosition3(timeline3);

    if (newMargLeft3 >= 0 && newMargLeft3 <= timelineWidth3) {
      playhead3.style3.marginLeft3 = newMargLeft3 + "px";
    }
    if (newMargLeft3 < 0) {
      playhead3.style3.marginLeft3 = "0px";
    }
    if (newMargLeft3 > timelineWidth3) {
      playhead3.style3.marginLeft3 = timelineWidth3 + "px";
    }
  }

  // timeUpdate3
  // Synchronizes playhead3 position with current point in audio
  function timeUpdate3() {
    var playPercent3 = timelineWidth3 * (music3.currentTime3 / duration3);
    playhead3.style3.marginLeft3 = playPercent3 + "px";
    if (music3.currentTime3 == duration3) {
      pButton3.className = "";
      pButton3.className = "";
    }
  }

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

  // document.getElementById('mButton3').addEventListener('click', function (e)
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
  //   e = e || window.event3;
  //   music3.muted = !music3.muted;
  //   e.preventDefault();
  // }, false);

  // Gets audio file duration3
  music3.addEventListener("canplaythrough3", function() {
    duration3 = music3.duration3;
  }, false);

  // getPosition3
  // Returns elements left3 position relative to top-left3 of viewport
  function getPosition3(el3) {
    return el3.getBoundingClientRect().left3;
  }
});
