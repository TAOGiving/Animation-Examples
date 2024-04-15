// GSAP To

gsap.to(".star", { x: 400, backgroundColor: "blue", duration: 3 });
gsap.to(".star2", { x: 400, duration: 15 });
gsap.to(".star3", { x: -400, duration: 15 });
gsap.to(".star4", { x: 400, y: -200, scale: 3, duration: 3 });
gsap.to(".star5", { x: 600, rotate: 270, duration: 3 });
gsap.to(".star6", { skewX: 50, duration: 3 });
gsap.to(".star7", { skewY: 50, duration: 3 });
gsap.to(".star8", { scaleX: 2, duration: 3 });
gsap.to(".star9", { scaleY: 2, duration: 3 });

//GSAP from

gsap.from(".star10", { x: 400, backgroundColor: "blue", duration: 3 });
gsap.fromTo(".star11", { x: 200, y: 200 }, { x: 400, y: 0, duration: 3 });

//GSAP Delay
gsap.to(".star12", { duration: 2, x: 600 });
gsap.to(".star13", { duration: 2, x: 600, delay: 2 });

//GSAP repeat
gsap.to(".star14", { duration: 2, x: 600, repeat: 1 });
gsap.to(".star15", { duration: 2, x: 600 });

//GSAP yoyo
gsap.to(".star16", { duration: 2, x: 600, repeat: 4, yoyo: true });
gsap.to(".star17", { duration: 2, x: 600 });

//GSAP ease
gsap.to(".star18", { duration: 3, x: 600 });
gsap.to(".star19", { duration: 3, x: 600, ease: "linear" });

//GSAP ease bounce
gsap.to(".star20", { duration: 3, x: 500, ease: "bounce" });
gsap.to(".star21", { duration: 3, x: 500, ease: "bounce.in" });
gsap.to(".star22", { duration: 3, x: 500, ease: "bounce.inOut" });
gsap.to(".star23", { duration: 3, x: 500, ease: "elastic" });
gsap.to(".star24", { duration: 3, x: 500, ease: "back" });
gsap.to(".star25", { duration: 3, x: 500, ease: "back(6)" });

//GSAP ease stagger
gsap.to("#star2", { y: -10, stagger: 0.5 });
gsap.to("#star3", { y: -25, stagger: { amount: 10 } });
gsap.to("#star4", { y: -25, stagger: { each: 0.2, from: "end" } });
gsap.to("#star5", { y: -25, stagger: { amount: 1, from: "center" } });
gsap.to("#star6", { y: -25, stagger: { amount: 1, from: "edges" } });

//Animate SVG
