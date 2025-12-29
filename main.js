/* ========================================
   GIRLFRIEND PROPOSAL - MAIN.JS
   All Interactive Features & Animations
   ======================================== */

// === CURSOR GLOW EFFECT ===
const cursorGlow = document.getElementById("cursorGlow");
document.addEventListener("mousemove", (e) => {
  cursorGlow.style.left = e.clientX + "px";
  cursorGlow.style.top = e.clientY + "px";
});

// === CREATE LOADER PARTICLES ===
function createLoaderParticles() {
  const loaderParticles = document.getElementById("loaderParticles");
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.className = "absolute rounded-full bg-purple-400 animate-float";
    particle.style.width = Math.random() * 4 + 2 + "px";
    particle.style.height = Math.random() * 4 + 2 + "px";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.animationDuration = Math.random() * 10 + 10 + "s";
    particle.style.animationDelay = -Math.random() * 10 + "s";
    loaderParticles.appendChild(particle);
  }
}

// === CREATE HERO BACKGROUND ORBS ===
function createHeroOrbs() {
  const heroBackground = document.getElementById("heroBackground");
  for (let i = 0; i < 30; i++) {
    const orb = document.createElement("div");
    orb.className =
      "absolute rounded-full mix-blend-screen animate-pulse-custom";
    const size = Math.random() * 300 + 100;
    orb.style.width = size + "px";
    orb.style.height = size + "px";
    orb.style.left = Math.random() * 100 + "%";
    orb.style.top = Math.random() * 100 + "%";
    orb.style.background = `radial-gradient(circle, rgba(147,51,234,${
      Math.random() * 0.3
    }) 0%, transparent 70%)`;
    orb.style.animationDuration = Math.random() * 5 + 5 + "s";
    orb.style.animationDelay = -Math.random() * 5 + "s";
    heroBackground.appendChild(orb);
  }
}

// === HIDE LOADER ===
function hideLoader() {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.body.style.overflow = "auto";
  }, 3000);
}

// === SCROLL TO SECTION ===
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

// === SCROLL REVEAL ANIMATION ===
function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("active");
    }
  });
}

// === VIDEO AUTOPLAY ON HOVER ===
function setupVideoHover() {
  const videos = document.querySelectorAll(".memory-card video");
  videos.forEach((video) => {
    const card = video.closest(".memory-card");

    // Desktop hover
    card.addEventListener("mouseenter", () => {
      video.play();
    });

    card.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });

    // Mobile touch
    if ("ontouchstart" in window) {
      card.addEventListener("touchstart", () => {
        video.play();
      });

      card.addEventListener("touchend", () => {
        setTimeout(() => {
          video.pause();
          video.currentTime = 0;
        }, 3000);
      });
    }
  });
}

// === REVEAL HIDDEN MESSAGE CARDS ===
function revealMessage(card) {
  card.classList.toggle("revealed");
}

// === TYPING ANIMATION ===
const typingSection = document.getElementById("typing");
const typingText = document.getElementById("typingText");
const fullText =
  "When we started talking, I didn’t expect much. Honestly, I didn’t even think we’d get along. But the more we talked, the more I realized there was something different about you. Those long chats, the late-night calls, sharing secrets we’d never told anyone else... It all made me see you in a new way. Somehow, you became part of my everyday life. The kind of person I think about even when I’m busy, The one whose messages make me smile no matter what kind of day I’m having. Now, I can’t imagine my days without you in them. You’ve become my favorite person to talk to, my favorite hello, and the hardest goodbye. And I just… I want you to know how much you mean to me.";
let charIndex = 0;
let typingStarted = false;

function typeText() {
  if (charIndex < fullText.length) {
    typingText.innerHTML += fullText.charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 50);
  } else {
    // Add blinking cursor at the end
    typingText.innerHTML +=
      '<span class="inline-block w-1 h-8 bg-purple-400 ml-1 animate-pulse"></span>';
  }
}

// Start typing when section is in view
function checkTypingSection() {
  const rect = typingSection.getBoundingClientRect();
  const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

  if (isVisible && !typingStarted) {
    typingStarted = true;
    setTimeout(typeText, 500);
  }
}

// === CREATE STARS ===
function createStars() {
  const starsContainer = document.getElementById("stars");
  for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");
    star.className = "absolute text-purple-400 animate-twinkle";
    star.innerHTML = "★";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.fontSize = Math.random() * 12 + 8 + "px";
    star.style.animationDuration = Math.random() * 3 + 2 + "s";
    star.style.animationDelay = -Math.random() * 3 + "s";
    starsContainer.appendChild(star);
  }
}

// === CREATE CONFETTI ===
function createConfetti() {
  const confettiContainer = document.getElementById("confettiContainer");
  const colors = ["#a855f7", "#ec4899", "#f472b6", "#c084fc", "#e879f9"];
  const shapes = ["💜", "💕", "✨", "💖", "🌟", "💗", "⭐", "💝"];

  for (let i = 0; i < 150; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.innerHTML = shapes[Math.floor(Math.random() * shapes.length)];
    confetti.style.left = Math.random() * 100 + "%";
    confetti.style.top = "-50px";
    confetti.style.fontSize = Math.random() * 20 + 15 + "px";
    confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
    confetti.style.animationDelay = Math.random() * 0.5 + "s";
    confetti.style.color = colors[Math.floor(Math.random() * colors.length)];

    confettiContainer.appendChild(confetti);

    // Remove confetti after animation
    setTimeout(() => confetti.remove(), 5000);
  }
}

// === HANDLE YES BUTTON ===
function handleYes() {
  // Create confetti explosion
  createConfetti();

  // Optional: Play celebration sound
  // const audio = new Audio('path/to/celebration-sound.mp3');
  // audio.play();

  // Show success message after brief delay
  setTimeout(() => {
    document.getElementById("questionContent").style.display = "none";
    document.getElementById("successContent").classList.remove("hidden");
  }, 500);

  // Additional confetti bursts
  setTimeout(createConfetti, 1000);
  setTimeout(createConfetti, 2000);
  setTimeout(createConfetti, 3000);
}

// === PARALLAX EFFECT ON SCROLL ===
function parallaxEffect() {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll(".animate-pulse-custom");
  parallaxElements.forEach((el, index) => {
    const speed = 0.5 + index * 0.1;
    el.style.transform = `translateY(${scrolled * speed}px)`;
  });
}

// === INITIALIZE ON PAGE LOAD ===
window.addEventListener("load", () => {
  // Prevent scroll during loader
  document.body.style.overflow = "hidden";

  // Create dynamic elements
  createLoaderParticles();
  createHeroOrbs();
  createStars();

  // Hide loader after 3 seconds
  hideLoader();

  // Initial reveal check
  reveal();

  // Setup video hover effects
  setupVideoHover();
});

// === SCROLL EVENT LISTENERS ===
window.addEventListener("scroll", () => {
  reveal();
  checkTypingSection();
  parallaxEffect();
});

// === ADD ANIMATION DELAYS TO TIMELINE ITEMS ===
const timelineItems = document.querySelectorAll("#story .reveal");
timelineItems.forEach((item, index) => {
  item.style.transitionDelay = index * 0.2 + "s";
});

// === ADD ANIMATION DELAYS TO MEMORY CARDS ===
const memoryCards = document.querySelectorAll(".memory-card");
memoryCards.forEach((card, index) => {
  card.style.transitionDelay = index * 0.1 + "s";
});

// === SMOOTH SCROLL FOR ALL INTERNAL LINKS ===
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// === CONSOLE MESSAGE ===
console.log(
  "%c💜 Made with Love 💜",
  "font-size: 24px; color: #a855f7; font-weight: bold;"
);
console.log("%cGood luck! 🌟", "font-size: 16px; color: #ec4899;");

/* ========================================
   CUSTOMIZATION NOTES:
   ========================================

   1. To change typing text:
      - Edit the 'fullText' variable (line 127)

   2. To adjust typing speed:
      - Change setTimeout value in typeText() (line 135)
      - Lower = faster, Higher = slower

   3. To add celebration sound:
      - Uncomment lines 196-197 in handleYes()
      - Add your audio file path

   4. To customize confetti:
      - Edit 'shapes' array (line 186)
      - Edit 'colors' array (line 185)
      - Change count in for loop (line 188)

   5. To adjust loader time:
      - Change setTimeout value in hideLoader() (line 53)

   ======================================== */
