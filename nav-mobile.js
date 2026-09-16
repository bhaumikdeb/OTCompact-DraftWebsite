/*
  Shared mobile nav ("hamburger") toggle, used on every page — added
  per Deb's request to match ptcompact.org's mobile menu treatment,
  then changed to always show (not just below a width breakpoint) per
  her follow-up.

  The horizontal nav (.main-nav) is always hidden by default now (see
  style.css) and this button reveals it as a full-width dropdown
  panel. Same click-to-toggle, hidden-attribute-free pattern as the
  header search toggle and the Compact Commission nav dropdown — using
  a class instead of [hidden] since nav-dropdown.js also needs
  .main-nav to stay a normal element it can query, not [hidden] itself.

  Doesn't touch the existing Compact Commission dropdown behavior
  (nav-dropdown.js) — that still runs independently inside the panel.
*/
(function () {
  var toggle = document.getElementById('site-menu-toggle');
  var nav = document.getElementById('main-nav');
  if (!toggle || !nav) return;

  function closeMenu() {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    var isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Stop clicks inside the open panel from bubbling to the
  // document-level close handler below (mirrors nav-dropdown.js).
  nav.addEventListener('click', function (e) {
    e.stopPropagation();
  });

  document.addEventListener('click', closeMenu);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });
})();
