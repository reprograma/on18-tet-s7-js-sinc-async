// const precoEmDolar = 1270  //preço em dólar


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
    const cotacaoDolar = await buscarPrecoDolar()
    const valorJuros = await buscarPrecoDolar()    
    const valorEmReal = precoEmDolar * cotacaoDolar.comercial
    // const valorJuros1 = valorDosJuros.juros1
    // const valorJuros2 = valorDosJuros.juros2

    const valorEmRealComJuros = valorEmReal + (valorEmReal * valorJuros.juros1) + (valorEmReal*valorJuros.juros2)
    console.log(`O preco final do seu produto é: R$${valorEmRealComJuros.toFixed(2).replace('.',',')}`)
  } 
  catch (error) {
    console.error("Capturei um erro ", error)
  }
}

calcularValorEmReal(1270)