// Números de matrículas autorizadas
const numerosMatriculasAutorizadas = ["297684550674", "212210605005", "238946972429"];

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
    <p>Armários disponíveis: 1, 2, 5, 10, 15</p>
    <p>Armários indisponíveis: 3, 4, 6, 8, 12</p>
  `;
  statusContainer.style.display = 'block';
}
