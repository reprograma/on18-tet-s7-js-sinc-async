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

function conversorDolar(preco, valorDola) {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(preco * valorDola);
    }, 2000)
  })
}


async function calcularValorEmReal(precoEmDolar) {
  try {
      const valorProdutoEmReal = await buscarPrecoDolar()
      const juros = await buscarJurosImportacao()
      const valor = await conversorDolar( valorProdutoEmReal.comercial, precoEmDolar)
      const resultado = valor + (valor * juros.juros1 )+ (valor * juros.juros2)
             
      console.log(` O Preço final do seu produto é de R$ ${resultado.toFixed(2).replace('.', ',')}`)
  } 
  catch (error) { 
      console . error ( "Capturei um erro" ,  error )
  }
}

calcularValorEmReal(1270)
