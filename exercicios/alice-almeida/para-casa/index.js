function buscarPrecoDolar() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        comercial: 5.26,
        turismo: 5.5,
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
    // Unindo as duas promessas em uma única promessa com Promisse.all
    let [precoDolar, jurosImportacao] = await Promise.all([
      buscarPrecoDolar(),
      buscarJurosImportacao(),
    ]);
    let precoEmReal = precoEmDolar * precoDolar.comercial;
    let juros = [
      precoEmReal * jurosImportacao.juros1,
      precoEmReal * jurosImportacao.juros2,
    ];
    let precoComJuros = precoEmReal + juros.reduce((i, juros) => i + juros);
    return precoComJuros;
  } catch (error) {
    return error;
  }
}

calcularValorEmReal(580)
  .then((valorReal) =>
    console.log(`O preço final do seu produto é R$${valorReal}`)
  )
  .catch((error) => console.log(`Erro: ${error}`));

calcularValorEmReal(1020)
  .then((valorReal) =>
    console.log(`O preço final do seu produto é R$${valorReal}`)
  )
  .catch((error) => console.log(`Erro: ${error}`));
