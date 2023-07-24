// Dados iniciais dos armários (vazios)
let armariosDisponiveis = [];
let armariosIndisponiveis = [];
const armariosTotais = 100; // Total de armários

// Função para exibir informações dos armários
function exibirInformacoesArmarios() {
  document.getElementById('total-armarios').textContent = armariosTotais;
  document.getElementById('armarios-disponiveis').textContent = armariosDisponiveis.join(', ');
  document.getElementById('armarios-indisponiveis').textContent = armariosIndisponiveis.join(', ');

  // Atualizar opções do select com os armários disponíveis
  const selectArmario = document.getElementById('armario');
  selectArmario.innerHTML = '<option value="" disabled selected>Selecione o Armário</option>';
  armariosDisponiveis.forEach((armario) => {
    const option = document.createElement('option');
    option.value = armario;
    option.textContent = armario;
    selectArmario.appendChild(option);
  });
}

// Função para marcar um armário como disponível ou indisponível
function marcarArmario() {
  const matricula = document.getElementById('matricula').value;
  const armarioSelecionado = document.getElementById('armario').value;

  // Verificar se o armário já está marcado como disponível ou indisponível
  if (armariosDisponiveis.includes(armarioSelecionado)) {
    armariosIndisponiveis.push(armarioSelecionado);
    armariosDisponiveis = armariosDisponiveis.filter((armario) => armario !== armarioSelecionado);
  } else if (armariosIndisponiveis.includes(armarioSelecionado)) {
    armariosDisponiveis.push(armarioSelecionado);
    armariosIndisponiveis = armariosIndisponiveis.filter((armario) => armario !== armarioSelecionado);
  }

  exibirInformacoesArmarios();
}

// Exemplo de armários disponíveis e indisponíveis (pode ser alterado de acordo com a situação)
armariosDisponiveis = [1, 2, 5, 10, 15];
armariosIndisponiveis = [3, 4, 6, 8, 12];

// Exibir informações dos armários ao carregar a página
exibirInformacoesArmarios();
