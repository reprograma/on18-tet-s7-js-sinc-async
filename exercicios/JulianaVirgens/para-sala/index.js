// função que simula busca num banco que retorna o preço do produto:

function buscarPreco(produto) {
  return new Promise((resolve, reject) => { //acrescenetei essa linha como promise. para retornar promise
  setTimeout(() => {
    if (produto === "hormonios") {
      return resolve ({ //acrescentei o resolve em todos os returns.
        nome: "Hormônios",
        preco: 99.00
      });
    } else if (produto === "unhas gel") {
      return resolve ({         //return é uma palavra chave que vai me retornar o que estou pedindo, se ela encontrar não seguirá a lista, pois não será necessário.
        nome: "Unhas em Gel",
        preco: 190.00
      });
    } else if (produto === "lace"){
      return resolve ({
        nome: "Lace",
        preco: 3900.00
      });
    } else {
      return reject ("Produto não encontrado")
    }
  }, 2000)
}
  )}

// função que simula busca num banco que retorna o valor das parcelas:

function calcularParcela(preco, numeroParcelas) {
  //let parcelasDesejadas = 10
  return new Promise((resolve) => { //acrescentei esse return e coloquei o sttimeout dentro.
    setTimeout(() => {              //feito dessa forma para lidar como async/await 
      return resolve(preco / numeroParcelas);
    }, 2000)
  })
  
}

async function resolver(produto, numeroParcelas) {
  try{
    const dadosDoProduto = await buscarPreco(produto);
    const valorDaParcela = await calcularParcela(dadosDoProduto.preco, numeroParcelas)
    //esse console tem que ser dinamico, por isso foi feito dessa forma
    console.log(`Sua ${produto} custa R$${dadosDoProduto.preco.toFixed(2).replace('.',',')} e você pagará em ${numeroParcelas}x de R$${valorDaParcela.toFixed(2).replace('.',',')}`)
  }
  catch(error) {
    console.error("Capturei um erro", error)
  }
}

resolver("lace", 10)