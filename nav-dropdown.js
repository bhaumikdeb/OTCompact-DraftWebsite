
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
