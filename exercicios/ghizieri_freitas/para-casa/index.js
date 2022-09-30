function buscarPrecoDolar() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        comercial: 5.26,
        turismo: 5.50,
      });
    }, 1000);
  });
}

function buscarJurosImportacao() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        juros1: 0.13,
        juros2: 0.07,
        message:
        "os dois juros são aplicados no valor total do produto em real",
      });
    }, 1000);
  });
}

async function calcularValorEmReal(precoEmDolar) {
  try {
    const cotacao = await buscarPrecoDolar();
    const jurosImportacao = await buscarJurosImportacao();
    const precoEmReaisSemImpostos = precoEmDolar * cotacao.comercial;
    
    return precoEmReaisSemImpostos * (1 + jurosImportacao.juros1 + jurosImportacao.juros2);
  } 
  catch (error) {}
}

calcularValorEmReal(1270).then(precoEmReais => {
  console.log("O preço final do seu produto é R$" + precoEmReais.toFixed(2).replace(".", ",")); 
});

