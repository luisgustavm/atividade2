 const canvas = document.getElementById('estrelasCanvas');
    const ctx = canvas.getContext('2d');

    let estrelas = [];
    let numEstrelas = 150;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function criaEstrelas() {
      estrelas = [];
      for (let i = 0; i < numEstrelas; i++) {
        estrelas.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          alpha: Math.random(),
          delta: Math.random() * 0.02
        });
      }
    }

    function animaEstrelas() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let estrela of estrelas) {
        ctx.beginPath();
        ctx.arc(estrela.x, estrela.y, estrela.radius, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255, 255, 255, ${estrela.alpha})`;
        ctx.fill();
        estrela.alpha += estrela.delta;
        if (estrela.alpha <= 0 || estrela.alpha >= 1) {
          estrela.delta = -estrela.delta;
        }
      }
      requestAnimationFrame(animaEstrelas);
    }

    window.addEventListener('resize', () => {
      resizeCanvas();
      criaEstrelas();
    });

    resizeCanvas();
    criaEstrelas();
    animaEstrelas();

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
 const perguntas = [
  {
    pergunta: "Qual planeta é conhecido por seus anéis?",
    opcoes: ["Júpiter", "Saturno", "Netuno", "Marte"],
    correta: 1,
    explicacao: "Saturno é famoso por seus anéis impressionantes compostos por gelo e rocha."
  },
  {
    pergunta: "Qual é o planeta mais próximo do Sol?",
    opcoes: ["Vênus", "Terra", "Mercúrio", "Marte"],
    correta: 2,
    explicacao: "Mercúrio é o planeta mais próximo do Sol, a cerca de 58 milhões de km."
  },
  {
    pergunta: "Qual planeta tem o maior vulcão do sistema solar?",
    opcoes: ["Terra", "Marte", "Júpiter", "Vênus"],
    correta: 1,
    explicacao: "Marte abriga o Monte Olimpo, o maior vulcão conhecido do sistema solar."
  },
  {
    pergunta: "Qual planeta é conhecido como planeta azul?",
    opcoes: ["Urano", "Terra", "Netuno", "Marte"],
    correta: 1,
    explicacao: "A Terra é chamada de planeta azul por causa da abundância de água em sua superfície."
  },
  {
    pergunta: "Qual planeta gira de lado?",
    opcoes: ["Urano", "Netuno", "Saturno", "Mercúrio"],
    correta: 0,
    explicacao: "Urano tem um eixo de rotação inclinado em cerca de 98 graus, praticamente de lado."
  },
  {
    pergunta: "Qual planeta tem os dias mais longos?",
    opcoes: ["Vênus", "Marte", "Saturno", "Netuno"],
    correta: 0,
    explicacao: "Um dia em Vênus dura 243 dias terrestres, mais que seu ano."
  },
  {
    pergunta: "Qual planeta tem a maior lua do sistema solar?",
    opcoes: ["Saturno", "Netuno", "Júpiter", "Marte"],
    correta: 2,
    explicacao: "Júpiter tem a maior lua, Ganimedes, maior que o planeta Mercúrio."
  },
  {
    pergunta: "Qual planeta tem clima mais extremo?",
    opcoes: ["Terra", "Vênus", "Netuno", "Marte"],
    correta: 2,
    explicacao: "Netuno tem ventos de até 2.000 km/h, os mais rápidos do sistema solar."
  },
  {
    pergunta: "Qual planeta tem a maior tempestade do sistema solar?",
    opcoes: ["Saturno", "Júpiter", "Netuno", "Urano"],
    correta: 1,
    explicacao: "Júpiter possui a Grande Mancha Vermelha, uma tempestade maior que a Terra."
  },
  {
    pergunta: "Qual planeta tem composição parecida com a da Terra?",
    opcoes: ["Vênus", "Netuno", "Saturno", "Urano"],
    correta: 0,
    explicacao: "Vênus é considerado o planeta gêmeo da Terra devido ao tamanho e composição rochosa."
  },

  // 20 perguntas adicionais
  {
    pergunta: "Qual planeta é conhecido por sua cor vermelha?",
    opcoes: ["Júpiter", "Marte", "Mercúrio", "Urano"],
    correta: 1,
    explicacao: "Marte é vermelho por causa do óxido de ferro em sua superfície."
  },
  {
    pergunta: "Qual planeta tem uma atmosfera rica em dióxido de carbono e nuvens de ácido sulfúrico?",
    opcoes: ["Terra", "Vênus", "Saturno", "Netuno"],
    correta: 1,
    explicacao: "Vênus tem uma atmosfera tóxica e extremamente quente, com dióxido de carbono e nuvens ácidas."
  },
  {
    pergunta: "Qual planeta tem os anéis menos visíveis?",
    opcoes: ["Saturno", "Júpiter", "Urano", "Netuno"],
    correta: 1,
    explicacao: "Júpiter tem anéis, mas são finos e difíceis de ver."
  },
  {
    pergunta: "Qual planeta possui 27 luas conhecidas?",
    opcoes: ["Urano", "Saturno", "Terra", "Marte"],
    correta: 0,
    explicacao: "Urano tem 27 luas conhecidas, incluindo Titania e Oberon."
  },
  {
    pergunta: "Qual planeta demora mais tempo para dar a volta ao Sol?",
    opcoes: ["Netuno", "Urano", "Júpiter", "Saturno"],
    correta: 0,
    explicacao: "Netuno leva 165 anos terrestres para completar uma volta ao redor do Sol."
  },
  {
    pergunta: "Qual planeta é o maior do sistema solar?",
    opcoes: ["Saturno", "Júpiter", "Netuno", "Vênus"],
    correta: 1,
    explicacao: "Júpiter é o maior planeta do sistema solar."
  },
  {
    pergunta: "Qual planeta possui as luas Fobos e Deimos?",
    opcoes: ["Terra", "Marte", "Saturno", "Urano"],
    correta: 1,
    explicacao: "Fobos e Deimos são as duas pequenas luas de Marte."
  },
  {
    pergunta: "Qual planeta é visível a olho nu e é o mais brilhante no céu noturno?",
    opcoes: ["Vênus", "Netuno", "Mercúrio", "Urano"],
    correta: 0,
    explicacao: "Vênus é o planeta mais brilhante visto da Terra."
  },
  {
    pergunta: "Qual planeta tem o campo magnético mais forte?",
    opcoes: ["Júpiter", "Saturno", "Terra", "Urano"],
    correta: 0,
    explicacao: "O campo magnético de Júpiter é o mais forte entre os planetas."
  },
  {
    pergunta: "Qual planeta quase não tem atmosfera?",
    opcoes: ["Mercúrio", "Vênus", "Marte", "Terra"],
    correta: 0,
    explicacao: "Mercúrio tem uma exosfera muito tênue, quase sem atmosfera."
  }
];

  const quizForm = document.getElementById("quizForm");
  if (quizForm) {
    perguntas.forEach((q, index) => {
      const div = document.createElement("div");
      div.innerHTML = `
        <p><strong>${index + 1}. ${q.pergunta}</strong></p>
        ${q.opcoes.map((op, i) => `
          <label>
            <input type="radio" name="q${index}" value="${i}">
            ${op}
          </label><br>`).join('')}
        <hr>
      `;
      quizForm.appendChild(div);
    });
  }

  // Função para enviar quiz (pode ser chamada no evento submit do formulário)
  window.enviarQuiz = function () {
    const respostasUsuario = [];
    let todasRespondidas = true;

    perguntas.forEach((q, i) => {
      const radios = document.getElementsByName(`q${i}`);
      let respostaSelecionada = null;

      for (const radio of radios) {
        if (radio.checked) {
          respostaSelecionada = parseInt(radio.value);
          break;
        }
      }

      if (respostaSelecionada === null) {
        todasRespondidas = false;
      }

      respostasUsuario.push(respostaSelecionada);
    });

    if (!todasRespondidas) {
      alert("Responda todas as perguntas antes de enviar.");
      return;
    }

    localStorage.setItem("respostasUsuario", JSON.stringify(respostasUsuario));
    window.open("resultado.html", "_blank");
  };
// Simulação fictícia da interface de usuário
const usuarioLogado = "usuario_exemplo"; // Nome fictício
const dadosUsuario = {
  email: "exemplo@email.com"
};

// Exibe o popup com informações fictícias
const userInfoPopup = document.getElementById("userInfoPopup");
if (userInfoPopup) {
  userInfoPopup.querySelector("p:nth-of-type(1) span").textContent = usuarioLogado;
  userInfoPopup.querySelector("p:nth-of-type(2) span").textContent = dadosUsuario.email;
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
    // Simulação de envio do formulário
    document.getElementById("feedbackForm").addEventListener("submit", function(e) {
      e.preventDefault(); // Impede o envio real
      document.getElementById("mensagemFeedback").style.display = "block";
    });
