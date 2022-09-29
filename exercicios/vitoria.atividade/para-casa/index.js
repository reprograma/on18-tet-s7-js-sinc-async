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
    const precoEmDolar = await buscarJurosImportacao()
    const valorJuros = await buscarJurosImportacao()
    let precoEmReal = precoEmDolar * valorDoDolar.comercial
    let valorFinal = precoEmReall + (precoEmReal * valorJuros.juros1) + (precoEmReal * valorJuros.juros2)
console.log(`O valor total do seu produto é R$${valorFinal.toFixed(2).replace('.', ',')}.`)
  }
 
  catch (error) {
    console.log("Encontrei um erro: ", error)
  }
}
calcularValorEmReal(precoEmDolar)