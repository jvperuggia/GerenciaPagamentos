/*
Parte prática de Javascript:

Crie uma classe que possua dois métodos: 
um para realizar pagamento 
e outro para consultar o último pagamento. 

Pagamentos serão armazenados como objetos Javascript dentro de uma lista de pagamentos. 
Cada pagamento terá as propriedades: 
Código de Barras, 
Empresa 
e Valor. 

Quando um pagamento for realizado e o valor for maior que 100.00, o pagamento terá a propriedade categoria como 'cara', 
caso contrário, a propriedade categoria ficará como 'padrão'. O método de consultar(2) trará apenas o último pagamento.
  
  ex. 
  const servicoDePagamento = new ServicoDePagamento();
  servicoDePagamento.pagar('0987-7656-3475', 'Samar', 156.87);
  console.log(servicoDePagamento.consultarUltimoPagamento());
  {
     codigoBarras: '0987-7656-3475',
     empresa: 'Samar',
     valor: 56.87,
     categoria: 'cara'
  }  
  A entregua deve ser realizada via Github e o repositório deve ter a classe a pasta src e os testes dos métodos dessa classe dentro da pasta test usando Mocha e Node Assert.

*/
const listaPagamentos = [
  {
    codigo: 280260683,
    empresa: "Codex",
    valor: 75.9,
  },
  {
    codigo: 405675610,
    empresa: "Zetta",
    valor: 82000.0,
  },
  {
    codigo: 296754271,
    empresa: "CyberCore",
    valor: 3020,
  },
  {
    codigo: 147034176,
    empresa: "Zetta",
    valor: 99,
  },
  {
    codigo: 628352222,
    empresa: "CloudeWise",
    valor: 100.0,
  },
];

export function realizarPagamento(codigo, empresa, valor) {
  const pagamento = { codigo, empresa, valor };
  listaPagamentos.push(pagamento);
  if (pagamento.valor > 100) {
    pagamento.carategoria = "Cara"; // adiciona categoria
  } else {
    pagamento.carategoria = "Padrão";
  }
  return pagamento;
}

export function consultarUltimoPagamento(codigo) {
  const ultimoPagamento = listaPagamentos.at(-1);
  return ultimoPagamento;
}
