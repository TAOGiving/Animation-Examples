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
