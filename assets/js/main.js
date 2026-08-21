(function () {
  "use strict";

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Mobile nav toggle ---------- */
  var toggle = document.getElementById("nav-toggle");
  var links = document.getElementById("nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Scroll reveal ---------- */
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealEls = document.querySelectorAll("[data-reveal]");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("in-view"); });
  } else {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Active nav link on scroll ---------- */
  var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-link"));

  function setActiveLink() {
    var scrollPos = window.scrollY + 120;
    var current = sections[0];
    sections.forEach(function (sec) {
      if (sec.offsetTop <= scrollPos) current = sec;
    });
    navLinks.forEach(function (link) {
      var match = current && link.getAttribute("href") === "#" + current.id;
      link.classList.toggle("active", !!match);
    });
  }

  if (sections.length) {
    var ticking = false;
    window.addEventListener("scroll", function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          setActiveLink();
          ticking = false;
        });
        ticking = true;
      }
    });
    setActiveLink();
  }

  /* ---------- Nav background on scroll (subtle elevation) ---------- */
  var nav = document.getElementById("nav");
  function setNavElevation() {
    if (!nav) return;
    nav.style.boxShadow = window.scrollY > 8 ? "0 8px 24px rgba(0,0,0,0.28)" : "none";
  }
  window.addEventListener("scroll", setNavElevation);
  setNavElevation();

  /* ---------- Hero role typing effect ---------- */
  var roles = [
    "Senior DevOps Engineer",
    "Platform Engineer",
    "Site Reliability Engineer",
    "DevSecOps Specialist",
  ];
  var typerEl = document.getElementById("role-typer");

  if (typerEl) {
    if (reduceMotion) {
      typerEl.textContent = roles[0];
    } else {
      var roleIndex = 0;
      var charIndex = 0;
      var deleting = false;
      var typeSpeed = 55;
      var deleteSpeed = 30;
      var holdTime = 1400;

      function tick() {
        var current = roles[roleIndex];

        if (!deleting) {
          charIndex++;
          typerEl.textContent = current.slice(0, charIndex);
          if (charIndex === current.length) {
            deleting = true;
            return setTimeout(tick, holdTime);
          }
          return setTimeout(tick, typeSpeed);
        } else {
          charIndex--;
          typerEl.textContent = current.slice(0, charIndex);
          if (charIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            return setTimeout(tick, 300);
          }
          return setTimeout(tick, deleteSpeed);
        }
      }
      tick();
    }
  }
})();
