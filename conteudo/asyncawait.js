const pegarUsuaria = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        //return reject(new Error('Retornou erro qualquer')) //caso dê errado retorna um "reject"
        return resolve({   //quando a promise é resolvida com sucesso, ela nos retorna um "resolve" trazendo as informações que a gente quer. 
          nome: "Angela Valentin",
          email: "angel@gmail.com",
          id: 8736826478
        })
      }, 1000)
    })
  }
  

  const pegarEndereco = (idUsuaria) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve({
          rua: "rua marielle franco",
          numero: "9",
          cidade: "recife",
        })
      }, 3 * 1000)
    })
  }

  
  const pegarPedidos = (idUsuaria) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve({
          pedido1: "adesivo",
          pedido2: "caneca",
          pedido3: "mouse",
        })
      }, 2500)
    })
  }
  
 async function resolverPromise() {
    const usuaria = await pegarUsuaria() //await vai na frente da função assíncrona, nesse caso no "pegarUsuaria"
        const endereco = await pegarEndereco(usuaria.id) //aqui usamos id pois já havíamos buscado o usuaria, então pelo pedido do exercício, seguiremos buscando pelo id.
        const historico = await pegarPedidos(usuaria.id)
        console.log(`
        Usuaria: ${usuaria.nome}
        E-mail: ${usuaria.email}
        Endereco: ${endereco.rua}, ${endereco.numero}, ${endereco.cidade}
        Pedidos: ${historico.pedido1}, ${historico.pedido2}, ${historico.pedido3}
        `)
    
 }
  resolverPromise()