const experiencias = [
  {
    empresa: "Teknisa",
    cargo: "Estágio em Desenvolvimento de Software",
    periodo: "09/2024 - 02/2025",
    local: "Rua Serjipe - 1024 - Belo Horizonte",
    tecnologias: ["JavaScript", "TypeScript", "PHP", "SQL"],
    funcao:
      "Atuei como Full Stack desenvolvendo soluções frontend em TS/JS para responsividade, design e manipulação de dados, enquanto no backend otimizei performance através de refinamento de queries com PHP, garantindo operações ágeis em bancos de dados.",
  },
  {
    empresa: "WBM Technology",
    cargo: "Estágio em Desenvolvimento de Software",
    periodo: "03/2025 - Atualmente",
    local: "Rua Olinto Magalhães - 194B - Belo Horizonte ",
    tecnologias: ["TypeScript", "JavaScript", "NodeJS", "React"],
    funcao:
      "Como Desenvolvedor Full Stack na WBM, atuo no desenvolvimento de soluções completas utilizando React com TypeScript e Tailwind CSS para interfaces responsivas no frontend, integrando APIs RESTful e WebSocket para comunicação em tempo real, além de utilizar Postman para testes e simulação de dados. No backend, implemento sistemas em JavaScript com foco em comunicação IoT via protocolo Modbus, criação de APIs eficientes e otimização de operações através de queries de alto desempenho para garantir sincronia entre dispositivos e aplicações.",
  },
];

let current = 0;
let isSliding = false;

function renderCard(index, direction = "right") {
  if (isSliding) return;
  isSliding = true;

  const card = document.getElementById("carrossel-card");
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
