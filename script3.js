
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
});
