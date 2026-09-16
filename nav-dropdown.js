/*
  Shared "Compact Commission" nav dropdown, used on every page.

  Click-to-toggle, same hidden-attribute pattern as the header search
  toggle (header-search.js) and the Tool Kit tabs — not hover-based, so
  it behaves the same on touch and with a keyboard. Closes when you
  click elsewhere or press Escape.

  Per Deb's feedback: on the mobile hamburger panel, opening this used
  to expand the submenu DOWNWARD as an inline accordion, pushing
  "Contact Us" (and the rest of the panel) further down and requiring
  extra scrolling to see all 5 subsections. It now swaps in place
  instead — opening the submenu adds .submenu-open to the panel, which
  the CSS uses to hide the other top-level items and show the submenu
  (plus a "Back to menu" row) filling the same space, rather than
  growing the panel. Desktop's floating dropdown (>=1100px) is
  unaffected — see the @media(min-width:1100px) block in style.css,
  which overrides .submenu-open back to normal.
*/
(function () {
  var triggers = document.querySelectorAll('.nav-dropdown-trigger');

  function closeAll() {
    document.querySelectorAll('.nav-dropdown-menu').forEach(function (m) { m.hidden = true; });
    document.querySelectorAll('.main-nav').forEach(function (nav) { nav.classList.remove('submenu-open'); });
    triggers.forEach(function (t) { t.setAttribute('aria-expanded', 'false'); });
  }

  triggers.forEach(function (trigger) {
    var menu = document.getElementById(trigger.getAttribute('aria-controls'));
    if (!menu) return;
    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      var isHidden = menu.hidden;
      closeAll();
      if (isHidden) {
        menu.hidden = false;
        trigger.setAttribute('aria-expanded', 'true');
        var nav = trigger.closest('.main-nav');
        if (nav) nav.classList.add('submenu-open');
      }
    });
  });

  document.querySelectorAll('.nav-dropdown-back').forEach(function (backBtn) {
    backBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      closeAll();
      var triggerId = backBtn.getAttribute('data-trigger');
      var trigger = triggerId && document.getElementById(triggerId);
      if (trigger) trigger.focus();
    });
  });

  document.addEventListener('click', closeAll);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeAll();
  });
})();
