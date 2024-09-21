// Seleciona os elementos
const btnMenu = document.querySelector('.toggle-btn');
const sideBar = document.querySelector('.side-bar');
const content = document.querySelector('.content');
const background = document.querySelector('.background');

// Função para alternar o estado do menu (abrir/fechar)
btnMenu.addEventListener('click', () => {
    toggleMenu();
});

// Fecha o menu se o fundo de opacidade for clicado
background.addEventListener('click', () => {
    toggleMenu(false); // Fecha o menu
});

// Função que alterna o estado do menu e aplica as classes necessárias
function toggleMenu(shouldOpen = null) {
    const isOpen = sideBar.classList.contains('ativo');
    const action = shouldOpen === null ? !isOpen : shouldOpen;

    btnMenu.classList.toggle('ativo', action);
    sideBar.classList.toggle('ativo', action);
    content.classList.toggle('ativo', action);
    background.classList.toggle('ativo', action);

    // Altera a cor de fundo do body conforme o estado do menu
    document.body.style.backgroundColor = action ? '#34495e' : '#ecf0f1';
}
