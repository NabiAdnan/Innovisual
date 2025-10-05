// Loader fade-out
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => loader.classList.add("fade-out"), 3500);
  setTimeout(() => loader.remove(), 4200);
});

// Scroll progress bar
const progressBar = document.getElementById("progress-bar");
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = scrollTop / docHeight;
  progressBar.style.transform = `scaleX(${scrollPercent})`;
});

// Intersection fade-in
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.25 }
);
document.querySelectorAll(".section-content, .media-image").forEach((el) => {
  el.classList.add("fade-in");
  observer.observe(el);
});

// Parallax effect
window.addEventListener("scroll", () => {
  const parallaxVideos = document.querySelectorAll(".parallax-container video");
  parallaxVideos.forEach((video) => {
    const speed = 0.3;
    const offset = window.scrollY * speed;
    video.style.transform = `translateY(${offset}px)`;
  });
});
