
const themeToggle = document.getElementById('theme-toggle');
const rootElement = document.documentElement;

themeToggle.addEventListener('click', () => {
  const currentTheme = rootElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  rootElement.setAttribute('data-theme', newTheme);
  themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});