const precoEmDolarProduto = 1270;

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
    const dolar = await buscarPrecoDolar();
    const juros = await buscarJurosImportacao();
    let precoEmReal = (precoEmDolar*dolar.comercial);
    console.log(dolar.turismo);
    console.log(precoEmReal);

    console.log(juros.message);

    const valorFinal = (precoEmReal+(precoEmReal*(juros.juros1+juros.juros2)));

    console.log(valorFinal);

  }
  catch (error) {
    console.log("Nani?")
  }
}

calcularValorEmReal(precoEmDolarProduto);