const toggleBtn = document.getElementById('darkModeToggle');
const navbar = document.getElementById('navbar');

toggleBtn.addEventListener('click', () => {
  navbar.classList.toggle('dark-mode');

  if(navbar.classList.contains('dark-mode')) {
    toggleBtn.textContent = '라이트모드';
  } else {
    toggleBtn.textContent = '다크모드';
  }
});
