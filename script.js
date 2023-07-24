document.addEventListener('DOMContentLoaded', function() {
  const alunos = {
    "297684550674": "João da Silva",
    "212210605005": "Maria Souza",
    "238946972429": "Pedro Almeida"
  };

  let armariosDisponiveis = [1, 2, 5, 10, 15];
  let armariosIndisponiveis = [3, 4, 6, 8, 12];

  let matriculaSelecionada;

  function validarMatricula() {
    const matriculaInput = document.getElementById('matricula');
    const matricula = matriculaInput.value.trim();

    if (alunos.hasOwnProperty(matricula)) {
      matriculaSelecionada = matricula;
      matriculaInput.value = '';
      exibirInformacoesArmarios();
    } else {
      alert("Matrícula inválida. Por favor, tente novamente.");
    }
  }

  function marcarDesmarcarArmario(armario) {
    const indexDisponivel = armariosDisponiveis.indexOf(armario);
    const indexIndisponivel = armariosIndisponiveis.indexOf(armario);

    if (indexDisponivel !== -1) {
      armariosDisponiveis.splice(indexDisponivel, 1);
      armariosIndisponiveis.push(armario);
    } else if (indexIndisponivel !== -1) {
      const confirmacao = confirm("Deseja marcar este armário como disponível?");
      if (confirmacao) {
        armariosIndisponiveis.splice(indexIndisponivel, 1);
        armariosDisponiveis.push(armario);
      }
    }

    exibirInformacoesArmarios();
  }

  function exibirInformacoesArmarios() {
    const statusContainer = document.getElementById('status-container');
    statusContainer.innerHTML = "";

    for (let i = 1; i <= 15; i++) {
      const btn = document.createElement('button');
      btn.textContent = `Armário ${i}`;

      if (armariosDisponiveis.includes(i)) {
        btn.classList.add('disponivel');
        btn.addEventListener('click', () => marcarDesmarcarArmario(i));
      } else {
        btn.classList.add('indisponivel');
      }

      statusContainer.appendChild(btn);
    }

    const nomeAluno = alunos[matriculaSelecionada];
    if (nomeAluno) {
      const nomeAlunoContainer = document.createElement('div');
      nomeAlunoContainer.textContent = `Aluno(a): ${nomeAluno}`;
      statusContainer.appendChild(nomeAlunoContainer);
    }
  }

  document.getElementById('btn-acessar').addEventListener('click', validarMatricula);
});
