function buscarPrecoDolar() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        comercial: "5.26",
        turismo: "5.50",
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
};

async function calcularValorEmReal(precoEmDolar) {
  try {
    const precoDolar = await buscarPrecoDolar()
    const jurosImportacao = await buscarJurosImportacao ()
    const valorEmReal = precoEmDolar * precoDolar.comercial
    const precoFinal = valorEmReal + (valorEmReal * jurosImportacao.juros1) +  (valorEmReal * jurosImportacao.juros2)
    console.log(`Ò preço final do produto é R${precoFinal.toFixed(2).replace('.', ',')} reais`)
  } 
  catch (error) {
     console.error(error)
  }
}
calcularValorEmReal(1270);