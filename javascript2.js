$(document).ready(function(){

  var music2 = document.getElementById('music2'); // id for audio element
  var duration2 = music2.duration2; // Duration of audio clip, calculated here for embedding purposes
  var pButton2 = document.getElementById('pButton2'); // play button
  var playhead2 = document.getElementById('playhead2'); // playhead2
  var timeline2 = document.getElementById('timeline2'); // timeline2
  var mute2 = document.getElementById('mButton2');
  // timeline2 width adjusted for playhead2
  var timelineWidth2 = timeline2.offsetWidth - playhead2.offsetWidth;

  // play button event listenter
  pButton2.addEventListener("click", play);

  // mute2 button event listenter
  mButton.addEventListener("click", mute2);

  // timeupdate2 event listener
  music2.addEventListener("timeupdate2", timeUpdate2, false);

  // makes timeline2 clickable
  timeline2.addEventListener("click", function(event) {
      moveplayhead2(event);
      music2.currentTime = duration2 * clickPercent2(event);
  }, false);

  // returns click as decimal (.77) of the total timelineWidth2
  function clickPercent2(event) {
      return (event.clientX - getPosition2(timeline2)) / timelineWidth2;
  }

  // makes playhead2 draggable
  playhead2.addEventListener('mousedown', mouseDown, false);
  window.addEventListener('mouseup', mouseUp, false);

  // Boolean value so that audio position is updated only when the playhead2 is released
  var onplayhead = false;

  // mouseDown EventListener
  function mouseDown() {
      onplayhead = true;
      window.addEventListener('mousemove', moveplayhead2, true);
      music2.removeEventListener('timeupdate2', timeUpdate2, false);
  }

  // mouseUp EventListener
  // getting input from all mouse clicks
  function mouseUp(event) {
      if (onplayhead == true) {
          moveplayhead2(event);
          window.removeEventListener('mousemove', moveplayhead2, true);
          // change current time
          music2.currentTime = duration2 * clickPercent2(event);
          music2.addEventListener('timeupdate2', timeUpdate2, false);
      }
      onplayhead = false;
  }
  // mousemove EventListener
  // Moves playhead2 as user drags
  function moveplayhead2(event) {
      var newMargLeft = event.clientX - getPosition2(timeline2);

      if (newMargLeft >= 0 && newMargLeft <= timelineWidth2) {
          playhead2.style.marginLeft = newMargLeft + "px";
      }
      if (newMargLeft < 0) {
          playhead2.style.marginLeft = "0px";
      }
      if (newMargLeft > timelineWidth2) {
          playhead2.style.marginLeft = timelineWidth2 + "px";
      }
  }

  // timeUpdate2
  // Synchronizes playhead2 position with current point in audio
  function timeUpdate2() {
      var playPercent = timelineWidth2 * (music2.currentTime / duration2);
      playhead2.style.marginLeft = playPercent + "px";
      if (music2.currentTime == duration2) {
          pButton2.className = "";
          pButton2.className = "play";
      }
  }

  //Play and Pause
  function play() {
      // start music2
      if (music2.paused) {
          music2.play();
          // remove play, add pause
          pButton2.className = "";
          pButton2.className = "pause";
      } else { // pause music2
          music2.pause();
          // remove pause, add play
          pButton2.className = "";
          pButton2.className = "play";
      }
  }

  document.getElementById('mButton2').addEventListener('click', function (e)
  {
      e = e || window.event;
      music2.muted = !music2.muted;
      e.preventDefault();
  }, false);

  // Gets audio file duration2
  music2.addEventListener("canplaythrough2", function() {
      duration2 = music2.duration2;
  }, false);

  // getPosition2
  // Returns elements left position relative to top-left of viewport
  function getPosition2(el) {
      return el.getBoundingClientRect().left;
  }
});
