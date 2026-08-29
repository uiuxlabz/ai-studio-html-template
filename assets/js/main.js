/* =============================================================
   SOURA — interactions (vanilla, no dependencies)
   ============================================================= */
(function () {
  "use strict";

  /* Navbar: shrink / solidify on scroll */
  const nav = document.querySelector(".nav");
  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle("scrolled", window.scrollY > 24);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile menu */
  const burger = document.querySelector(".burger");
  const links = document.querySelector(".navlinks");
  if (burger && links) {
    burger.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      burger.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", String(open));
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        links.classList.remove("open");
        burger.classList.remove("open");
      })
    );
  }

  /* Scroll reveal */
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach((r) => io.observe(r));
  } else {
    reveals.forEach((r) => r.classList.add("in"));
  }

  /* Count-up stats */
  const counters = document.querySelectorAll("[data-count]");
  const runCount = (el) => {
    const target = parseFloat(el.dataset.count);
    const decimals = (el.dataset.count.split(".")[1] || "").length;
    const suffix = el.dataset.suffix || "";
    const dur = 1600;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * eased).toFixed(decimals) + suffix;
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = target.toFixed(decimals) + suffix;
    };
    requestAnimationFrame(tick);
  };
  if ("IntersectionObserver" in window && counters.length) {
    const co = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            runCount(e.target);
            co.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((c) => co.observe(c));
  } else {
    counters.forEach((c) => (c.textContent = c.dataset.count));
  }

  /* Smooth in-page anchors (respect reduced motion via CSS) */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (ev) => {
      const id = a.getAttribute("href");
      if (id.length < 2) return;
      const t = document.querySelector(id);
      if (t) {
        ev.preventDefault();
        t.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  /* Active nav link by URL */
  const here = location.pathname.split("/").pop();
  document.querySelectorAll(".navlink").forEach((l) => {
    if (l.getAttribute("href") === here) l.classList.add("active");
  });

  /* Footer year */
  document.querySelectorAll("[data-year]").forEach((y) => (y.textContent = new Date().getFullYear()));

  /* Contact form — no alert() */
  const form = document.querySelector("[data-form]");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const ok = form.querySelector(".form-ok");
      const err = form.querySelector(".form-err");
      if (!form.checkValidity()) {
        if (err) { err.textContent = "Please complete the required fields."; err.hidden = false; }
        return;
      }
      form.reset();
      if (ok) { ok.hidden = false; setTimeout(() => (ok.hidden = true), 5000); }
      if (err) err.hidden = true;
    });
  }

  /* Generate floating droplets in hero */
  const fx = document.querySelector("[data-droplets]");
  if (fx && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const n = 7;
    for (let i = 0; i < n; i++) {
      const d = document.createElement("span");
      d.className = "droplet";
      const s = 8 + Math.random() * 22;
      d.style.width = d.style.height = s + "px";
      d.style.left = Math.random() * 100 + "%";
      d.style.bottom = "-30px";
      d.style.animationDuration = 7 + Math.random() * 7 + "s";
      d.style.animationDelay = Math.random() * 6 + "s";
      fx.appendChild(d);
    }
  }
})();
