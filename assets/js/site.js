// Mobile menu
(function () {
  var btn = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // When the site is opened straight from a folder (file://), make folder links open their index.html
  if (location.protocol === 'file:') {
    document.querySelectorAll('a[href]').forEach(function (a) {
      var h = a.getAttribute('href');
      if (/^(https?:|mailto:|#)/.test(h)) return;
      var parts = h.split('#');
      if (parts[0] === '' ) return;
      if (parts[0].endsWith('/')) parts[0] += 'index.html';
      else if (parts[0] === '.' || parts[0] === './') parts[0] = 'index.html';
      a.setAttribute('href', parts.join('#'));
    });
  }

  // "Submit a Message" -> opens a pre-filled email to Flora
  var form = document.getElementById('message-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var v = function (id) { return (document.getElementById(id).value || '').trim(); };
      var name = (v('f-first') + ' ' + v('f-last')).trim();
      var subject = 'Website message from ' + name + (v('f-company') ? ' (' + v('f-company') + ')' : '');
      var body = v('f-message') + '\n\n—\n' + name + '\n' + v('f-email') + (v('f-company') ? '\n' + v('f-company') : '');
      window.location.href = 'mailto:flora@floradelaney.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  }
})();
