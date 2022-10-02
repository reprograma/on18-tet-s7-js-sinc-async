// função que simula busca num banco que retorna o preço do produto:

function buscarPreco(produto) {
  setTimeout(() => {
    if (produto === "hormonios") {
      return {
        nome: "Hormônios",
        preco: 99.00
      }
    } else if (produto === "unhas gel") {
      return {
        nome: "Unhas em Gel",
        preco: 190.00
      }
    } else if (produto === "lace"){
      return {
        nome: "Lace",
        preco: 3900.00
      }
    } else {
      return "Produto não encontrado"
    }
  }, 2000)
}

// função que simula busca num banco que retorna o valor das parcelas:

function calcularParcela(preco) {
  let parcelasDesejadas = 10
  setTimeout(() => {
    return preco * parcelasDesejadas
  }, 2000)
}

async function resolver(produto, numeroParcelas) {
  try {
    const dadosDoProduto = await buscarPreco(produto); 
    const valorDaParcela = await calcularParcela(dadosDoProduto.preco, numeroParcelas)
    console.log(`Seu produto ${produto} custa R$${dadosDoProduto.preco.toFixed(2).replace('.', ',')} e você pagará em ${numeroParcelas}x de R$${valorDaParcela.toFixed(2).replace('.', ',')}`)
  }
  catch(error) {
    console.error("Capturei um erro", error)
  }
}

resolver("hormonios", 7)