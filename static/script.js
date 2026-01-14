/* efeito no H1 do aside */

function mudaLetra() {
    const textElement = document.getElementById('animated-text');
    const originalText = "Amiraldo";
    const replacements = { 'O': '0', 'I': '1', 'A': '4', 'i':'1', 'a': '4', 'o':'0'};

    let newText = originalText.split('').map(char => {
        if (replacements[char]) {
            return Math.random() < 0.5 ? replacements[char] : char;
        }
        return char;
    }).join('');

    textElement.innerHTML = newText + '<span id="ponto">.</span>';
}

setInterval(mudaLetra, 1000);

// Chamada inicial para ativar o efieto assim que apágina for carregada
mudaLetra();

// ____________________________________________________________

/* Função para abrir e fechar o aside */
// Elementos principais
const menuMobile = document.querySelector('.menu-mobile');
const body = document.body;
const aside = document.getElementById('menu-responsive');
const asideLinks = document.querySelectorAll('#menu-responsive a');

// Função única para abrir / fechar o menu
function toggleMenu() {
  const isOpening = !body.classList.contains('menu-responsive-active');

  // Alterna ícone
  menuMobile.classList.toggle('bi-list');
  menuMobile.classList.toggle('bi-x');

  // Abre / fecha menu
  body.classList.toggle('menu-responsive-active');

  if (isOpening) {
    // Reset antes de animar
    aside.classList.remove('animate-links');

    // Aguarda o aside entrar para animar os links
    setTimeout(() => {
      aside.classList.add('animate-links');
    }, 400); // mesmo tempo do transition do aside
  } else {
    // Ao fechar, reseta animação
    aside.classList.remove('animate-links');
  }
}

// Clique no ícone do menu
menuMobile.addEventListener('click', toggleMenu);

// Clique em qualquer link do aside
asideLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Só fecha se o menu estiver aberto
    if (body.classList.contains('menu-responsive-active')) {
      toggleMenu();
    }
  });
});



// ____________________________________________________________



/* Animação de todos os itens com o atributo data-anime */

const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    const windowTop = window.scrollY + window.innerHeight * 0.85;
    // console.log(windowTop)
    item.forEach((element) => {
        if (windowTop > element.offsetTop) {
            element.classList.add("animate");
        } else {
            element.classList.remove("animate");
        }
    });
}
animeScroll()

window.addEventListener("scroll", ()=>{
    animeScroll();
})

// ____________________________________________________________



/* Ativar o carregamento do botão enviar */

const form = document.querySelector('.custom-form');
const btnEnviar = document.querySelector('#btn-send')
const btnEnviarLoader = document.querySelector('#btn-send-loader')

form.addEventListener("submit", (event) => {
    btnEnviarLoader.style.display = "block";
    btnEnviar.style.display = "none";
})

// ____________________________________________________________



// ____________________________________________________________