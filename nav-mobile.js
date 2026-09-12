
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
