/* Personal portfolio interactions. No accounts, API keys, or build tools needed. */
(() => {
  'use strict';
  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  const paletteButton = document.querySelector('.palette-toggle');
  const palette = document.querySelector('#palette');
  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#navigation-links');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const storage = {
    get(key) { try { return localStorage.getItem(key); } catch { return null; } },
    set(key, value) { try { localStorage.setItem(key, value); } catch { /* Private browsing can disable storage. */ } }
  };
  function setTheme(theme) {
    root.dataset.theme = theme;
    themeButton.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#101820' : '#f1f6fc';
    storage.set('satyendra-theme', theme);
  }
  const savedTheme = storage.get('satyendra-theme');
  setTheme(savedTheme === 'dark' ? 'dark' : 'light');
  themeButton.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));
  function setAccent(color) {
    if (!['blue', 'violet', 'emerald'].includes(color)) return;
    root.dataset.accent = color;
    document.querySelectorAll('[data-color]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.color === color)));
    storage.set('satyendra-accent', color);
  }
  setAccent(storage.get('satyendra-accent') || 'blue');
  function closePalette() { palette.hidden = true; paletteButton.setAttribute('aria-expanded', 'false'); }
  paletteButton.addEventListener('click', () => { palette.hidden = !palette.hidden; paletteButton.setAttribute('aria-expanded', String(!palette.hidden)); });
  document.querySelectorAll('[data-color]').forEach(button => button.addEventListener('click', () => setAccent(button.dataset.color)));
  document.addEventListener('click', event => { if (!event.target.closest('.palette-wrap')) closePalette(); });
  function closeMenu() { menu.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Open navigation'); }
  menuButton.addEventListener('click', () => { const open = menu.classList.toggle('open'); menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('click', event => { if (!event.target.closest('.navigation')) closeMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') { closePalette(); closeMenu(); } });
  window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);
  const header = document.querySelector('.site-header');
  const backToTop = document.querySelector('.back-to-top');
  function updateScroll() { header.classList.toggle('scrolled', scrollY > 25); backToTop.classList.toggle('visible', scrollY > 600); }
  window.addEventListener('scroll', updateScroll, { passive: true });
  updateScroll();
  const navLinks = [...menu.querySelectorAll('a')];
  const sections = navLinks.map(link => document.querySelector(link.getAttribute('href')));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) navLinks.forEach(link => { const active = link.hash === '#' + entry.target.id; link.classList.toggle('active', active); if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); }); });
  }, { rootMargin: '-20% 0px -55% 0px' });
  sections.forEach(section => observer.observe(section));

  // Animated role text. The complete description remains available to screen readers.
  const roles = ['Software Developer', 'Machine Learning Enthusiast', 'Computer Science Student'];
  const typed = document.querySelector('#typed-role');
  let roleIndex = 0, length = roles[0].length, deleting = true, typeTimer;
  function typeRole() {
    if (reducedMotion.matches) { typed.textContent = roles[0]; return; }
    const role = roles[roleIndex];
    length += deleting ? -1 : 1;
    typed.textContent = role.slice(0, length);
    let delay = deleting ? 35 : 65;
    if (length === 0) { deleting = false; roleIndex = (roleIndex + 1) % roles.length; delay = 250; }
    else if (length === roles[roleIndex].length && !deleting) { deleting = true; delay = 2300; }
    typeTimer = setTimeout(typeRole, delay);
  }
  if (!reducedMotion.matches) typeTimer = setTimeout(typeRole, 2600);
  reducedMotion.addEventListener('change', () => { clearTimeout(typeTimer); typed.textContent = roles[0]; roleIndex = 0; length = roles[0].length; deleting = true; if (!reducedMotion.matches) typeTimer = setTimeout(typeRole, 2600); });

  // Project categories and details.
  const cards = [...document.querySelectorAll('.project-card')];
  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(other => { const active = other === button; other.classList.toggle('active', active); other.setAttribute('aria-pressed', String(active)); });
    cards.forEach(card => { card.hidden = filter !== 'all' && !card.dataset.category.split(' ').includes(filter); });
    document.querySelector('#filter-status').textContent = `Showing ${cards.filter(card => !card.hidden).length} projects.`;
  }));
  const dialog = document.querySelector('#project-dialog');
  const dialogContent = document.querySelector('#dialog-content');
  document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
    const template = document.querySelector('#detail-' + button.dataset.project);
    dialogContent.replaceChildren(template.content.cloneNode(true));
    dialog.showModal();
    dialog.scrollTop = 0;
    document.body.classList.add('dialog-open');
  }));
  document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { const rect = dialog.getBoundingClientRect(); if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close(); });
  dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));

  // Static hosting: open a draft in the visitor's email application.
  // This does not send or store messages on a server.
  document.querySelector('#contact-form').addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(data.get('subject').trim());
    const body = encodeURIComponent(`${data.get('message').trim()}\n\nFrom: ${data.get('name').trim()}\nEmail: ${data.get('email').trim()}`);
    window.location.href = `mailto:satendrarajsingh05@gmail.com?subject=${subject}&body=${body}`;
    document.querySelector('#form-note').textContent = 'Your email draft was requested. If no app opens, email satendrarajsingh05@gmail.com directly.';
  });
  document.querySelector('#year').textContent = String(new Date().getFullYear());
})();
