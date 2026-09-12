
(function () {
  var toggle = document.getElementById('site-search-toggle');
  var bar = document.getElementById('site-search-bar');
  var form = document.getElementById('site-search-form');
  var note = document.getElementById('site-search-note');

  if (toggle && bar) {
    toggle.addEventListener('click', function () {
      var isHidden = bar.hidden;
      bar.hidden = !isHidden;
      toggle.setAttribute('aria-expanded', String(isHidden));
      if (isHidden) {
        var input = bar.querySelector('input[type="search"]');
        if (input) input.focus();
      }
    });
  }

  if (form && note) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      note.hidden = false;
    });
  }
})();
