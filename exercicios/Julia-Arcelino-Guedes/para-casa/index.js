precoEmDolar = 1270
function buscarPrecoDolar() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        comercial: "5.26",
        turismo: "5.17",
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
    return buscarPrecoDolar()
      .then((precoDolar) =>{
        return (buscarJurosImportacao()
          .then((jurosImportacao)=>{
            console.log(`Preço em dollar: US$${precoEmDolar}`)
            console.log(`Valor do dollar comercial: US$${precoDolar.comercial}`)
            console.log(`Serão aplicados dois juros: ${jurosImportacao.juros1} e ${jurosImportacao.juros2}`)

            precoEmReal = precoEmDolar * precoDolar.comercial;
      precoFinal = precoEmReal + (jurosImportacao.juros1 * precoEmReal) + (jurosImportacao.juros2 * precoEmReal)
      console.log(`Valor final: R$${precoFinal}`)
          })
        )
      })
  }
  catch (error) {}
}

calcularValorEmReal(precoEmDolar)