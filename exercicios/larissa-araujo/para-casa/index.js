function buscarPrecoDolar() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        comercial: "5.26",
        turismo: "5.50",
      });
    }, 3000);
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

const precoEmDolar = 1270

async function calcularValorEmReal(precoEmDolar) {
  try {
    const cotacaoDolar = await buscarPrecoDolar()
    const precoEmReal = precoEmDolar * cotacaoDolar.comercial
    const juros = await buscarJurosImportacao()
    const precoFinal = precoEmReal + (precoEmReal * juros.juros1) + (precoEmReal * juros.juros2)
    console.log(`O preço final do seu produto é R$${precoFinal.toFixed(2).replace(".",",")}`)
  } 
  catch (error) {
    console.error("Foi capturado o erro ", error)
  }
}

calcularValorEmReal(1270)