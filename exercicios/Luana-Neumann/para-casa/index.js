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
    const precoDolar = await buscarPrecoDolar()
    const jurosAdd = await buscarJurosImportacao()

    let valorEmReais = precoDolar.comercial*precoEmDolar
    let valorJuros1 = valorEmReais * jurosAdd.juros1
    let valorEmReaisJuros1 = valorEmReais + valorJuros1
    let valorJuros2 = valorEmReaisJuros1 * jurosAdd.juros2
    let valorTotalEmReais = valorEmReaisJuros1 + valorJuros2
    console.log(`O preço final do seu produto é R$${valorTotalEmReais.toFixed(2).replace('.', ',')}`)
  }    
  catch (error) {
    console.error("Houve um erro", error)
  }
}

calcularValorEmReal(1270)
//1. Descobrir a cotação do dolar ==> está na função buscarPrecoDolar
//2. Usar a cotação do dolar comercial
//3. Calcular o valor em real. ==> valor do produto em dolar* preco do dolar
//4. Juros da funçãoJuros importação serão adicionados ao valor em real.
//5. Retornar o valor final no console: `O preço final do seu produto é R$8016,24`