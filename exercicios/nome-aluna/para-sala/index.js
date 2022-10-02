// função que simula busca num banco que retorna o preço do produto:

function buscarPreco(produto) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (produto === "hormonios") {
        return resolve({
          nome: "Hormônios",
          preco: 99.00
        });
      } else if (produto === "unhas gel") {
        return resolve({
          nome: "Unhas em Gel",
          preco: 190.00
        });
      } else if (produto === "lace"){
        return resolve({
          nome: "Lace",
          preco: 3900.00
        });
      } else {
        return reject("Produto não encontrado");
      }
    }, 2000)

  })
  
}

// função que simula busca num banco que retorna o valor das parcelas:

function calculoParcelas(preco , numeroParcelas) {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(preco / numeroParcelas);
    }, 2000)
  })
}

async function resolve(produto , numeroParcelas) {
  try {
    const informacoesDoProduto = await buscarPreco(produto);
    const valorDaParcela = await calculoParcelas(informacoesDoProduto.preco, numeroParcelas)
    console.log(`Sua ${produto} custa R$${informacoesDoProduto.preco.toFixed(2).replace ("." , " ,")} e você pagará em ${numeroParcelas} x de R$${valorDaParcela.toFixed(2).replace("." , ",")}`)
  } 
  catch (erro) {
    console.log("Achei um erro", erro)
  }
}



resolve("lace" , 10)
