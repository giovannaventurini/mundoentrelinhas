
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

  // --- CÓDIGO DO BOTÃO VOLTAR AO TOPO ---
const backToTopButton = document.getElementById("back-to-top-btn");

// Função que será executada quando o usuário rolar a página
const scrollFunction = () => {
    // Se o usuário rolar mais de 300 pixels para baixo
    if (window.scrollY > 300) {
        // Adiciona a classe 'show' para mostrar o botão
        if(backToTopButton) backToTopButton.classList.add("show");
    } else {
        // Remove a classe 'show' para esconder o botão
        if(backToTopButton) backToTopButton.classList.remove("show");
    }
};

// Adiciona um "ouvinte" que chama a função sempre que a página for rolada
window.addEventListener("scroll", scrollFunction);
