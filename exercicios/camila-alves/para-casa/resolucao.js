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

  async function calcularValorEmReal(precoEmDolar) {
    try {
      let valorDolar = await buscarPrecoDolar()
      let valorEmReais = precoEmDolar * valorDolar.comercial
      let juros = await buscarJurosImportacao()
      let valorTotal =  valorEmReais + (valorEmReais * juros.juros1 ) + (valorEmReais * juros.juros2)
      console.log(`O preço final do seu produto é R$${valorTotal.toFixed(2).replace(".", ",")}`)
    } 
    catch (error) {
      console.log("Capiturei um Erro", error)
    }

  }

  calcularValorEmReal(1270)


  // Você quer saber quanto vai pagar em reais por um produto comprado nos EUA e para isso precisa consultar numa "API" de cotação para descobrir o valor do Dólar no momento da compra (você deve usar o valor do dólar comercial) e calcular o valor em Real, em seguida precisa consultar outra "API" que retorna o valor de dois juros que serão cobrados sob o preço em Real e retornar o valor final no console: `O preço final do seu produto é R$8016,24`

  // passo 1 = presciso pegar o valor do dolar comercial
  // passo 2 =  valor do comercial * o valor em reais 
  // passo 3 =  pegar o juros 1
  // passo 4 = pegar o juros 2
  // passo 5 = passo 2 + (passo 2 * passo 3) + (passo 2 * passo 4 )

  
