// Você quer saber quanto vai pagar em reais por um produto comprado nos EUA 
// e para isso precisa consultar numa "API" de cotação para descobrir o valor 
// do Dólar no momento da compra (você deve usar o valor do dólar comercial) e 
// calcular o valor em Real, em seguida precisa consultar outra "API" que 
// retorna o valor de dois juros que serão cobrados sob o preço em Real e 
// retornar o valor final no console: O preço final do seu produto é R$8016,24

const precoEmDolar = 1270

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
    const dolar = await buscarPrecoDolar()
    const juros = await buscarJurosImportacao()
    let precoEmReal = precoEmDolar * dolar.comercial
    let precoFinal = precoEmReal + (precoEmReal * juros.juros1) + (precoEmReal * juros.juros2)
    console.log(`O preço final do seu produto é R$${precoFinal.toFixed(2).replace('.', ',')}`)
  } 
  catch (error) {
    console.error("Capturado o erro: ", error)
  }
}
calcularValorEmReal(1270)
