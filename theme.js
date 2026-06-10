function setTheme(name) {
  if (name === 'light') {
    document.documentElement.removeAttribute('data-theme');
    localStorage.removeItem('site-theme');
  } else {
    document.documentElement.setAttribute('data-theme', name);
    localStorage.setItem('site-theme', name);
  }
}
