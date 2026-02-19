// MATRX — Main JS

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open);
    });
  }

  // Mobile dropdown toggle
  document.querySelectorAll('.has-dropdown > a').forEach(link => {
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        link.parentElement.classList.toggle('is-open');
      }
    });
  });

  // Sticky header shadow on scroll
  const header = document.getElementById('siteHeader');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 10);
    });
  }

  // Facility slideshow (auto-rotating)
  const slideshow = document.querySelector('.facility-slideshow');
  if (slideshow) {
    const imgs = slideshow.querySelectorAll('.slideshow-img');
    let current = 0;
    setInterval(() => {
      imgs[current].classList.remove('active');
      current = (current + 1) % imgs.length;
      imgs[current].classList.add('active');
    }, 3000);
  }

  // Pause hero video for reduced-motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const heroVideo = document.querySelector('.hero__video video');
    if (heroVideo) heroVideo.pause();
  }

  // Scroll reveal with IntersectionObserver
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length && 'IntersectionObserver' in window) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      reveals.forEach(el => el.classList.add('is-visible'));
    } else {
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });
      reveals.forEach(el => revealObserver.observe(el));
    }
  }
});
