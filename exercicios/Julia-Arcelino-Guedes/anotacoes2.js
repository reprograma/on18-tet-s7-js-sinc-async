function pegarEndereco(idUsuaria,callback){
    setTimeout(()=>{
        return callback(null, {
            rua: "Rua Presidente",
            numero: 13,
            cidade: "Recife"
        })
    },2500)
}

function resolverEndereco(erro,endereco){
    if(erro){
        return console.error("Retornou erro para usuária",erro)
    }
    console.log(endereco.numero)
}

const usuaria = pegarUsuaria((erro,usuaria)=>{
    if(erro){
        return console.error("Retornou erro")
    }

    pegarEndereco(usuaria.id,(erro,endereco)=>{
        if(erro){
            return console.error("Erro")
        }
        console.log(endereco.numero)
    })
})