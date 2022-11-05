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

//try - o que quero tentar que pode ser um erro, por isso uso o try.
//se der errado, o próximo passo é o catch, que é onde mostra o erro. O catch captura o erro.
//Assim o código não será quebrado 

async function resolverPromise() {
    try {
        console.time(`juliana`)//usar esse console mostra no terminal o tempo que levou para concluir as linhas de códigos
        const usuaria = await pegarUsuaria() 
        const endereco = await pegarEndereco(usuaria.id) 
        const historico = await pegarPedidos(usuaria.id)
        console.log(`
        Usuaria: ${usuaria.nome}
        E-mail: ${usuaria.email}
        Endereco: ${endereco.rua}, ${endereco.numero}, ${endereco.cidade}
        Pedidos: ${historico.pedido1}, ${historico.pedido2}, ${historico.pedido3}
        `)
        console.timeEnd(`juliana`)//complemento para ter a resposta do tempo
    }
    catch (error) {
        console.error("Capturei um erro", error)

    }
}

resolverPromise()