/*
  Shared header search-bar toggle, used on every page.

  Visual-only, per Deb's 2026-09-11 call: the real search stays tied to
  WordPress's own backend search (it already works on the live site —
  no reason to touch that when this is a CSS/visual redesign) and gets
  reconnected once this design is ported over to the real WordPress
  site. This draft can't run that search itself (no backend here), so
  clicking the icon just reveals a styled input to match the real
  site's look, and submitting it shows a short note instead of
  silently doing nothing or pretending to search.
*/
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
