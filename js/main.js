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

  // Success Stories — Modal lightbox for video testimonials
  const modal = document.getElementById('storyModal');
  const closeBtn = document.getElementById('storyModalClose');
  if (modal && closeBtn) {
    const modalInner = modal.querySelector('.story-modal__inner');
    let previousFocus = null;

    function openStoryModal(src) {
      previousFocus = document.activeElement;
      const old = modalInner.querySelector('iframe');
      if (old) old.remove();
      const iframe = document.createElement('iframe');
      iframe.src = src;
      iframe.allow = 'autoplay; encrypted-media';
      iframe.allowFullscreen = true;
      iframe.title = 'Patient video testimonial';
      modalInner.appendChild(iframe);
      modal.classList.add('is-active');
      document.body.classList.add('modal-open');
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
    }

    function closeStoryModal() {
      modal.classList.remove('is-active');
      document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
      const iframe = modalInner.querySelector('iframe');
      if (iframe) iframe.remove();
      if (previousFocus) previousFocus.focus();
    }

    document.querySelectorAll('.story-card__poster').forEach(btn => {
      btn.addEventListener('click', () => {
        const src = btn.getAttribute('data-video-src');
        if (src) openStoryModal(src);
      });
    });

    closeBtn.addEventListener('click', closeStoryModal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeStoryModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('is-active')) {
        closeStoryModal();
      }
    });

    modal.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        e.preventDefault();
        closeBtn.focus();
      }
    });
  }
});
