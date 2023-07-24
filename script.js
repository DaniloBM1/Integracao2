document.addEventListener('DOMContentLoaded', () => {
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

  // Restante do código permanece o mesmo...
  // ...
});
