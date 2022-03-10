const themeSwitcher = document.querySelector('.select');

themeSwitcher.addEventListener('change', () => {
  const body = document.body;
  let themeName = themeSwitcher.value;
  body.className = '';
  body.classList.add(themeName);
});
