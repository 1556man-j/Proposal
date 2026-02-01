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

// === GALLERY DATA ===
// Replace these URLs with your actual images
const galleries = [
  // Gallery 1 - Coffee Dates
  {
    title: "Coffee Dates ☕",
    images: [
      {
        src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200",
        caption: "Our first coffee together",
      },
      {
        src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200",
        caption: "Morning coffee talks",
      },
      {
        src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200",
        caption: "Cozy cafe moments",
      },
      {
        src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1200",
        caption: "Late afternoon coffee dates",
      },
    ],
  },
  // Gallery 2 - Your Smile
  {
    title: "Your Beautiful Smile 😊",
    images: [
      {
        src: "./assets/smile2.jpeg",
        caption: "That smile that makes my day",
      },
      {
        src: "./assets/smile1.jpeg",
        caption: "Always brightening my world",
      },
      {
        src: "./assets/smile4.jpeg",
        caption: "Pure happiness",
      },
      {
        src: "./assets/smile3.jpeg",
        caption: "Genuine joy",
      },
      {
        src: "./assets/smile5.jpeg",
        caption: "Pure happiness",
      },
      {
        src: "./assets/smile6.jpeg",
        caption: "Genuine joy",
      },
    ],
  },
  // Gallery 3 - Late Nights
  {
    title: "Late Night Conversations 🌙",
    images: [
      {
        src: "./assets/call1.jpeg",
        caption: "Talking until dawn",
      },
      {
        src: "./assets/call2.jpeg",
        caption: "Under the stars",
      },
      {
        src: "./assets/call3.jpeg",
        caption: "Midnight thoughts",
      },
      {
        src: "./assets/call4.jpeg",
        caption: "Sharing secrets",
      },
       {
        src: "./assets/call5.jpeg",
        caption: "Talking until dawn",
      },
      {
        src: "./assets/call6.jpeg",
        caption: "Under the stars",
      },
    ],
  },
  // Gallery 4 - Adventures
  {
    title: "Our Adventures 🌍",
    images: [
      {
        src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200",
        caption: "Exploring together",
      },
      {
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
        caption: "Mountain adventures",
      },
      {
        src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200",
        caption: "Beach days",
      },
      {
        src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200",
        caption: "New places, new memories",
      },
    ],
  },
  // Gallery 5 - Special Moments
  {
    title: "Special Moments ✨",
    images: [
      {
        src: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1200",
        caption: "Unforgettable times",
      },
      {
        src: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1200",
        caption: "Celebrating together",
      },
      {
        src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200",
        caption: "Music and memories",
      },
      {
        src: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=1200",
        caption: "Creating magic",
      },
    ],
  },
  // Gallery 6 - Together
  {
    title: "Together Forever 💕",
    images: [
      {
        src: "./assets/together2.jpeg",
        caption: "Side by side",
      },
      {
        src: "./assets/together1.jpeg",
        caption: "Always together",
      },
      {
        src: "./assets/together3.jpeg",
        caption: "Perfect moments",
      },
      {
        src: "./assets/together4.jpeg",
        caption: "Our journey",
      },
       {
        src: "./assets/together5.jpeg",
        caption: "Side by side",
      },
      {
        src: "./assets/together6.jpeg",
        caption: "Always together",
      },
      {
        src: "./assets/together7.jpeg",
        caption: "Perfect moments",
      },
    ],
  },
];

let currentGalleryIndex = 0;
let currentImageIndex = 0;

// === OPEN GALLERY ===
function openGallery(galleryIndex) {
  currentGalleryIndex = galleryIndex;
  currentImageIndex = 0;

  const modal = document.getElementById("galleryModal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");

  // Prevent body scroll
  document.body.style.overflow = "hidden";

  updateGalleryDisplay();
}

// === CLOSE GALLERY ===
function closeGallery() {
  const modal = document.getElementById("galleryModal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");

  // Restore body scroll
  document.body.style.overflow = "auto";
}

// === UPDATE GALLERY DISPLAY ===
function updateGalleryDisplay() {
  const gallery = galleries[currentGalleryIndex];
  const currentImage = gallery.images[currentImageIndex];

  // Update title and counter
  document.getElementById("galleryTitle").textContent = gallery.title;
  document.getElementById("galleryCounter").textContent = `${
    currentImageIndex + 1
  } / ${gallery.images.length}`;

  // Update main image
  const galleryImage = document.getElementById("galleryImage");
  galleryImage.src = currentImage.src;
  galleryImage.alt = currentImage.caption;

  // Update caption
  document.getElementById("galleryCaption").textContent = currentImage.caption;

  // Update thumbnails
  updateThumbnails();

  // Trigger animation
  galleryImage.style.animation = "none";
  setTimeout(() => {
    galleryImage.style.animation = "fadeInScale 0.4s ease";
  }, 10);
}

// === UPDATE THUMBNAILS ===
function updateThumbnails() {
  const gallery = galleries[currentGalleryIndex];
  const thumbnailsContainer = document.getElementById("thumbnails");
  thumbnailsContainer.innerHTML = "";

  gallery.images.forEach((image, index) => {
    const thumbnail = document.createElement("img");
    thumbnail.src = image.src;
    thumbnail.alt = image.caption;
    thumbnail.onclick = () => {
      currentImageIndex = index;
      updateGalleryDisplay();
    };

    if (index === currentImageIndex) {
      thumbnail.classList.add("active");
    }

    thumbnailsContainer.appendChild(thumbnail);
  });
}

// === PREVIOUS IMAGE ===
function previousImage() {
  const gallery = galleries[currentGalleryIndex];
  currentImageIndex =
    currentImageIndex === 0 ? gallery.images.length - 1 : currentImageIndex - 1;
  updateGalleryDisplay();
}

// === NEXT IMAGE ===
function nextImage() {
  const gallery = galleries[currentGalleryIndex];
  currentImageIndex =
    currentImageIndex === gallery.images.length - 1 ? 0 : currentImageIndex + 1;
  updateGalleryDisplay();
}

// === TOGGLE VIDEO PLAY/PAUSE ON CLICK ===
function toggleVideo(card) {
  const video = card.querySelector('video');
  const playIcon = card.querySelector('.video-play-icon');

  if (video.paused) {
    video.play();
    video.classList.add('playing');
    if (playIcon) playIcon.style.opacity = '0';
  } else {
    video.pause();
    video.classList.remove('playing');
    if (playIcon) playIcon.style.opacity = '1';
  }
}

// === KEYBOARD NAVIGATION ===
document.addEventListener("keydown", (e) => {
  const modal = document.getElementById("galleryModal");
  if (!modal.classList.contains("hidden")) {
    if (e.key === "ArrowLeft") previousImage();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "Escape") closeGallery();
  }
});

// === CLICK OUTSIDE TO CLOSE ===
document.getElementById("galleryModal").addEventListener("click", (e) => {
  if (e.target.id === "galleryModal") {
    closeGallery();
  }
});

// === HANDLE YES BUTTON ===
function handleYes() {
  createConfetti();

  // Play sound with fallback
  try {
    const audio = new Audio('./assets/celebration.mp3');
    audio.volume = 0.7;

    // Play and handle autoplay restrictions
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise.catch(error => {
        // Autoplay was prevented
        console.log('Audio autoplay prevented:', error);
      });
    }
  } catch (error) {
    console.log('Audio error:', error);
  }

  setTimeout(() => {
    document.getElementById("questionContent").style.display = "none";
    document.getElementById("successContent").classList.remove("hidden");
  }, 500);

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

  toggleVideo(document.querySelector('.memory-card'));
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

// === DODGING NO BUTTON ===
const noButton = document.getElementById("noButton");
let isDodging = false;

function dodgeButton(e) {
  if (isDodging) return;

  const buttonRect = noButton.getBoundingClientRect();
  const buttonCenterX = buttonRect.left + buttonRect.width / 2;
  const buttonCenterY = buttonRect.top + buttonRect.height / 2;

  // Get cursor position (works for both mouse and touch)
  const cursorX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
  const cursorY = e.type.includes("touch") ? e.touches[0].clientY : e.clientY;

  // Calculate distance between cursor and button center
  const distanceX = cursorX - buttonCenterX;
  const distanceY = cursorY - buttonCenterY;
  const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

  // Detection radius - button will dodge when cursor is within this distance
  const detectionRadius = 150;

  if (distance < detectionRadius) {
    isDodging = true;
    noButton.classList.add("dodging");

    // Calculate dodge direction (opposite to cursor)
    const angle = Math.atan2(distanceY, distanceX);
    const dodgeDistance = 150; // How far the button moves

    const moveX = -Math.cos(angle) * dodgeDistance;
    const moveY = -Math.sin(angle) * dodgeDistance;

    // Get viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Calculate new position
    let newX = buttonCenterX + moveX;
    let newY = buttonCenterY + moveY;

    // Keep button within viewport bounds
    const margin = 100;
    newX = Math.max(margin, Math.min(viewportWidth - margin, newX));
    newY = Math.max(margin, Math.min(viewportHeight - margin, newY));

    // Apply transform
    const finalMoveX = newX - buttonCenterX;
    const finalMoveY = newY - buttonCenterY;

    noButton.style.transform = `translate(${finalMoveX}px, ${finalMoveY}px) scale(1.1)`;

    // Reset after animation
    setTimeout(() => {
      isDodging = false;
      noButton.classList.remove("dodging");
    }, 300);
  }
}

// Add event listeners for both mouse and touch
document.addEventListener("mousemove", dodgeButton);
document.addEventListener("touchmove", dodgeButton);

// Optional: Reset button position when mouse/touch leaves the area
noButton.addEventListener("mouseleave", () => {
  setTimeout(() => {
    noButton.style.transform = "translate(0, 0) scale(1)";
  }, 500);
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
