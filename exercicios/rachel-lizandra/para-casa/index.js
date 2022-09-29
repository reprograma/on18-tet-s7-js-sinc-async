
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
    const dolar = await buscarPrecoDolar()
    const juros = await buscarJurosImportacao()
    let precoReal = precoEmDolar * dolar.comercial
    let precoJuros1 = precoReal + (precoReal * juros.juros1)
    let precoJuros2 = precoJuros1 + (precoJuros1 * juros.juros2)
    console.log(`O preço final do seu produto é R$${precoJuros2.toFixed(2).replace('.', ',')}`)
  } 
  catch (error) {
    console.error("Capturei um erro", error)
  }
}

calcularValorEmReal(1270)