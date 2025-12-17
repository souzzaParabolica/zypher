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

const mm = gsap.matchMedia();

mm.add("(max-width: 768px)", () => {
  gsap.fromTo(
    ".cruzVerde",
    { rotate: 90, y: 0 },
    {
      rotate: 0,
      y: 300,
      scrollTrigger: {
        trigger: ".hero h2",
        start: "top 0%",
        end: "bottom -40%",
        scrub: 2,
        markers: false,
      },
    }
  );

  gsap.from(".estrelaDourada", {
    rotate: 90,
    y: 200,
    scrollTrigger: {
      trigger: ".hero h2",
      start: "top 0%",
      end: "bottom -40%",
      scrub: 2,
      markers: false,
    },
  });

  gsap.to(".brilhoVerde", {
    y: 300,
    scrollTrigger: {
      trigger: ".hero h2",
      start: "top 0%",
      end: "bottom -40%",
      scrub: 2,
      markers: false,
    },
  });

  gsap.from(".work, .artist, .action, .art, .profile", {
    opacity: 0,
    filter: "blur(5px)",
    y: 10,
    stagger: 0.2,
    duration: 0.6,
    scrollTrigger: {
      trigger: ".stats",
      start: "top 50%",
      markers: false,
    },
  });
    
    gsap.utils.toArray(".pessoas .box").forEach((box) => {
      gsap.from(box, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        filter: "blur(6px)",
        scrollTrigger: {
          trigger: box,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });
    });

    gsap.from(".dois", {
      y: 30,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".dois",
        start: "top 40%",
        markers: false,
      },
    });
});

// SEPARAÇÃO DAS ANIMAÇÕES EM DIFERENTES TELAS

mm.add("(min-width: 769px) and (max-width: 1366px)", () => {
  gsap.fromTo(
    ".cruzVerde",
    { rotate: 90, y: 0 },
    {
      rotate: 0,
      y: 200,
      scrollTrigger: {
        trigger: ".hero",
        start: "top 30%",
        end: "bottom 30%",
        scrub: 2,
        markers: false,
      },
    }
  );

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

  gsap.from(".work, .artist, .action, .art, .profile", {
    opacity: 0,
    filter: "blur(5px)",
    y: 10,
    stagger: 0.2,
    duration: 0.6,
    scrollTrigger: {
      trigger: ".stats",
      start: "top 50%",
      markers: false,
    },
  });
    
    gsap.from(".pessoas", {
        y: 30,
        opacity: 0,
        duration:1,
        scrollTrigger: {
            trigger: ".pessoas",
            start: "top 40%",
            markers:false
        }
    })
});

// SEPARAÇÃO DAS ANIMAÇÕES EM DIFERENTES TELAS

mm.add("(min-width: 1367px) and (max-width: 1930px)", () => {
  gsap.fromTo(
    ".cruzVerde",
    { rotate: 90, y: 0 },
    {
      rotate: 0,
      y: 0,
      scrollTrigger: {
        trigger: ".hero",
        start: "top 30%",
        end: "bottom 30%",
        scrub: 2,
        markers: false,
      },
    }
  );
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

  gsap.from(".work, .artist, .action, .art, .profile", {
    opacity: 0,
    filter: "blur(5px)",
    y: 10,
    stagger: 0.2,
    duration: 0.6,
    scrollTrigger: {
      trigger: ".stats",
      start: "top 50%",
      markers: false,
    },
  });
    
    gsap.from(".pessoas", {
      y: 30,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".pessoas",
        start: "top 40%",
        markers: false,
      },
    });
});
