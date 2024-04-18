gsap.registerPlugin(ScrollTrigger);
//GSAP animation
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".animated-element",
    // start: "top center", //1st value is the element start, second is the viewport position
    // end: "bottom center",//1st value is the element end, second is the viewport position
    // start: "35% 80%",
    // end: "bottom 80%",
    // start: "35% 80%",
    // end: "bottom 20%",
    start: "-50% center",
    end: "200% center",
    scrub: false, // is no longer linked with the scroll
    markers: true,
    toggleActions: "play reverse play complete", //on enter, on leave, on enter back (re-enter), on leave back.
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
