/********** Vanilla swiping ***************/

var touchstarX = 0;
var touchstartY = 0;
var touchendX = 0;
var touchendY = 0;
var swipelength = 80;
var limitY = 150;

var selector = document.getElementsByTagName("body")[0];

selector.addEventListener('touchstart', function(e) {
  touchstartX = e.changedTouches[0].screenX;
  touchstartY = e.changedTouches[0].screenY;
}, false);

selector.addEventListener('touchend', function(e) {
  touchendX = e.changedTouches[0].screenX;
  touchendY = e.changedTouches[0].screenY;
  handleSwipe();
}, false);


function handleSwipe() {
  if(touchendX < touchstartX && ((touchstartX - touchendX) > swipelength) && ((touchendY - touchstartY) < limitY)) {
    var elem = document.getElementsByClassName("burgerMenu")[0];
    elem.click();
    console.log("startX: " + touchstartX + " endX: " + touchendX);
    console.log("startY: " + touchstartY + " endY: " + touchendY);
  }
  else if(touchendX > touchstartX && ((touchendX - touchstartX) > swipelength) && ((touchendY - touchstartY) < limitY)) {
    var elem = document.getElementsByClassName("burgerMenu")[0];
    elem.click();
    console.log("startX: " + touchstartX + " endX: " + touchendX);
    console.log("startY: " + touchstartY + " endY: " + touchendY);
  }
  else if(touchendY < touchstartY) {
  }
  else if(touchendY > touchstartY) {
  }
}

/*************** Vanilla swiping END *************************/
