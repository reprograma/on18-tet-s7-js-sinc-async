/*
##Exercício da aula
  ###Vamos resolver um código assíncrono usando:
  [x] Callbacks;
  [x] Promises;
  [] Async/await; <~ foco desta aula, por ser o método mais moderno e usado 

##Nosso Algoritmo
  ###Simulação de requisições de dados em uma empresa de e-commerce:
    1. Informações do básicas de uma usuária;
    2. A partir da id da usuária obter o endereço cadastrado;
    3. A partir da id da usuária obter o histórico de pedidos;
*/

const pegarUsuaria = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // return reject(new Error('Retornou erro qualquer'))
      return resolve({
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
  try {
    // console.time('Karoline Macêdo')
    const usuaria = await pegarUsuaria()
    const endereco = await pegarEndereco(usuaria.id)
    const historico = await pegarPedidos(usuaria.id)
    // const resultados = await Promise.all([
    //   pegarEndereco(usuaria.id),
    //   pegarPedidos(usuaria.id)
    // ])
    // const endereco = resultados[0]
    // const historico = resultados[1]
    console.log(`
      Usuária: ${usuaria.nome}
      E-mail: ${usuaria.email}
      Endereco: ${endereco.rua}, ${endereco.numero}, ${endereco.cidade}
      Pedidos: ${historico.pedido1}, ${historico.pedido2}, ${historico.pedido3}
    `)
    // console.timeEnd('Karoline Macêdo')
  }
  catch(error) {
    console.error('Capturei um erro ', error)
  }
}

resolverPromise()
