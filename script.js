var rocketDistanceFromBottom = 0;
var stepWidth = 1;

function makeUpStep() {
  var rocketElem = document.getElementById('rocket');
  rocketDistanceFromBottom += stepWidth;
  var bottomPx = rocketDistanceFromBottom + 'px';

  rocketElem.style.bottom = bottomPx;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function restart() {
  var rocketElem = document.getElementById('rocket');
  rocketElem.style.bottom = "0px";
  rocketDistanceFromBottom = 0;
}

// function to start animation
async function startAnimation() {
  var i = 0;
  while (i < 500) {
    i++;
    await sleep(3);
    if (i % 20 == 0) {
      stepWidth += 1;
    }
    makeUpStep();
  }
}
