
    // Mostrar info e zoom ao clicar na imagem
function mostrarInfo(tipo) {
  const infoBox = document.getElementById('infoBox');
  const imagens = document.querySelectorAll('.objeto');
  const imagemAlvo = document.querySelector(`.${tipo}`);
  const espacos = document.querySelector('.espacos');

  const jaComZoom = imagemAlvo.classList.contains('zoom');

  if (jaComZoom) {
    imagemAlvo.classList.remove('zoom');
    espacos.classList.remove('blur-outros');
    infoBox.style.display = 'none';
    return;
  }

  imagens.forEach(img => img.classList.remove('zoom'));
  espacos.classList.add('blur-outros');

  let texto = '';

  switch (tipo) {
  case 'nebulosa':
    texto = 'A Nebulosa de Órion, também conhecida como M42, é uma vasta nuvem de gás e poeira localizada a aproximadamente 1.344 anos-luz da Terra, na constelação de Órion. É uma das regiões de formação estelar mais próximas e brilhantes visíveis a olho nu. Essa nebulosa é uma gigantesca fábrica cósmica, onde novas estrelas nascem a partir do colapso de nuvens densas de hidrogênio. Dentro dela, processos complexos de ionização e radiação ultravioleta criam uma luminosidade brilhante e colorida, visível em imagens feitas por telescópios espaciais. A Nebulosa de Órion tem cerca de 24 anos-luz de diâmetro e é um laboratório natural para o estudo da evolução estelar.';
    break;
  case 'pilar':
    texto = 'Os Pilares da Criação são estruturas icônicas dentro da Nebulosa da Águia (M16), capturadas em imagens impressionantes pelo Telescópio Hubble. São colunas gigantes de gás molecular e poeira que se estendem por vários anos-luz, onde nascem novas estrelas. Esses pilares funcionam como “berçários estelares”, protegendo e alimentando o processo de formação de estrelas nas regiões internas mais densas. A radiação intensa das estrelas jovens ao redor esculpe e evapora as bordas dessas estruturas, revelando um cenário dramático e dinâmico do ciclo de vida estelar. A imagem dos Pilares da Criação se tornou um símbolo da beleza e complexidade do universo.';
    break;
  case 'pulsar':
    texto = 'Um pulsar é uma estrela de nêutrons altamente magnetizada que gira rapidamente, emitindo feixes regulares de radiação eletromagnética, geralmente na forma de ondas de rádio, luz visível, raios-X ou raios gama. Essas estrelas são os remanescentes ultra densos de supernovas — explosões cataclísmicas que ocorrem quando estrelas massivas esgotam seu combustível. A rotação rápida combinada com seu campo magnético gera pulsos precisos, parecidos com um farol cósmico, visíveis da Terra quando os feixes apontam para nós. Os pulsares são fundamentais para testar teorias da física, como a relatividade geral, e ajudam a mapear a estrutura da Via Láctea.';
    break;
  case 'estrela':
    texto = 'Estrelas gigantes, como Betelgeuse e Antares, são estrelas massivas que atingiram uma fase avançada de sua evolução. São significativamente maiores e mais brilhantes que o Sol, e podem ter diâmetros centenas de vezes maiores. Betelgeuse, por exemplo, é uma supergigante vermelha na constelação de Órion, conhecida por sua cor avermelhada e variabilidade no brilho. Essas estrelas estão em processo de esgotar o combustível em seus núcleos e frequentemente sofrem instabilidades que podem levá-las a explodir em supernovas, eventos que enriquecem o meio interestelar com elementos pesados e influenciam a formação de novas estrelas e planetas. O estudo delas ajuda a entender o ciclo de vida das estrelas massivas e a evolução do cosmos.';
    break;
}


  imagemAlvo.classList.add('zoom');
  infoBox.innerText = texto;
  infoBox.style.display = 'block';

  const rect = imagemAlvo.getBoundingClientRect();
  const espacosRect = espacos.getBoundingClientRect();
  const margem = 100;

  // Decide se a caixa vai ficar à direita ou à esquerda da imagem
  let leftPos;
  if (rect.left < window.innerWidth / 2) {
    // imagem na metade esquerda da tela: caixa à direita
    leftPos = rect.right - espacosRect.left + margem;
  } else {
    // imagem na metade direita da tela: caixa à esquerda
    leftPos = rect.left - espacosRect.left - infoBox.offsetWidth - margem;
  }

  // Centraliza verticalmente a caixa com a imagem
  const topPos = rect.top - espacosRect.top + (rect.height / 2) - (infoBox.offsetHeight / 2);

  infoBox.style.position = 'absolute';
  infoBox.style.left = `${leftPos}px`;
  infoBox.style.top = `${topPos}px`;
}
// Função para logout (deve ficar fora do DOMContentLoaded para ser acessível de fora)
function logout() {
  localStorage.removeItem("usuarioLogado");
  window.location.href = "index.html"; // Página de login
}

document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
  const btnEsqueciSenha = document.getElementById('btnEsqueciSenha');
  if (btnEsqueciSenha) {
    btnEsqueciSenha.addEventListener('click', mostrarTelaEsqueciSenha);
  }
  // Fundo animado só para index.html e cadastro.html
  if (path.includes("index.html") || path.includes("cadastro.html")) {
    // Criar estrelas animadas
    for (let i = 0; i < 120; i++) {
      const orbit = document.createElement("div");
      orbit.className = "star-orbit";
      orbit.style.top = Math.random() * 100 + "vh";
      orbit.style.left = Math.random() * 100 + "vw";
      orbit.style.animationDuration = (30 + Math.random() * 60) + "s";

      const star = document.createElement("div");
      star.className = "star";
      const size = Math.random() * 3 + 1;
      star.style.width = star.style.height = size + "px";
      star.style.left = Math.random() * 40 + 10 + "px";

      orbit.appendChild(star);
      document.body.appendChild(orbit);
    }

    // Criar planetas no fundo
    const planets = [
      { size: 80, top: '10vh', left: '10vw', image: 'https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg' },
      { size: 100, top: '75vh', left: '20vw', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Jupiter.jpg/500px-Jupiter.jpg' },
      { size: 120, top: '25vh', left: '75vw', image: 'https://img.odcdn.com.br/wp-content/uploads/2022/12/Terra.jpg' },
      { size: 70, top: '70vh', left: '85vw', image: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Uranus_%28Edited%29.jpg' },
      { size: 90, top: '50vh', left: '50vw', image: 'https://s2.glbimg.com/9qsld0QqbkS4vlbYgwaISENeQNA=/e.glbimg.com/og/ed/f/original/2019/02/21/neptune1.en.jpg' }
    ];

    planets.forEach(p => {
      const planet = document.createElement('div');
      planet.className = 'planet';
      planet.style.width = `${p.size}px`;
      planet.style.height = `${p.size}px`;
      planet.style.top = p.top;
      planet.style.left = p.left;
      planet.style.backgroundImage = `url(${p.image})`;
      planet.style.opacity = "0.6";
      document.body.appendChild(planet);
    });
  }
// === Cadastro ===
  const formCadastro = document.querySelector("#formCadastro");
  if (formCadastro) {
    formCadastro.addEventListener("submit", e => {
      e.preventDefault();

      const usuario = formCadastro.usuario.value.trim();
      const senha = formCadastro.senha.value;
      const confirmSenha = formCadastro.confirmSenha.value;
      const email = formCadastro.email.value.trim();

      if (senha !== confirmSenha) {
        alert("As senhas não coincidem!");
        return;
      }

      if (localStorage.getItem(`user_${usuario}`)) {
        alert("Usuário já existe!");
        return;
      }

      const dadosUsuario = {
        senha: senha,
        email: email
      };

      localStorage.setItem(`user_${usuario}`, JSON.stringify(dadosUsuario));
      alert("Cadastro realizado com sucesso!");

      window.location.href = "index.html"; // redireciona para login
    });
  }

  // === Login ===
  const formLogin = document.querySelector("#formLogin");
  if (formLogin) {
    formLogin.addEventListener("submit", e => {
      e.preventDefault();

      const usuario = formLogin.usuario.value.trim();
      const senha = formLogin.senha.value;

      const dadosUsuarioJSON = localStorage.getItem(`user_${usuario}`);

      if (!dadosUsuarioJSON) {
        alert("Usuário não encontrado!");
        return;
      }

      const dadosUsuario = JSON.parse(dadosUsuarioJSON);

      if (senha !== dadosUsuario.senha) {
        alert("Senha incorreta!");
        return;
      }

      localStorage.setItem("usuarioLogado", usuario);
      alert("Login realizado com sucesso!");
      window.location.href = "conteudo.html";
    });
  }


  // === Verifica se está logado e mostra popup ===
  const usuarioLogado = localStorage.getItem("usuarioLogado");
  if (usuarioLogado) {
    const dadosUsuarioJSON = localStorage.getItem(`user_${usuarioLogado}`);
    if (dadosUsuarioJSON) {
      const dadosUsuario = JSON.parse(dadosUsuarioJSON);

      const userInfoPopup = document.getElementById("userInfoPopup");
      if (userInfoPopup) {
        userInfoPopup.querySelector("p:nth-of-type(1) span").textContent = usuarioLogado;
        userInfoPopup.querySelector("p:nth-of-type(2) span").textContent = dadosUsuario.email || "Não informado";
      }

      const avatar = document.getElementById("userAvatar");
      const closeBtn = document.getElementById("closePopup");

      if (avatar && userInfoPopup) {
        avatar.addEventListener("click", () => {
          userInfoPopup.style.display = userInfoPopup.style.display === "block" ? "none" : "block";
        });

        if (closeBtn) {
          closeBtn.addEventListener("click", () => {
            userInfoPopup.style.display = "none";
          });
        }

        window.addEventListener("click", (e) => {
          if (!userInfoPopup.contains(e.target) && !avatar.contains(e.target)) {
            userInfoPopup.style.display = "none";
          }
        });
      }
    } else {
      localStorage.removeItem("usuarioLogado");
      window.location.href = "index.html";
    }
  } else {
    // Se estiver na página de conteúdo e não estiver logado, redireciona
    if (window.location.pathname.includes("conteudo.html")) {
      window.location.href = "index.html";
    }
  }

  // === Avatar ===
  const avatarImg = document.querySelector("#userAvatar img");
  const avatarInput = document.getElementById("avatarInput");
  const changeAvatarBtn = document.getElementById("changeAvatarBtn");

  if (changeAvatarBtn && avatarInput && avatarImg) {
    // Carrega avatar salvo (se houver)
    const avatarSalvo = localStorage.getItem(`avatar_${usuarioLogado}`);
    if (avatarSalvo) {
      avatarImg.src = avatarSalvo;
    }

    // Clica no input ao clicar no botão
    changeAvatarBtn.addEventListener("click", () => {
      avatarInput.click();
    });

    // Quando o usuário escolhe uma nova imagem
    avatarInput.addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const imageData = e.target.result;
          avatarImg.src = imageData;
          localStorage.setItem(`avatar_${usuarioLogado}`, imageData);
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // === Sistema de estrelas para avaliação ===
  const estrelas = document.querySelectorAll(".estrela");
  const inputNota = document.getElementById("nota");

  function atualizarEstrelas(nota) {
    estrelas.forEach(estrela => {
      const valor = parseInt(estrela.dataset.valor);
      estrela.classList.toggle("selecionada", valor <= nota);
    });
  }

  if (estrelas.length && inputNota) {
    estrelas.forEach(estrela => {
      estrela.addEventListener("click", () => {
        const valor = parseInt(estrela.dataset.valor);
        inputNota.value = valor;
        atualizarEstrelas(valor);
      });

      estrela.addEventListener("mouseenter", () => {
        const valor = parseInt(estrela.dataset.valor);
        atualizarEstrelas(valor);
      });

      estrela.addEventListener("mouseleave", () => {
        atualizarEstrelas(parseInt(inputNota.value));
      });
    });

    atualizarEstrelas(parseInt(inputNota.value));
  }
 
  // === Feedback form ===
  const feedbackForm = document.getElementById("feedbackForm");
  if (feedbackForm) {
    feedbackForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Mostrar mensagem de sucesso
      const mensagemEnviada = document.getElementById("mensagem-enviada");
      if (mensagemEnviada) {
        mensagemEnviada.style.display = "block";
      }

      // Limpar formulário
      this.reset();

      // Reset estrelas
      if (inputNota) {
        inputNota.value = 0;
        atualizarEstrelas(0);
      }
    });
  }
});