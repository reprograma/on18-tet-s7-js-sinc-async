async function buscarPrecoDolar() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve({
        comercial: "5.03",
        turismo: "5.17",
      });
    }, 1000);
  });
}

async function buscarJurosImportacao() {
  return new Promise((resolve,reject) => {
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

async function calcularValorEmReal(buscarJurosImportacao,buscarPrecoDolar,real) {
  try {
     let dollar= await buscarPrecoDolar()
     let juros= await buscarJurosImportacao()

    let precoReal=real* dollar.comercial

    let precoFInal=precoReal+(precoReal*juros.juros1)+(precoReal*juros.juros2)
    console.log(`O preço final é ${precoFInal.toFixed(2).replace('.',',')}`)

       
     }
      
     
     
  
  catch (error) {
    console.log(error)
  }
}


calcularValorEmReal(buscarJurosImportacao,buscarPrecoDolar,10.60)

//fazer se o try funcionar exibit a função buscaj e busca p
//se não funcionar exibe uma mensagem de erro