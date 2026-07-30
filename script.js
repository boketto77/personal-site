document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-link, .nav-trigger');
  const pages = document.querySelectorAll('.page');
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');

  function showPage(pageId) {
    pages.forEach(function (page) {
      page.classList.remove('active');
    });

    const target = document.getElementById(pageId);
    if (target) {
      target.classList.add('active');
    }

    document.querySelectorAll('.nav-link').forEach(function (link) {
      link.classList.toggle('active', link.getAttribute('data-page') === pageId);
    });

    siteNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const pageId = this.getAttribute('data-page');
      if (pageId) {
        showPage(pageId);
      }
    });
  });

  navToggle.addEventListener('click', function () {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  function initCarousel(scrollEl, prevEl, nextEl) {
    if (!scrollEl) return;

    function scrollCarousel(direction) {
      const slide = scrollEl.querySelector('.portfolio-slide, .ai-slide');
      const gap = 16;
      const distance = slide ? slide.offsetWidth + gap : scrollEl.clientWidth * 0.5;
      scrollEl.scrollBy({ left: direction * distance, behavior: 'smooth' });
    }

    if (prevEl) {
      prevEl.addEventListener('click', function () {
        scrollCarousel(-1);
      });
    }

    if (nextEl) {
      nextEl.addEventListener('click', function () {
        scrollCarousel(1);
      });
    }
  }

  initCarousel(
    document.querySelector('.portfolio-scroll'),
    document.querySelector('.portfolio-nav-prev'),
    document.querySelector('.portfolio-nav-next')
  );

  initCarousel(
    document.querySelector('.ai-scroll'),
    document.querySelector('.ai-nav-prev'),
    document.querySelector('.ai-nav-next')
  );

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox ? lightbox.querySelector('.lightbox-img') : null;
  const lightboxClose = lightbox ? lightbox.querySelector('.lightbox-close') : null;

  function openLightbox(src, alt) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.hidden = false;
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox || !lightboxImg) return;
    lightbox.hidden = true;
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.src = '';
    lightboxImg.alt = '';
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.ai-zoom-trigger').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      const img = trigger.querySelector('img');
      if (img) {
        openLightbox(img.src, img.alt);
      }
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox && !lightbox.hidden) {
      closeLightbox();
    }
  });

  showPage('home');
});
