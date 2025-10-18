
  const dropdownBtn = document.querySelector('.dropdown-btn');
  const dropdownContent = document.querySelector('.dropdown-content');

  dropdownBtn.addEventListener('click', (e) => {
    e.preventDefault();
    dropdownContent.classList.toggle('show');
  });

  // Fecha o menu se clicar fora
  window.addEventListener('click', (e) => {
    if (!e.target.matches('.dropdown-btn')) {
      dropdownContent.classList.remove('show');
    }
  });
