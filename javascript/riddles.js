// shuffle index  -------------------------------------------------------------------
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

var mix = [0, 1, 2];
if (!localStorage.getItem("shuffledArray")) {
  mix = shuffle(mix);
  localStorage.setItem("shuffledArray", JSON.stringify(mix));
} else {
  mix = JSON.parse(localStorage.getItem("shuffledArray"));
}
console.log(mix);

// Array storage  ------------------------------------------------------------------------------
var riddles = ["r1section", "r2section", "r3section"];
var bottoms = ["bottom1", "bottom2", "bottom3"];
var stories = ["storysection1", "storysection2", "storysection3"];
var nextriddles = [
  "nextriddlesection1",
  "nextriddlesection2",
  "nextriddlesection3",
];

//initial display ---------------
document.getElementById(riddles[mix[0]]).style.display = "flex";
document.getElementById(bottoms[mix[0]]).style.display = "flex";

// reveal story ----------------------------
var j = 0;
function revealStory() {
  document.getElementById("logo").style.display = "none";
  document.getElementById(riddles[mix[j]]).style.display = "none";
  document.getElementById(bottoms[mix[j]]).style.display = "none";
  console.log("j" + j);
  document.getElementById(stories[mix[j]]).style.display = "flex";
  document.getElementById(nextriddles[mix[j]]).style.display = "flex";

  j = j + 1;
}

// nextriddle code  ---------------------------------------------------------------------------------------
var i = 1;

function nextRiddle() {
  if (i == mix.length) {
    console.log("End");
  } else {
    console.log("i" + i);
    document.getElementById("logo").style.display = "block";
    document.getElementById(riddles[mix[i]]).style.display = "flex";
    document.getElementById(bottoms[mix[i]]).style.display = "flex";
    document.getElementById(stories[mix[i - 1]]).style.display = "none";
    document.getElementById(nextriddles[mix[i - 1]]).style.display = "none";

    i = i + 1;
  }
}

// insta redirect modal code ---------------------------------------------------------------------------------------------

var imodal = document.getElementById("instamodal");
var instabutton = document.getElementById("instamodalbtn");
var span = document.getElementsByClassName("close")[0];
function instamodals() {
  imodal.style.display = "flex";
}
span.onclick = function () {
  imodal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == imodal) {
    imodal.style.display = "none";
  }
};
