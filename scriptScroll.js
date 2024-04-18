gsap.registerPlugin(ScrollTrigger);
//GSAP animation
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".animated-element",
    // start: "top center",
    // end: "bottom center",
    // start: "35% 80%",
    // end: "bottom 80%",
    // start: "35% 80%",
    // end: "bottom 20%",
    start: "-50% center",
    end: "200% center",
    scrub: true,
    markers: true,
  },
});

tl.to(".animated-element", { x: 800 });

//Scroll Smother from Github search Lenis
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);
