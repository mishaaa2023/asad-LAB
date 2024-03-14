function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

   

function Navloadinganimation() {
    gsap.from("#header span", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 0.9,
      stagger: 0.3,
    });
    gsap.from("#header a", {
      scale: 0.9,
      opacity: 0,
      delay: 1.3,
      duration: 0.5,
    });
    
  }
  Navloadinganimation();
  
  function Homeloadinganimation() {
    gsap.from("#home h1", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 0.9,
      stagger: 0.3,
    });
    gsap.from("#home img", {
      scale: 0.9,
      opacity: 0,
      delay: 1.3,
      duration: 0.5,
    });
    gsap.from("#home p", {
      scale: 0.9,
      opacity: 0,
      delay: 1.3,
      duration: 0.5,
    });
  }
  Homeloadinganimation();

  function HomecircleAnimation() {
    var videocon = document.querySelector("#home");
    var playbtn = document.querySelector("#home-btn");
    videocon.addEventListener("mouseenter", function () {
      gsap.to(playbtn, {
        scale: 1,
        opacity: 1,
      });
    });
    videocon.addEventListener("mouseleave", function () {
      gsap.to(playbtn, {
        scale: 0,
        opacity: 0,
      });
    });
    document.addEventListener("mousemove", function (dets) {
      gsap.to(playbtn, {
        left: dets.x - 70,
        top: dets.y - 80,
      });
    });
  }
  HomecircleAnimation();
  
  function AboutcircleAnimation() {
    var videocon = document.querySelector("#about");
    var playbtn = document.querySelector("#ab-btn");
    videocon.addEventListener("mouseenter", function () {
      gsap.to(playbtn, {
        scale: 1,
        opacity: 1,
      });
    });
    videocon.addEventListener("mouseleave", function () {
      gsap.to(playbtn, {
        scale: 0,
        opacity: 0,
      });
    });
    document.addEventListener("mousemove", function (dets) {
      gsap.to(playbtn, {
        left: dets.x - 70,
        top: dets.y - 80,
      });
    });
  }
  AboutcircleAnimation();

  
  function MicircleAnimation() {
    var videocon = document.querySelector("#mission");
    var playbtn = document.querySelector("#mi-btn");
    videocon.addEventListener("mouseenter", function () {
      gsap.to(playbtn, {
        scale: 1,
        opacity: 1,
      });
    });
    videocon.addEventListener("mouseleave", function () {
      gsap.to(playbtn, {
        scale: 0,
        opacity: 0,
      });
    });
    document.addEventListener("mousemove", function (dets) {
      gsap.to(playbtn, {
        left: dets.x - 70,
        top: dets.y - 80,
      });
    });
  }
  MicircleAnimation();

  function wcircleAnimation() {
    var videocon = document.querySelector("#what");
    var playbtn = document.querySelector("#w-btn");
    videocon.addEventListener("mouseenter", function () {
      gsap.to(playbtn, {
        scale: 1,
        opacity: 1,
      });
    });
    videocon.addEventListener("mouseleave", function () {
      gsap.to(playbtn, {
        scale: 0,
        opacity: 0,
      });
    });
    document.addEventListener("mousemove", function (dets) {
      gsap.to(playbtn, {
        left: dets.x - 70,
        top: dets.y - 80,
      });
    });
  }
  wcircleAnimation();
  
