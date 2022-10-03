// ##CALLBACK SÍNCRONO


// function somar(n1, n2) {
//   return console.log(n1 + n2)
// } 

// function subtrair(n1, n2) {
//   return console.log(n1 - n2)
// } 

// function multiplicar(n1, n2) {
//   return console.log(n1 * n2)
// } 

// function dividir(n1, n2) {
//   return console.log(n1 / n2)
// } 

// function calcular(operacao, n1, n2) {
//   return operacao(n1, n2)
// }

// calcular(somar, 5, 9)
// calcular(multiplicar, 3, 2)

// ##CALLBACK ASSÍNCRONO

/*
##Exercício da aula
  ###Vamos resolver um código assíncrono usando:
  [] Callbacks;
  [] Promises;
  [] Async/await; <~ foco desta aula, por ser o método mais moderno e usado 

##Nosso Algoritmo
  ###Simulação de requisições de dados em uma empresa de e-commerce:
    1. Informações do básicas de uma usuária;
    2. A partir da id da usuária obter o endereço cadastrado;
    3. A partir da id da usuária obter o histórico de pedidos;
*/

//callback(erro, sucesso) -> callback(null, sucesso)

function pegarUsuaria(callback) {
 setTimeout(() => {
   return callback(null, {
     nome: "Angela Valentin",
     email: "angel@gmail.com",
     id: 8736826478
   })
 }, 1000)
}

function pegarEndereco(idUsuaria, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: "rua presidente",
      numero: "13",
      cidade: "Recife"
    })
  }, 2500)
}

function pegarPedidos(idUsuaria, callback) {
  setTimeout(() => {
    return callback(null, {
      pedido1: "adesivo",
      pedido2: "caneca",
      pedido3: "mouse"
    })
  }, 2500)
}


// const pegarPedidos = () => {}

const usuaria = pegarUsuaria((erro, usuaria) => {
  if(erro) {
    return console.error("Retornou erro para usuária", erro)
  }
  pegarEndereco(usuaria.id, (erro, endereco) => {
    if(erro) {
      return console.error("Retornou erro para usuária", erro)
    }
    pegarPedidos(usuaria.id, (erro, historico) => {
      if(erro) {
        return console.error("Retornou erro para usuária", erro)
      }
      console.log(`
        Usuária: ${usuaria.nome}
        E-mail: ${usuaria.email}
        Endereco: ${endereco.rua}, ${endereco.numero}, ${endereco.cidade}
        Pedidos: ${historico.pedido1}, ${historico.pedido2}, ${historico.pedido3}
      `)
    })
  })
}) 

