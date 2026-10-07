
//puxando o arquivo vendas.json para dentro do index.js. Decidi separar para deixar o código mais limpo.

const vendas = require('./vendas.json');

// Aqui criei a função para calcular a comissão. Onde se o valor for <100 não terá comissão, se for > que 100 e < que 500 terá um acréscimo de 1%, que em decimal é 0.01, caso nenhuma das duas opções sejam verdadeiras, ou seja, o valor for > que 500 terá um acréscimo de 5%, que em decimal é 0.05.    
function calcularComissao(valor) {
  if (valor < 100) return 0;
  if (valor < 500) return valor * 0.01;
  return valor * 0.05;
}

//Aqui é onde estará acumulando as comissões dos vendedores, onde o objeto 'comissoes' terá o nome do vendodor e o valor calculado da comissão.
const relatorio = {};

vendas.vendas.forEach(venda => {
  const { vendedor, valor } = venda;
  const comissao = calcularComissao(valor);
//aqui é verificado o nome do vendedor, caso ainda não tenha entrada dele no objeto relatório, será criado um objeto no relatório do zero com o novo nome e valores.
  if (!relatorio[vendedor]) {
    relatorio[vendedor] = { totalVendas: 0, totalComissao: 0 };
  }

  relatorio[vendedor].totalVendas += valor;
  relatorio[vendedor].totalComissao += comissao;
});

//imprimindo o total de vendas e o calculo das comissões de cada vendedor no console.
console.log("Relatório de Vendas e Comissões:");
for (const vendedor in relatorio) {
  const { totalVendas, totalComissao } = relatorio[vendedor];
  console.log(`${vendedor} = Vendas: R$${totalVendas.toFixed(2)} total da comissão: R$${totalComissao.toFixed(2)}`);
}