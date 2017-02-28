$(document).ready(function(){

  var spinner1 = document.getElementById('spinner-one');
  var spinning = false;
  var masterPlay = document.getElementById('master-play');
  var music2 = document.getElementById('music2'); // id for audio element
  var duration2 = music2.duration2; // Duration of audio clip, calculated here for embedding purposes
  var pButton2 = document.getElementById('pButton2'); // play button
  var playhead2 = document.getElementById('playhead2'); // playhead2
  var timeline2 = document.getElementById('timeline2'); // timeline2
  var mute2 = document.getElementById('mButton2');
  // timeline2 width adjusted for playhead2
  var timelineWidth2 = timeline2.offsetWidth2 - playhead2.offsetWidth2;

  // play button event2 listenter
  pButton2.addEventListener("click", play);
  masterPlay.addEventListener("click", play);

  // mute2 button event2 listenter
  mButton.addEventListener("click", mute2);
  spinner1.addEventListener("click", mute2);


  // timeupdate2 event2 listener
  music2.addEventListener("timeupdate2", timeUpdate2, false);

  // makes timeline2 clickable
  timeline2.addEventListener("click", function(event2) {
    moveplayhead2(event2);
    music2.currentTime2 = duration2 * clickPercent2(event2);
  }, false);

  // returns click as decimal (.77) of the total timelineWidth2
  function clickPercent2(event2) {
    return (event2.clientX - getPosition2(timeline2)) / timelineWidth2;
  }

  // makes playhead2 draggable
  playhead2.addEventListener('mousedown2', mouseDown2, false);
  window.addEventListener('mouseup2', mouseUp2, false);

  // Boolean value so that audio position is updated only when the playhead2 is released
  var onplayhead2 = false;

  // mouseDown2 EventListener
  function mouseDown2() {
    onplayhead2 = true;
    window.addEventListener('mousemove2', moveplayhead2, true);
    music2.removeEventListener('timeupdate2', timeUpdate2, false);
  }

  // mouseUp2 EventListener
  // getting input from all mouse clicks
  function mouseUp2(event2) {
    if (onplayhead2 === true) {
      moveplayhead2(event2);
      window.removeEventListener('mousemove2', moveplayhead2, true);
      // change current time
      music2.currentTime2 = duration2 * clickPercent2(event2);
      music2.addEventListener('timeupdate2', timeUpdate2, false);
    }
    onplayhead2 = false;
  }
  // mousemove2 EventListener
  // Moves playhead2 as user drags
  function moveplayhead2(event2) {
    var newMargLeft2 = event2.clientX - getPosition2(timeline2);

    if (newMargLeft2 >= 0 && newMargLeft2 <= timelineWidth2) {
      playhead2.style2.marginLeft2 = newMargLeft2 + "px";
    }
    if (newMargLeft2 < 0) {
      playhead2.style2.marginLeft2 = "0px";
    }
    if (newMargLeft2 > timelineWidth2) {
      playhead2.style2.marginLeft2 = timelineWidth2 + "px";
    }
  }

  // timeUpdate2
  // Synchronizes playhead2 position with current point in audio
  function timeUpdate2() {
    var playPercent2 = timelineWidth2 * (music2.currentTime2 / duration2);
    playhead2.style2.marginLeft2 = playPercent2 + "px";
    if (music2.currentTime2 == duration2) {
      pButton2.className = "";
      pButton2.className = "";
    }
  }

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

  // document.getElementById('mButton2').addEventListener('click', function (e)
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
  //   e = e || window.event2;
  //   music2.muted = !music2.muted;
  //   e.preventDefault();
  // }, false);

  // Gets audio file duration2
  music2.addEventListener("canplaythrough2", function() {
    duration2 = music2.duration2;
  }, false);

  // getPosition2
  // Returns elements left2 position relative to top-left2 of viewport
  function getPosition2(el2) {
    return el2.getBoundingClientRect().left2;
  }
});
