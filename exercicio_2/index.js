const estoqueData = require('./estoque.json');

// Array para registrar movimentações
const movimentacoes = [];

// Função para lançar movimentação
function lancarMovimentacao(codigoProduto, quantidade, tipo, descricao) {
  // Encontrar produto no estoque
  const produto = estoqueData.estoque.find(p => p.codigoProduto === codigoProduto);

  if (!produto) {
    console.log("Produto não encontrado!");
    return;
  }

  // Gerar identificador único (simples: timestamp + código)
  const id = `${codigoProduto}-${Date.now()}`;

  // Atualizar estoque
  if (tipo === "entrada") {
    produto.estoque += quantidade;
  } else if (tipo === "saida") {
    if (produto.estoque < quantidade) {
      console.log("Estoque insuficiente para saída!");
      return;
    }
    produto.estoque -= quantidade;
  } else {
    console.log("Tipo de movimentação inválido (use 'entrada' ou 'saida').");
    return;
  }

  // Registrar movimentação
  movimentacoes.push({
    id,
    codigoProduto,
    descricaoMovimentacao: descricao,
    tipo,
    quantidade,
    estoqueFinal: produto.estoque
  });

  // Mostrar resultado
  console.log(`Movimentação registrada: ${descricao}`);
  console.log(`Produto: ${produto.descricaoProduto}`);
  console.log(`Estoque final: ${produto.estoque}`);
}

// Exemplos de uso:
lancarMovimentacao(101, 20, "entrada", "Reposição de Canetas");
lancarMovimentacao(102, 10, "saida", "Venda de Cadernos");
lancarMovimentacao(105, 5, "saida", "Venda de Marcadores");

// Novos lançamentos utilizados como teste.
lancarMovimentacao(102, 30, "entrada", "Reposição de Marcadores");
lancarMovimentacao(104, 50, "saida", "Venda de Lápis Preto HB");
lancarMovimentacao(103, 100, "saida", "Venda de Borracha Branca");
lancarMovimentacao(103, 150, "saida", "Venda de Borracha Branca");
lancarMovimentacao(103, 100, "saida", "Venda de Borracha Branca");
lancarMovimentacao(103, 200, "entrada", "Reposição de Borracha Branca");
// Mostrar todas as movimentações registradas
console.log("\nHistórico de Movimentações:");
console.table(movimentacoes);
