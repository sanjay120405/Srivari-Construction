/* ============================================================
   SRIVARI CONSTRUCTIONS — MAIN JAVASCRIPT
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── NAVBAR ─────────────────────────────────────────── */
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  const backToTop = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    if (backToTop) {
      backToTop.classList.toggle('show', window.scrollY > 350);
    }
  });

  if (hamburger && navLinks) {
    const navOverlay = document.createElement('div');
    navOverlay.className = 'nav-overlay';
    document.body.appendChild(navOverlay);

    const closeMenu = () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
      navOverlay.classList.remove('show');
      document.body.style.overflow = '';
    };

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      navOverlay.classList.toggle('show', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    navOverlay.addEventListener('click', closeMenu);

    document.addEventListener('click', e => {
      if (navLinks.classList.contains('open') &&
          !navLinks.contains(e.target) && !hamburger.contains(e.target) &&
          e.target !== navOverlay) {
        closeMenu();
      }
    });
  }

  /* ── ACTIVE NAV LINK ─────────────────────────────────── */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ── HERO ZOOM EFFECT ────────────────────────────────── */
  const hero = document.querySelector('.hero');
  if (hero) setTimeout(() => hero.classList.add('loaded'), 100);

  /* ── SCROLL REVEAL ───────────────────────────────────── */
  const reveals = document.querySelectorAll('.reveal, .reveal-l, .reveal-r');
  if (reveals.length) {
    const ro = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('vis');
          ro.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    reveals.forEach(el => ro.observe(el));
  }

  /* ── COUNTER ANIMATION ───────────────────────────────── */
  function animateCount(el, target, duration) {
    const startTime = performance.now();
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const easeOut = t => 1 - Math.pow(1 - t, 3);

    function step(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const val = Math.floor(easeOut(progress) * target);
      el.textContent = prefix + val.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = prefix + target.toLocaleString() + suffix;
    }
    requestAnimationFrame(step);
  }

  const statsWrap = document.querySelector('.stats-grid');
  if (statsWrap) {
    const co = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          document.querySelectorAll('[data-count]').forEach(el => {
            animateCount(el, parseInt(el.dataset.count, 10), 2200);
          });
          co.disconnect();
        }
      });
    }, { threshold: 0.3 });
    co.observe(statsWrap);
  }

  /* ── PROJECT FILTER ──────────────────────────────────── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projItems  = document.querySelectorAll('[data-category]');

  if (filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const filter = this.dataset.filter;

        projItems.forEach(item => {
          const show = filter === 'all' || item.dataset.category === filter;
          if (show) {
            item.style.display = '';
            requestAnimationFrame(() => {
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
            });
          } else {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            setTimeout(() => { item.style.display = 'none'; }, 280);
          }
        });
      });
    });
    projItems.forEach(item => {
      item.style.transition = 'opacity .28s ease, transform .28s ease';
    });
  }

  /* ── CONTACT FORM ────────────────────────────────────── */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = this.querySelector('[type="submit"]');
      btn.textContent = 'Sending…';
      btn.disabled = true;

      setTimeout(() => {
        btn.textContent = 'Send Message';
        btn.disabled = false;
        const msg = document.getElementById('formSuccess');
        if (msg) { msg.style.display = 'block'; setTimeout(() => msg.style.display = 'none', 5000); }
        this.reset();
      }, 1500);
    });
  }

  /* ── BACK TO TOP ─────────────────────────────────────── */
  if (backToTop) {
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ── LAZY IMAGE REVEAL ───────────────────────────────── */
  document.querySelectorAll('img[data-src]').forEach(img => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.src = e.target.dataset.src;
          e.target.removeAttribute('data-src');
          io.unobserve(e.target);
        }
      });
    });
    io.observe(img);
  });

});
