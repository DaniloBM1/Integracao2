// Números de matrículas autorizadas
const numerosMatriculasAutorizadas = ["297684550674", "212210605005", "238946972429"];

// Variável para armazenar os números dos armários disponíveis e indisponíveis
let armariosDisponiveis = [1, 2, 5, 10, 15];
let armariosIndisponiveis = [3, 4, 6, 8, 12];

// Função para validar o número de matrícula
function validarMatricula() {
  const matriculaInput = document.getElementById('matricula');
  const matricula = matriculaInput.value.trim();

  if (numerosMatriculasAutorizadas.includes(matricula)) {
    // Número de matrícula válido
    matriculaInput.value = ''; // Limpar o campo de entrada
    exibirInformacoesArmarios();
  } else {
    // Número de matrícula inválido
    alert("Matrícula inválida. Por favor, tente novamente.");
  }
}

// Função para exibir as informações dos armários
function exibirInformacoesArmarios() {
  const statusContainer = document.getElementById('status-container');
  statusContainer.innerHTML = `
    <h2>Status dos Armários</h2>
    <p>Total de armários: 100</p>
    <p>Armários disponíveis: ${armariosDisponiveis.join(", ")}</p>
    <p>Armários indisponíveis: ${armariosIndisponiveis.join(", ")}</p>
  `;
  statusContainer.style.display = 'block';

  const botoesContainer = document.createElement('div');
  botoesContainer.classList.add('botoes-container');

  armariosDisponiveis.forEach((armario) => {
    const botao = document.createElement('button');
    botao.textContent = `Marcar Armário ${armario} como Indisponível`;
    botao.addEventListener('click', () => marcarArmarioIndisponivel(armario));
    botoesContainer.appendChild(botao);
  });

  armariosIndisponiveis.forEach((armario) => {
    const botao = document.createElement('button');
    botao.textContent = `Marcar Armário ${armario} como Disponível`;
    botao.addEventListener('click', () => marcarArmarioDisponivel(armario));
    botoesContainer.appendChild(botao);
  });

  statusContainer.appendChild(botoesContainer);
}

// Função para marcar um armário como indisponível
function marcarArmarioIndisponivel(armario) {
  if (armariosDisponiveis.includes(armario)) {
    armariosDisponiveis = armariosDisponiveis.filter((num) => num !== armario);
    armariosIndisponiveis.push(armario);
    exibirInformacoesArmarios(); // Atualizar as informações após a alteração
  }
}

// Função para marcar um armário como disponível
function marcarArmarioDisponivel(armario) {
  if (armariosIndisponiveis.includes(armario)) {
    armariosIndisponiveis = armariosIndisponiveis.filter((num) => num !== armario);
    armariosDisponiveis.push(armario);
    exibirInformacoesArmarios(); // Atualizar as informações após a alteração
  }
}
