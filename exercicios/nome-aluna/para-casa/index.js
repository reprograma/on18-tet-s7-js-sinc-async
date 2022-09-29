async function buscarPrecoDolar() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve({
        comercial: 5.26,
        turismo: 5.50,
      });
    }, 1000);
  });
}

async function buscarJurosImportacao() {
  return new Promise((resolve,reject) => {
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

async function calcularValorEmReal(buscarJurosImportacao,buscarPrecoDolar) {
  try {
     let dollar= await buscarPrecoDolar()
        console.log(dollar.comercial)
       
     }
      
     
     
  
  catch (error) {
    console.log(error)
  }
}


calcularValorEmReal(buscarJurosImportacao,buscarPrecoDolar)

//fazer se o try funcionar exibit a função buscaj e busca p
//se não funcionar exibe uma mensagem de erro