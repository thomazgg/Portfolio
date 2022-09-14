// -------- header --------

TweenMax.to(".h-0", 0, {
  y: "15%",
  opacity: 0,
  ease: Expo.easeInOut,
  delay: 0,
});

TweenMax.to(".h-0", 2, {
  y: "0%",
  opacity: 1,
  ease: Expo.easeInOut,
  delay: 0.2,
});

// ----------------------

TweenMax.to(".h-1", 0, {
  y: "15%",
  opacity: 0,
  ease: Expo.easeInOut,
  delay: 0,
});

TweenMax.to(".h-1", 2, {
  y: "0%",
  opacity: 1,
  ease: Expo.easeInOut,
  delay: 0.4,
});

// ----------------------

TweenMax.to(".h-2", 0, {
  y: "15%",
  opacity: 0,
  ease: Expo.easeInOut,
  delay: 0,
});

TweenMax.to(".h-2", 2, {
  y: "0%",
  opacity: 1,
  ease: Expo.easeInOut,
  delay: 0.6,
});

// ----------------------

TweenMax.to(".h-3", 0, {
  y: "15%",
  opacity: 0,
  ease: Expo.easeInOut,
  delay: 0,
});

TweenMax.to(".h-3", 2, {
  y: "0%",
  opacity: 1,
  ease: Expo.easeInOut,
  delay: 0.8,
});

// ----------------------

TweenMax.to(".h-4", 0, {
  opacity: 0,
  ease: Expo.easeInOut,
  delay: 0,
});

TweenMax.to(".h-4", 2, {
  opacity: 1,
  ease: Expo.easeInOut,
  delay: 1,
});

// ----------------------

TweenMax.to(".h-5", 0, {
  y: "15%",
  opacity: 0,
  ease: Expo.easeInOut,
  delay: 0,
});

TweenMax.to(".h-5", 2, {
  y: "0%",
  opacity: 1,
  ease: Expo.easeInOut,
  delay: 1.2,
});

// ----------------------

TweenMax.to(".h-6", 0, {
  opacity: 0,
  ease: Expo.easeInOut,
  delay: 0,
});

TweenMax.to(".h-6", 1, {
  opacity: 1,
  ease: Expo.easeInOut,
  delay: 0.6,
});

// -------- logo --------

TweenMax.to(".navbar-logo", 0, {
    y: "-30",
    opacity: 0,
    ease: Expo.easeInOut,
    delay: 0,
});

TweenMax.to(".navbar-logo", 2, {
    y: "0",
    opacity: 1,
    ease: Expo.easeInOut,
    delay: 1,
});

// -------- home --------

TweenMax.to(".navbar-home", 0, {
    y: "-30",
    opacity: 0,
    ease: Expo.easeInOut,
    delay: 0,
});

TweenMax.to(".navbar-home", 2, {
    y: "0",
    opacity: 1,
    ease: Expo.easeInOut,
    delay: 1.2,
});


// -------- about --------

TweenMax.to(".navbar-about", 0, {
    y: "-30",
    opacity: 0,
    ease: Expo.easeInOut,
    delay: 0,
});

TweenMax.to(".navbar-about", 2, {
    y: "0",
    opacity: 1,
    ease: Expo.easeInOut,
    delay: 1.4,
});

// -------- projects --------

TweenMax.to(".navbar-projects", 0, {
    y: "-30",
    opacity: 0,
    ease: Expo.easeInOut,
    delay: 0,
});

TweenMax.to(".navbar-projects", 2, {
    y: "0",
    opacity: 1,
    ease: Expo.easeInOut,
    delay: 1.6,
});

// -------- menu --------

TweenMax.to(".btn_menu-box", 0, {
    y: "-30",
    opacity: 0,
    ease: Expo.easeInOut,
    delay: 0,
});

TweenMax.to(".btn_menu-box", 2, {
    y: "0",
    opacity: 1,
    ease: Expo.easeInOut,
    delay: 1.8,
});

// ! ============== change words ==============

var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);
