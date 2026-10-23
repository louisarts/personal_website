function setTheme(name) {
  if (name === 'light') {
    document.documentElement.removeAttribute('data-theme');
    localStorage.removeItem('site-theme');
  } else {
    document.documentElement.setAttribute('data-theme', name);
    localStorage.setItem('site-theme', name);
  }
  var meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', { light: '#ffffff', dark: '#18181b', neon: '#09090f' }[name] || '#ffffff');
}

/* Click/keyboard path for the theme dropdown (hover still works via CSS) */
(function () {
  var picker = document.querySelector('.theme-picker');
  if (!picker) return;
  var toggle = picker.querySelector('.theme-toggle');

  function close() {
    picker.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', function () {
    var open = picker.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  picker.querySelectorAll('.theme-dropdown button').forEach(function (b) {
    b.addEventListener('click', close);
  });

  document.addEventListener('click', function (e) {
    if (!picker.contains(e.target)) close();
  });

  picker.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && picker.classList.contains('open')) {
      close();
      toggle.focus();
    }
  });
})();
