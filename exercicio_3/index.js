//decidi por usar a biblioteca date-fns para não ser necessário calcular a data em milisegundos (padrão do javascript), deixando o código mais direto

const { differenceInDays } = require('date-fns');

function calcularJuros(valor, dataVencimento) {
  const hoje = new Date();
  const vencimento = new Date(dataVencimento);

  // diferença em dias usando date-fns
  const diasAtraso = differenceInDays(hoje, vencimento);

  if (diasAtraso <= 0) {
    console.log("Nenhum atraso. Valor sem juros.");
    return valor;
  }

  const juros = valor * 0.025 * diasAtraso;
  const valorFinal = valor + juros;

  console.log(`Valor original: R$${valor.toFixed(2)}`);
  console.log(`Dias de atraso: ${diasAtraso}`);
  console.log(`Juros: R$${juros.toFixed(2)}`);
  console.log(`Valor final: R$${valorFinal.toFixed(2)}`);

  return valorFinal;
}

// Exemplo de uso:
//aqui colocaremos os valores a serem caluculados.
calcularJuros(100, "2026-09-07"); 
