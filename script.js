const experiencias = [
  {
    empresa: "Teknisa",
    cargo: "Estágio em Desenvolvimento de Software",
    periodo: "09/2024 - 02/2025",
    local: "Rua Serjipe - 1024 - Belo Horizonte",
    tecnologias: ["JavaScript", "TypeScript", "PHP", "SQL"],
    funcao: "Atuei como FullStack",
  },
  {
    empresa: "WBM Technology",
    cargo: "Estágio em Desenvolvimento de Software",
    periodo: "03/2025 - Atualmente",
    local: "Rua Olinto Magalhães - 194B - Belo Horizonte ",
    tecnologias: ["TypeScript", "JavaScript", "NodeJS", "React"],
    funcao: "Atuo como FullStack ",
  },
];

let current = 0;
function renderCard(index) {
  const card = document.getElementById("carrossel-card");
  card.style.opacity = 0; // inicia o fade-out

  setTimeout(() => {
    const exp = experiencias[index];
    card.innerHTML = `
      <div class="card">
        <div class="cardTitulo">
          <h2>${exp.empresa} - ${exp.cargo}</h2>
          <p>Período: ${exp.periodo}</p>
          <p>${exp.local}</p>
        </div>
        <div class="expTech">
          <h2>Tecnologias</h2>
          <ul>
            ${exp.tecnologias.map((tec) => `<li>${tec}</li>`).join("")}
          </ul>
        </div>
        <div class="funcao">
          <h2>Funções</h2>
          <p>${exp.funcao}</p>
        </div>
      </div>
    `;
    card.style.opacity = 1; // faz o fade-in
  }, 300); // tempo igual ao transition
}

document.getElementById("prevBtn").onclick = function () {
  current = (current - 1 + experiencias.length) % experiencias.length;
  renderCard(current);
};
document.getElementById("nextBtn").onclick = function () {
  current = (current + 1) % experiencias.length;
  renderCard(current);
};

renderCard(current); // Mostra o primeiro card ao carregar
