function buscarPrecoDolar(valor) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        comercial:   5.26,
        turismo:  5.50,
      });
    }, 1000);
  });
}

function buscarJurosImportacao(valorReal) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        juros1:  0.13,
        juros2: 0.07,
        message:
        "os dois juros são aplicados no valor total do produto em real",
      });
    }, 1000);
  });
}

function calcularJuros(comercial, juros1){
  return new Promise ((resolve)=> {
    setTimeout(()=>  {
      return resolve ( comercial * juros1);
      
    }, 1000)
  })
}


const precoEmDolar = 1270
async function calcularValorEmReal(precoEmDolar) {
  try {
const valorDoDolar = await buscarPrecoDolar()
const valorJuros = await buscarJurosImportacao ()
const valorReal = precoEmDolar * valorDoDolar.comercial
const valorFinal = valorReal + (valorReal * valorJuros.juros2)
precoEmReal = precoEmDolar * valorDoDolar.comercial
precoFinal = precoEmReal + (valorJuros.juros1 * valorReal) + (valorJuros.juros2 * valorReal)

console.log(`O preço final do seu produto é R$${valorFinal.toFixed(2)}`)

  } 
  catch (error) {
    console.error("Capturei um erro: ", error)
  }
}

calcularValorEmReal(1270)