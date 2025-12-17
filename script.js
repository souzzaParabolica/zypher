// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

const backToTopBtn = document.getElementById("back-to-top");

lenis.on("scroll", (e) => {
  const scroll = e.scroll;

  if (scroll > 300) {
    gsap.to(backToTopBtn, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
      pointerEvents: "auto",
    });
  } else {
    gsap.to(backToTopBtn, {
      opacity: 0,
      scale: 0.9,
      duration: 0.3,
      ease: "power2.out",
      pointerEvents: "none",
    });
  }
});

backToTopBtn.addEventListener("click", () => {
  lenis.scrollTo(0, {
    duration: 1,
    easing: (t) => 1 - Math.pow(1 - t, 3),
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const arrowButton = document.querySelector(".arrowDown");

  if (!arrowButton) return;

  // Adiciona evento de clique
  arrowButton.addEventListener("click", function (e) {
    e.preventDefault();

    // Efeito visual de clique
    arrowButton.style.animation = "none"; // Pausa a animação de pulsação
    arrowButton.style.transform = "scale(0.9)";

    setTimeout(() => {
      arrowButton.style.animation = ""; // Retorna a animação
      arrowButton.style.transform = "";
    }, 300);

    // Encontra a seção howToBuild
    const howToBuildSection = findHowToBuildSection();

    if (howToBuildSection) {
      smoothScrollToSection(howToBuildSection);
    } else {
      // Fallback: scroll para a próxima seção
      const nextSection = document.querySelector("section:nth-of-type(2)");
      if (nextSection) {
        smoothScrollToSection(nextSection);
      }
    }
  });
});

function findHowToBuildSection() {
  // Tenta encontrar por diferentes seletores
  return (
    document.getElementById("howToBuild") ||
    document.querySelector('[id*="howToBuild"]') ||
    document.querySelector('[id*="how-to-build"]') ||
    document.querySelector('[class*="howToBuild"]') ||
    document.querySelector('[class*="how-to-build"]') ||
    document.querySelector("section:nth-of-type(2)")
  ); // Fallback para segunda seção
}

function smoothScrollToSection(element) {
  const elementPosition =
    element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - 400; // Ajuste para o header fixo

  // Verifica se o navegador suporta scrollBehavior
  if ("scrollBehavior" in document.documentElement.style) {
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  } else {
    // Fallback para navegadores antigos
    smoothScrollFallback(offsetPosition);
  }
}

function smoothScrollFallback(targetPosition) {
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 800; // ms
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    // Easing function (easeInOutCubic)
    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    const progressEased = easeInOutCubic(progress);

    window.scrollTo(0, startPosition + distance * progressEased);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}
