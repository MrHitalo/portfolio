const experiencias = [
  {
    empresa: "Teknisa",
    cargo: "Estágio em Desenvolvimento de Software",
    periodo: "09/2024 - 02/2025",
    local: "Rua Serjipe - 1024 - Belo Horizonte",
    tecnologias: ["JavaScript", "TypeScript", "PHP", "SQL"],
    funcao: "Como Fullstack atuei no Front-end utilizando o Zeedhi como Framework para estilização e responsividade, o Typescript para lógicas. No Back-end utilizei PHP para otimização de query",
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
let isSliding = false;

function renderCard(index, direction = "right") {
  if (isSliding) return;
  isSliding = true;

  const card = document.getElementById("carrossel-card");
  // Sai para a esquerda ou direita
  card.classList.remove("slide-in", "slide-in-right", "slide-out-left");
  card.classList.add(
    direction === "right" ? "slide-out-left" : "slide-in-right"
  );

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
    // Entra do lado oposto
    card.classList.remove("slide-out-left", "slide-in-right");
    card.classList.add("slide-in");
    setTimeout(() => {
      isSliding = false;
    }, 400);
  }, 400);
}

document.getElementById("prevBtn").onclick = function () {
  current = (current - 1 + experiencias.length) % experiencias.length;
  renderCard(current, "left");
};
document.getElementById("nextBtn").onclick = function () {
  current = (current + 1) % experiencias.length;
  renderCard(current, "right");
};

renderCard(current);
