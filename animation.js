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
    "-=1"
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

    gsap.from(".dois p, .dois h2, .dois p, .dois div", {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger:0.1,
      scrollTrigger: {
        trigger: ".dois",
        start: "top 40%",
        markers: false,
      },
    });

    gsap.from(".topartists p, .topartists h2, .topartists p ", {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".topartists",
        start: "top 40%",
        markers: false,
      },
    });

    gsap.from(".topList", {
      y: 30,
      filter:"blur(5px)",
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".topList",
        start: "top 60%",
        markers: false,
      },
    });

    gsap.from(".topList .greec", {
      filter:"saturate(0)",
      duration:2,
      scrollTrigger: {
        trigger: ".topList",
        start: "top 60%",
        markers: false,
      },
    });

     gsap.utils.toArray(".logos img").forEach((img) => {
      gsap.from(img, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        scrollTrigger: {
          trigger: img,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });
    });

    gsap.from(".getStartedEnd", {
      y: 30,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".getStartedEnd",
        start: "top 87%",
        markers: false,
      },
    });

     gsap.from("footer div", {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger:0.2,
      scrollTrigger: {
        trigger: "footer",
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

  gsap.to(".brilhoVerde", {
    y: 200,
    scrollTrigger: {
      trigger: ".hero",
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
    
    gsap.from(".pessoas div", {
        y: 30,
        opacity: 0,
        duration:1,
        stagger:0.1,
        scrollTrigger: {
            trigger: ".pessoas",
            start: "top 40%",
            markers:false
        }
    })

    gsap.from(".artistas div", {
        y: 30,
        opacity: 0,
        duration:1,
        stagger:0.1,
        scrollTrigger: {
            trigger: ".artistas",
            start: "top 40%",
            markers:false
        }
    })

    gsap.from(".logos img", {
        y: 30,
        opacity: 0,
        duration:1,
        stagger:0.1,
        scrollTrigger: {
            trigger: ".logos",
            start: "top 55%",
            markers:false,
        }
    })

    gsap.from(".getStartedEnd", {
      y: 30,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".getStartedEnd",
        start: "top 87%",
        markers: false,
      },
    });

     gsap.from("footer div", {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger:0.2,
      scrollTrigger: {
        trigger: "footer",
        start: "top 40%",
        markers: false,
      },
    });

});

// SEPARAÇÃO DAS ANIMAÇÕES EM DIFERENTES TELAS

mm.add("(min-width: 1367px) and (max-width: 1930px)", () => {
  gsap.fromTo(
    ".cruzVerde",
    { rotate: 90, y: 0 },
    {
      rotate: -12,
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

  gsap.to(".brilhoVerde", {
    y: 500,
    x:300,
    scrollTrigger: {
      trigger: ".hero",
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
    
    gsap.from(".pessoas div", {
        y: 30,
        opacity: 0,
        duration:1,
        stagger:0.1,
        scrollTrigger: {
            trigger: ".pessoas",
            start: "top 40%",
            markers:false,
        }
    })

    gsap.from(".artistas div", {
        y: 30,
        opacity: 0,
        duration:1,
        stagger:0.1,
        scrollTrigger: {
            trigger: ".artistas",
            start: "top 40%",
            markers:false,
        }
    })

    gsap.from(".logos img", {
        y: 30,
        opacity: 0,
        duration:1.2,
        stagger:0.1,
        scrollTrigger: {
            trigger: ".logos",
            start: "top 55%",
            markers:false,
        }
    })

    gsap.from(".getStartedEnd", {
      y: 30,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".getStartedEnd",
        start: "top 70%",
        markers: false,
      },
    });

     gsap.from("footer div", {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger:0.2,
      scrollTrigger: {
        trigger: "footer",
        start: "top 60%",
        markers: false,
      },
    });
});

function initTextScroll() {
  const text = document.querySelector(".subscribe");

  if (!text) return;

  const words = text.innerText.split(" ");

  text.innerHTML = words
    .map(word => `<span class="word">${word} </span>`)
    .join("");

  gsap.set(".word", { opacity: 0, y: 10 });

  gsap.to(".word", {
    opacity: 1,
    y: 0,
    stagger: 0.1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".subscribe",
      start: "top 85%",
      end: "bottom 60%",
      scrub: true
    }
  });
}

initTextScroll();