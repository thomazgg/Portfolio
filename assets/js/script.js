var textWrapper = document.querySelector(".header-title");
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter' data-magnetic>$&</span>");

anime.timeline().add({
    targets: ".header-title .letter",
    translateY: [100, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 2000,
    delay: (el, i) => 4800 + 40 * i,
});

TweenMax.to(".box", 2.4, {
    y: "-100%",
    ease: Expo.easeInOut,
    delay: 0.2,
});

TweenMax.from(".hero-image img", 4, {
    scale: "2",
    ease: Expo.easeInOut,
    delay: 0,
});

TweenMax.to(".wrapper-img", 2.4, {
    width: "400",
    height: "500",
    ease: Expo.easeInOut,
    delay: 3.6,
});

TweenMax.from(".img", 0.4, {
    opacity: 0,
    ease: Expo.easeInOut,
    delay: 3.4,
});

TweenMax.to(".left", 2, {
    x: "-400",
    rotation: -10,
    ease: Expo.easeInOut,
    delay: 3.8,
});

TweenMax.to(".right", 2, {
    x: "100",
    rotation: 10,
    ease: Expo.easeInOut,
    delay: 3.8,
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
    delay: 3.6,
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

TweenMax.to(".navbar-about", 2, {
    y: "0",
    opacity: 1,
    ease: Expo.easeInOut,
    delay: 4,
});

TweenMax.to(".navbar-about", 0, {
    y: "-30",
    opacity: 0,
    ease: Expo.easeInOut,
    delay: 0,
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
    delay: 4.2,
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
    delay: 4.4,
});
