function revealStory() {
  document.getElementById("logo").style.display = "none";
  document.getElementById("r1section").style.display = "none";
  document.getElementById("bottom1").style.display = "none";
  document.getElementById("storysection1").style.display = "flex";
  document.getElementById("nextriddlesection1").style.display = "flex";
}

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("instamodal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "flex";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
