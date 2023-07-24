// Números de matrículas autorizadas e seus respectivos nomes
const alunos = {
  "297684550674": "João da Silva",
  "212210605005": "Maria Souza",
  "238946972429": "Pedro Almeida"
};

// Variável para armazenar os números dos armários disponíveis e indisponíveis
let armariosDisponiveis = [1, 2, 5, 10, 15];
let armariosIndisponiveis = [3, 4, 6, 8, 12];

// Variável para armazenar o número de matrícula selecionado para marcar disponível para indisponível
let matriculaSelecionada;

// Função para validar o número de matrícula
function validarMatricula() {
  const matriculaInput = document.getElementById('matricula');
  const matricula = matriculaInput.value.trim();

  if (alunos.hasOwnProperty(matricula)) {
    // Número de matrícula válido
    matriculaSelecionada = matricula;
    matriculaInput.value = ''; // Limpar o campo de entrada
    exibirInformacoesArmarios();
  } else {
    // Número de matrícula inválido
    alert("Matrícula inválida. Por favor, tente novamente.");
  }
}

// Função para exibir as informações dos armários e o sistema de marcação
function exibirInformacoesArmarios() {
  const statusContainer = document.getElementById('status-container');
  statusContainer.innerHTML = `
    <h2>Status dos Armários</h2>
    <p>Total de armários: 100</p>
    <p>Armários disponíveis: ${armariosDisponiveis.join(", ")}</p>
    <p>Armários indisponíveis: ${armariosIndisponiveis.join(", ")}</p>
  `;

  const sistemaMarcacao = document.createElement('div');
  sistemaMarcacao.classList.add('sistema-marcacao');

  armariosDisponiveis.forEach((armario) => {
    const botao = criarBotaoMarcacao(armario, "disponivel");
    sistemaMarcacao.appendChild(botao);
  });

  armariosIndisponiveis.forEach((armario) => {
    const botao = criarBotaoMarcacao(armario, "indisponivel");
    sistemaMarcacao.appendChild(botao);
  });

  statusContainer.appendChild(sistemaMarcacao);
}

// Função para criar um botão de marcação de armário
function criarBotaoMarcacao(armario, status) {
  const botao = document.createElement('button');
  botao.textContent = `Armário ${armario}`;
  botao.classList.add(status);

  if (status === "disponivel") {
    botao.addEventListener('click', () => {
      marcarArmarioIndisponivel(armario);
    });
  } else if (status === "indisponivel") {
    botao.addEventListener('click', () => {
      const confirmacao = window.confirm("Tem certeza de que deseja marcar este armário como disponível?");
      if (confirmacao) {
        marcarArmarioDisponivel(armario);
      }
    });
  }

  return botao;
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
