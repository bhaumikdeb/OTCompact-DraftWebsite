
(function () {
  var svg = document.querySelector('.us-map');
  if (!svg) return;

  var interactive = svg.querySelectorAll('path[data-status="member"], path[data-status="accepting"]');

  interactive.forEach(function (path) {
    var stateId = path.getAttribute('data-id');
    var stateName = path.getAttribute('data-name');
    var status = path.getAttribute('data-status');
    if (!stateId) return;

    path.classList.add('us-map-clickable');
    path.setAttribute('tabindex', '0');
    path.setAttribute('role', 'link');
    path.setAttribute(
      'aria-label',
      stateName + (status === 'accepting' ? ' — now accepting OTC applications, view details' : ' — OTC member state, view details')
    );

    // Native SVG <title> gives a plain browser tooltip on hover (screen
    // readers and mouse users both), same accessible pattern as an
    // <img alt>/<a title> — not the custom hover-popup-with-extra-data
    // interaction the client's notes said to move away from.
    var titleEl = document.createElementNS('http://www.w3.org/2000/svg', 'title');
    titleEl.textContent = stateName + ' — click to view legislation & application status';
    path.appendChild(titleEl);

    function go() {
      window.location.href = 'before-you-apply.html#state-' + stateId;
    }

    path.addEventListener('click', go);
    path.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        go();
      }
    });
  });
})();
