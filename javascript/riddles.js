if (!localStorage.getItem("j")) {
  j = 0;
  localStorage.setItem("j", j);
} else {
  j = parseInt(localStorage.getItem("j"));
  console.log("local storage" + j);
}
console.log(j);

// progress bar ----------------------------------------------------------------

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

var mix = [0, 1, 2, 3, 4];
if (!localStorage.getItem("shuffledArray")) {
  mix = shuffle(mix);
  localStorage.setItem("shuffledArray", JSON.stringify(mix));
} else {
  mix = JSON.parse(localStorage.getItem("shuffledArray"));
}
console.log(mix);

// Array storage  ------------------------------------------------------------------------------
var riddles = ["r1section", "r2section", "r3section", "r4section", "r5section"];
var bottoms = ["bottom1", "bottom2", "bottom3", "bottom4", "bottom5"];
var stories = [
  "storysection1",
  "storysection2",
  "storysection3",
  "storysection4",
  "storysection5",
];
var nextriddles = [
  "nextriddlesection1",
  "nextriddlesection2",
  "nextriddlesection3",
  "nextriddlesection4",
  "nextriddlesection5",
];

var progressbarsection = [
  "progressbarsection1",
  "progressbarsection2",
  "progressbarsection3",
  "progressbarsection4",
  "progressbarsection5",
];

//initial display ---------------
document.getElementById(riddles[mix[j]]).style.display = "flex";
document.getElementById(bottoms[mix[j]]).style.display = "flex";
document.getElementById(progressbarsection[j]).style.display = "flex";

// reveal story ----------------------------
var codes = ["FIDA", "DASH", "ROFY", "TADH", "PLAB"];
function revealStory(code) {
  code = code.toUpperCase();
  if (code === codes[mix[j]]) {
    if (!localStorage.getItem("j")) {
      j = 0;
      localStorage.setItem("j", j);
    } else {
      j = parseInt(localStorage.getItem("j"));
      console.log("local storage" + j);
    }
    document.getElementById(riddles[mix[j]]).style.display = "none";
    document.getElementById(bottoms[mix[j]]).style.display = "none";
    console.log("j" + j);
    document.getElementById(stories[mix[j]]).style.display = "flex";
    document.getElementById(nextriddles[mix[j]]).style.display = "flex";

    j = j + 1;
    if (j == mix.length) {
      j = j - 1;
    }

    localStorage.setItem("j", j);
  } else {
    wrongcode();
  }
}

// nextriddle code  ---------------------------------------------------------------------------------------

function nextRiddle() {
  if (!localStorage.getItem("i")) {
    i = 1;
    localStorage.setItem("i", i);
  } else {
    i = parseInt(localStorage.getItem("i"));
  }
  if (i == mix.length) {
    console.log("End");
    window.location.replace("completed.html");
  } else {
    console.log("i" + i);
    document.getElementById(riddles[mix[i]]).style.display = "flex";
    document.getElementById(bottoms[mix[i]]).style.display = "flex";
    document.getElementById(stories[mix[i - 1]]).style.display = "none";
    document.getElementById(nextriddles[mix[i - 1]]).style.display = "none";
    document.getElementById(progressbarsection[i - 1]).style.display = "none";
    document.getElementById(progressbarsection[i]).style.display = "flex";

    i = i + 1;
    localStorage.setItem("i", i);
  }
}

// insta redirect modal code ---------------------------------------------------------------------------------------------
var instamodalsarr = [
  "instamodal1",
  "instamodal2",
  "instamodal3",
  "instamodal4",
  "instamodal5",
];

function instamodals() {
  document.getElementById(instamodalsarr[mix[j]]).style.display = "flex";
}
function closeinstamodal() {
  document.getElementById(instamodalsarr[mix[j]]).style.display = "none";
}
window.onclick = function (event) {
  if (event.target == document.getElementById(instamodalsarr[mix[j]])) {
    document.getElementById(instamodalsarr[mix[j]]).style.display = "none";
  }
};

// back from insta ---------------------------------------------------------------------------
function instaback() {
  document.getElementById("instabackdiv").style.display = "flex";
}
function closeinstaback() {
  document.getElementById("instabackdiv").style.display = "none";
}
window.onclick = function (event) {
  if (event.target == document.getElementById("instabackdiv")) {
    document.getElementById("instabackdiv").style.display = "none";
  }
};

//  hint modal -----------------------------------------------------------------------------------------

var hintmodals = [
  "hintmodal1",
  "hintmodal2",
  "hintmodal3",
  "hintmodal4",
  "hintmodal5",
];

function hintmodal() {
  document.getElementById(hintmodals[mix[j]]).style.display = "flex";
}
function closehint() {
  document.getElementById(hintmodals[mix[j]]).style.display = "none";
}
window.onclick = function (event) {
  if (event.target == document.getElementById(hintmodals[mix[j]])) {
    document.getElementById(hintmodals[mix[j]]).style.display = "none";
  }
};

// wrong code modal ------------------------------------------------------------
function wrongcode() {
  document.getElementById("wrongcode").style.display = "flex";
}
function closecode() {
  document.getElementById("wrongcode").style.display = "none";
}
window.onclick = function (event) {
  if (event.target == document.getElementById("wrongcode")) {
    document.getElementById("wrongcode").style.display = "none";
  }
};
