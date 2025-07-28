// GSAP Animations
gsap.from(".hero-content .text", {opacity: 0, y: 50, duration: 1, delay: 0.3});
gsap.from(".hero-img", {opacity: 0, scale: 0.8, duration: 1, delay: 0.6});
gsap.from(".feature-boxes .box", {
  opacity: 0,
  y: 30,
  duration: 0.6,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".features",
    start: "top 80%",
  }
});
gsap.from(".gallery-img", {
  opacity: 0,
  x: -100,
  duration: 1,
  scrollTrigger: {
    trigger: ".gallery",
    start: "top 90%",
  }
});
gsap.from(".features", {
  opacity: 0,
  x: -100,
  duration: 1,
  scrollTrigger: {
    trigger: ".gallery",
    start: "top 90%",
  }
});
gsap.from(".gallery", {
  opacity: 0,
  x: -100,
  duration: 1,
  scrollTrigger: {
    trigger: ".install",
    start: "top 150%",
  }
});
gsap.from(".install", {
  opacity: 0,
  x: -100,
  duration: 1,
  scrollTrigger: {
    trigger: ".cta",
    start: "top 100%",
  }
});
gsap.from(".cta", {
  opacity: 0,
  x: -100,
  duration: 1,
  scrollTrigger: {
    trigger: ".testimonials",
    start: "top 150%",
  }
});
gsap.from(".testimonials", {
  opacity: 0,
  x: -100,
  duration: 1,
  scrollTrigger: {
    trigger: ".footer",
    start: "top 90%",
  }
});
gsap.from(".footer", {
  opacity: 0,
  x: -100,
  duration: 1,
  scrollTrigger: {
    trigger: ".footer",
    start: "top 90%",
  }
});
gsap.from(".steps div", {
  opacity: 0,
  scale: 0.8,
  duration: 0.6,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".install",
    start: "top 90%",
  }
});
