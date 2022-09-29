// Você quer saber quanto vai pagar em reais por um produto comprado nos EUA e para isso precisa consultar 
// numa "API" de cotação para descobrir o valor do Dólar no momento da compra(você deve usar o valor do dólar 
// comercial) e calcular o valor em Real, em seguida precisa consultar outra "API" que retorna o valor de 
// dois juros que serão cobrados sob o preço em Real e retornar o valor final no 
// console: `O preço final do seu produto é R$8016,24`


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

function calcularValorJuros(comercial, juros1) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(comercial * juros1);
      }, 2000)
    });
  }

  const precoEmDolar = 1270

async function calcularValorEmReal(precoEmDolar) {
  try {
    const valorEmDolar = await buscarPrecoDolar()
    const valorDoJuros = await buscarJurosImportacao()
    let valorEmReal = precoEmDolar * valorEmDolar.comercial;
    let valorfinal =
    valorEmReal + valorEmReal * valorDoJuros.juros1 +
    valorEmReal * valorDoJuros.juros2;
    console.log(
      `preço final do seu produto é R$${valorfinal
      .toFixed(2)
      .replace(".",",")}`
    );
  } catch (error) {
    // console.error("capturei um erro", error);
  }
}

calcularValorEmReal(1270);