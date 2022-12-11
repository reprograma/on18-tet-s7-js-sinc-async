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
  try {} 
  catch (error) {}
}


const valorDolar = await buscarPrecoDolar()
    const valorJuros = await buscarJurosImportacao()
    valorComJuros = precoEmDolar+(precoEmDolar*(valorJuros.juros1+valorJuros.juros2))
    valorSemJurosDolar = precoEmDolar*valorDolar.comercial
    valorFinalProduto = valorComJuros*valorDolar.comercial
    return console.log(
      `  Valor em Dólar (sem juros): US$${valorSemJurosDolar.toFixed(2)}
  Valor total com juros: US$${valorFinalProduto.toFixed(2)}`)
  } 
  catch (error) {console.log(error)}
}
calcularValorEmReal(10)