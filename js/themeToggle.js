// Theme toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.querySelector('.theme-toggle-button');
    
    // Check stored theme preference
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme === 'light') {
      document.body.classList.add('light-theme');
      themeToggleBtn.textContent = '🌙 Dark Theme';
    } else {
      themeToggleBtn.textContent = '☀️ Light Theme';
    }
    
    // Toggle theme when button is clicked
    themeToggleBtn.addEventListener('click', () => {
      if (document.body.classList.contains('light-theme')) {
        // Switch to dark theme
        document.body.classList.remove('light-theme');
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.textContent = '☀️ Light Theme';
      } else {
        // Switch to light theme
        document.body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
        themeToggleBtn.textContent = '🌙 Dark Theme';
      }
    });
  });