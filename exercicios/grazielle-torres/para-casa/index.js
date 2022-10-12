function buscarPrecoDolar() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        comercial: 5.26,
        turismo: 5.50,
      });
    }, 3000);
  });
}

function buscarJurosImportacao() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // return reject(new Error('BUGOU A API'))
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

async function calcularValorEmReal(nome, precoEmDolar) {
  try {
    const valorDolar = await buscarPrecoDolar()
    const precoEmReal = precoEmDolar * valorDolar.comercial
    const juros = await buscarJurosImportacao()
    const precoFinal = precoEmReal + (precoEmReal * juros.juros1) + (precoEmReal * juros.juros2)
    console.log(`${nome}, o preço final do seu produto é de R$${precoFinal.toFixed(2).replace('.', ',')}.`)
  }
  catch (error) {
    console.error("Capturado o erro: ", error)
  }
}

calcularValorEmReal("Grazielle", 1270)

