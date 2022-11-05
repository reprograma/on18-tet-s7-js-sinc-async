/*
##Exercício da aula
  ###Vamos resolver um código assíncrono usando:
  [x] Callbacks;
  [] Promises;
  [] Async/await; <~ foco desta aula, por ser o método mais moderno e usado 

##Nosso Algoritmo
  ###Simulação de requisições de dados em uma empresa de e-commerce:
    1. Informações do básicas de uma usuária;
    2. A partir da id da usuária obter o endereço cadastrado;
    3. A partir da id da usuária obter o histórico de pedidos;
*/

//promise retorna uma callback:
//new Promise (() =>{})
// new Promise((resolve, reject) => {
//   resolve(resultado)
//   reject(erro)
// })

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

//const usuaria = pegarUsuaria()
//console.log(usuaria) // vai mostrar pending
pegarUsuaria()
  //.then() //vai capturar o resolve, que vai trazer o objeto
  .then((usuaria) => { console.log(usuaria.nome) })
  //.catch//vai capturar o erro
  .catch((err) => console.error("capturamos um erro: ", err)) // para capturar o erro lá nas informações
//tirar o comentado do return erro e como ele está antes, vai vir o retorno do erro.




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
//nesse caso faremos essa cadeia, pois o then vai me restornar o sucesso com os dados da usuária
//e nele terei o id da cliente e a partir dali eu conseguirei pegar o endereço, por isso essa cadeia.
pegarUsuaria()
  .then((usuaria) => {
    return pegarEndereco(usuaria.id) //usamos o return, pois é uma função dentro da outra e usamos chaves.
      .then((endereco) => {
        return console.log(endereco.cidade)
      })
  })
  .catch((err) => console.error("Capturamos um erro: ", err))

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

pegarUsuaria()
  .then((usuaria) => {
    return pegarEndereco(usuaria.id)
      .then((endereco) => {
        return pegarPedidos(usuaria.id)
          .then((historico) => {
            console.log(`
              Usuária: ${usuaria.nome}
              E-mail: ${usuaria.email}
              Endereco: ${endereco.rua}, ${endereco.numero}, ${endereco.cidade}
              Pedidos: ${historico.pedido1}, ${historico.pedido2}, ${historico.pedido3}
            `)
          })
      })
  })
  .catch((err) => console.error("Capturamos um erro: ", err)) 
