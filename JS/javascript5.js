$(document).ready(function(){

  var spinner5 = document.getElementById('spinner-five');
  var spinning = false;
  var masterPlay = document.getElementById('master-play');
  var music5 = document.getElementById('music5'); // id for audio element
  var duration5 = music5.duration5; // Duration of audio clip, calculated here for embedding purposes
  var pButton5 = document.getElementById('pButton5'); // play button
  var playhead5 = document.getElementById('playhead5'); // playhead5
  var timeline5 = document.getElementById('timeline5'); // timeline5
  var mute5 = document.getElementById('mButton5');
  // timeline5 width adjusted for playhead5
  var timelineWidth5 = timeline5.offsetWidth5 - playhead5.offsetWidth5;

  // play button event5 listenter
  pButton5.addEventListener("click", play);
  masterPlay.addEventListener("click", play);

  // mute5 button event5 listenter
  mButton.addEventListener("click", mute5);
  spinner5.addEventListener("click", mute5);


  // timeupdate5 event5 listener
  music5.addEventListener("timeupdate5", timeUpdate5, false);

  // makes timeline5 clickable
  timeline5.addEventListener("click", function(event5) {
    moveplayhead5(event5);
    music5.currentTime5 = duration5 * clickPercent5(event5);
  }, false);

  // returns click as decimal (.77) of the total timelineWidth5
  function clickPercent5(event5) {
    return (event5.clientX - getPosition5(timeline5)) / timelineWidth5;
  }

  // makes playhead5 draggable
  playhead5.addEventListener('mousedown5', mouseDown5, false);
  window.addEventListener('mouseup5', mouseUp5, false);

  // Boolean value so that audio position is updated only when the playhead5 is released
  var onplayhead5 = false;

  // mouseDown5 EventListener
  function mouseDown5() {
    onplayhead5 = true;
    window.addEventListener('mousemove5', moveplayhead5, true);
    music5.removeEventListener('timeupdate5', timeUpdate5, false);
  }

  // mouseUp5 EventListener
  // getting input from all mouse clicks
  function mouseUp5(event5) {
    if (onplayhead5 === true) {
      moveplayhead5(event5);
      window.removeEventListener('mousemove5', moveplayhead5, true);
      // change current time
      music5.currentTime5 = duration5 * clickPercent5(event5);
      music5.addEventListener('timeupdate5', timeUpdate5, false);
    }
    onplayhead5 = false;
  }
  // mousemove5 EventListener
  // Moves playhead5 as user drags
  function moveplayhead5(event5) {
    var newMargLeft5 = event5.clientX - getPosition5(timeline5);

    if (newMargLeft5 >= 0 && newMargLeft5 <= timelineWidth5) {
      playhead5.style5.marginLeft5 = newMargLeft5 + "px";
    }
    if (newMargLeft5 < 0) {
      playhead5.style5.marginLeft5 = "0px";
    }
    if (newMargLeft5 > timelineWidth5) {
      playhead5.style5.marginLeft5 = timelineWidth5 + "px";
    }
  }

  // timeUpdate5
  // Synchronizes playhead5 position with current point in audio
  function timeUpdate5() {
    var playPercent5 = timelineWidth5 * (music5.currentTime5 / duration5);
    playhead5.style5.marginLeft5 = playPercent5 + "px";
    if (music5.currentTime5 == duration5) {
      pButton5.className = "";
      pButton5.className = "";
    }
  }

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

  // document.getElementById('mButton5').addEventListener('click', function (e)
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
  //   e = e || window.event5;
  //   music5.muted = !music5.muted;
  //   e.preventDefault();
  // }, false);

  // Gets audio file duration5
  music5.addEventListener("canplaythrough5", function() {
    duration5 = music5.duration5;
  }, false);

  // getPosition5
  // Returns elements left5 position relative to top-left5 of viewport
  function getPosition5(el5) {
    return el5.getBoundingClientRect().left5;
  }
});
