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
    const jurosImportacao = await buscarJurosImportacao()
    let precoReal = precoEmDolar * dolar.comercial;
    let juros1 = precoReal + (precoReal * 0.13) 
    let jurosTotal = juros1 + (juros1 * 0.07)
    console.log(`O preço final do seu produto é R$${jurosTotal.toFixed(2).replace('.', ',')}`)

  }

  catch (error) {
    console.error("Capturei um erro", error)
  }
}

calcularValorEmReal(1270)
