// ===============================
// HEADER ANIMATION
// ===============================

gsap.set(".pre-animate", {
  opacity: 1,
  visibility: "visible",
});

const headerTl = gsap.timeline({
  defaults: {
    ease: "power3.out",
  },
});

headerTl
  .from("header", {
    y: -60,
    opacity: 0,
    duration: 1.4,
  })
  .from(
    "header nav > *",
    {
      y: -20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.18,
    },
    "-=0.6"
  );

// ===============================
// HERO ANIMATION
// ===============================
const heroTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "top 80%",
  },
  defaults: {
    ease: "power3.out",
  },
});

heroTl
  // Headline
  .from(".hero h2", {
    y: 60,
    opacity: 0,
    duration: 2,
  })

  .from(
    ".cruzVerde",
    {
      opacity: 0,
      filter: "blur(10px)",
      duration: 1.2,
    },
    "-=1.3"
  )

  // Paragraph
  .from(
    ".hero p",
    {
      y: 40,
      opacity: 0,
      duration: 1.2,
    },
    "-=1.7"
  )

  // Buttons
  .fromTo(
    ".hero button",
    {
      y: 30,
      opacity: 0,
      scale: 0.96,
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      stagger: 0.25,
      ease: "power2.out",
      clearProps: "transform",
    },
    "-=0.6"
  );

// ===============================
// FINAL TOUCH
// ===============================
gsap.delayedCall(0.2, () => {
  ScrollTrigger.refresh();
});
// SEPARAÇÃO DA ANIMAÇÃO DA HERO E DAS DEMAIS ANIMAÇÕES DO SITE

gsap.from(".cruzVerde", {
  rotate: 90,
  scrollTrigger: {
    trigger: ".hero",
    start: "top 30%",
    end: "bottom 30%",
    scrub: 2,
    markers: false,
  },
});

gsap.to(".cruzVerde", {
  y: 200,
  scrollTrigger: {
    trigger: ".hero",
    start: "top 30%",
    end: "bottom 30%",
    scrub: 2,
    markers: false,
  },
});

gsap.from(".estrelaDourada", {
  rotate: 90,
  y: 200,
  scrollTrigger: {
    trigger: ".hero",
    start: "top 30%",
    end: "bottom 30%",
    scrub: 2,
    markers: false,
  },
});
