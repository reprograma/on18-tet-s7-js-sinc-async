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

const pegarUsuaria = () => {
   //Utilização do setTimeout para simular requisição ao banco de dados
  setTimeout(() => {
    return {
      nome: "Angela Valentin",
      email: "angel@gmail.com",
      id: 8736826478
    }
  }, 1000)
}

// const pegarEndereco = () => {}
// const pegarPedidos = () => {}

const usuaria = pegarUsuaria() //pegarUsuaria() aqui está chamando a função
console.log(usuaria.nome) //se qro acessar uma propriedade do objeto precio usar o ".", assim "como usuaria.nome"
