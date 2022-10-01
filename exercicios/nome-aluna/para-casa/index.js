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

// buscarPrecoDolar()
// .then(({comercial}) => {
//   let precoEmReal = precoEmDolar * comercial
//   return buscarJurosImportacao()
//   .then(({juros1, juros2}) => {
//     let precoFinal = precoEmReal + (precoEmReal * juros1) + (precoEmReal * juros2)
//     console.log(`O preço final do seu produto é R$${precoFinal.toFixed(2).replace('.', ',')}`)
//   })
// })
// .catch((error) => console.error("DEU ERRO: ", error))

async function calcularValorEmReal(precoEmDolar) {
  try {
    const dolar = await buscarPrecoDolar()
    const precoEmReal = precoEmDolar * dolar.comercial
    const juros = await buscarJurosImportacao()
    const precoFinal = precoEmReal + (precoEmReal * juros.juros1) + (precoEmReal * juros.juros2)
    console.log(`O preço final do seu produto é R$${precoFinal.toFixed(2).replace('.', ',')}`)
  } 
  catch (error) {
    console.error("Capturado o erro: ", error)
  }
}

// async function calcularValorEmReal(precoEmDolar) {
//   try {
//     // console.time('DURACAO')
//     const dados = await Promise.all([
//       buscarPrecoDolar(), 
//       buscarJurosImportacao()
//     ])
//     const { comercial } = dados[0]
//     const { juros1, juros2 } = dados[1]
//     const precoEmReal = precoEmDolar * comercial
//     const precoFinal = precoEmReal + (precoEmReal * juros1) + (precoEmReal * juros2)
//     console.log(`O preço final do seu produto é R$${precoFinal.toFixed(2).replace('.', ',')}`)
//     // console.timeEnd('DURACAO')
//   } 
//   catch (error) {
//     console.error("Capturado o erro: ", error)
//   }
// }

// calcularValorEmReal(1270)

// const obj = {nome: "Leinane",
//              turma: "on18"}

// const { turma } = obj
