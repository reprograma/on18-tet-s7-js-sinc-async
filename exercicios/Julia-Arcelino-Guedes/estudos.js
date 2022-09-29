const pegarUsuaria = ()=>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            return resolve({
                nome: "Angela Valentin",
                email: "angel@gmail.com",
                id: 8736826478
            })
        },1000)
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

pegarUsuaria()
    .then((usuaria) => {
        console.log(usuaria)
        return pegarEndereco(usuaria.id)
            .then((endereco)=>{
                console.log(endereco)
                return pegarPedidos(usuaria.id)
                    .then((pedidos)=>{
                        console.log(pedidos)
                    })
            })

    })