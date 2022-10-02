function buscarPrecoDolar() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        comercial: "5.03",
        turismo: "5.17",
      });
    }, 1000);
  });
}

function buscarJurosImportacao() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        juros1: 0.06,
        juros2: 0.11,
        message:
        "os dois juros são aplicados no valor total do produto em real",
      });
    }, 1000);
  });
}

async function calcularValorEmReal(precoEmDolar) {
  try {
    const dados = await Promise.all([buscarPrecoDolar , buscarJurosImportacao])
    const dolar = dados[0]
    const juros = dados[1]
    const valorEmReal = precoEmDolar * dolar.comercial
    const precoTotal = valorEmReal + (valorEmReal * juros.juros1) + (valorEmReal * juros.juros2)
    console.log( `O preço final do seu produto é R$${precoTotal.toFixed(2).replace(".",",")}`)
  } 
  catch (erro) {
    console.timeLog(erro)
  }
}

//console.log(buscarPrecoDolar)