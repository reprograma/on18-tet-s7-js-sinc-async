
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

async function calcularValorEmReal(precoEmDolar, precodeTurismo) {
  try {

    // EXEMPLO 1 (mais simples)
    // const dolar = await buscarPrecoDolar()
    // const precoEmReal = precoEmDolar * dolar.comercial

    // const juros = await buscarJurosImportacao()
    // const precoFinal = precoEmReal + (precoEmReal * juros.juros1) + (precoEmReal * juros.juros2)

    // console.log(`O preço final do seu produto é R$${precoFinal.toFixed(2).replace('.', ',')}`)

    // EXEMPLO 2 (mais utilizado)
    const dados = await Promise.all([
      buscarPrecoDolar(),
      buscarJurosImportacao()
    ])

    const { comercial } = dados[0]
    const { juros1, juros2 } = dados[1]
    const precoEmReal = precoEmDolar * comercial
    const precoFinal = precoEmReal + (precoEmReal * juros1) + (precoEmReal * juros2)
    
    console.log(`O preço final do seu produto é R$${precoFinal.toFixed(2).replace('.', ',')}`)

  } 
  catch (error) {
    console.error("Capturei um erro", error)
  }
}

calcularValorEmReal(1270)