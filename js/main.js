// Home page behaviour: the mobile menu and the active navigation state.
// A classic script (not a module) so the page still works when opened from a
// file:// URL. Everything here is progressive enhancement: without JavaScript
// the navigation is always visible and every link still works.
(function () {
  'use strict';

  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');
  if (!header || !toggle || !nav) return;

  var desktop = window.matchMedia('(min-width: 60em)');

  // ---- Mobile menu ------------------------------------------------------

  function isOpen() {
    return toggle.getAttribute('aria-expanded') === 'true';
  }

  function setMenu(open) {
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  }

  toggle.addEventListener('click', function () {
    setMenu(!isOpen());
  });

  // Escape closes the menu and returns focus to the button.
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && isOpen()) {
      setMenu(false);
      toggle.focus();
    }
  });

  // Choosing a link, or clicking anywhere outside the header, closes it.
  nav.addEventListener('click', function (event) {
    if (event.target.closest('a')) setMenu(false);
  });

  document.addEventListener('click', function (event) {
    if (isOpen() && !header.contains(event.target)) setMenu(false);
  });

  // Moving keyboard focus out of the open menu closes it too.
  header.addEventListener('focusout', function (event) {
    if (isOpen() && event.relatedTarget && !header.contains(event.relatedTarget)) {
      setMenu(false);
    }
  });

  // Reset when the layout switches to the desktop navigation.
  desktop.addEventListener('change', function (event) {
    if (event.matches) setMenu(false);
  });

  // ---- Active navigation state ----------------------------------------
  // The link for the section currently under the header gets
  // aria-current="location", which also drives its highlighted style.

  var links = Array.prototype.slice.call(nav.querySelectorAll('a[href^="#"]'));
  var targets = links
    .map(function (link) {
      return { link: link, section: document.getElementById(link.hash.slice(1)) };
    })
    .filter(function (target) { return target.section; });

  if (!targets.length) return;

  function updateActiveLink() {
    var offset = header.offsetHeight + 32;
    var current = targets[0];

    targets.forEach(function (target) {
      if (target.section.getBoundingClientRect().top - offset <= 0) current = target;
    });

    // At the very bottom the last section may be too short to reach the
    // header, so mark it explicitly.
    var root = document.documentElement;
    if (window.innerHeight + window.scrollY >= root.scrollHeight - 2) {
      current = targets[targets.length - 1];
    }

    links.forEach(function (link) {
      if (link === current.link) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      ticking = false;
      updateActiveLink();
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  updateActiveLink();
})();
