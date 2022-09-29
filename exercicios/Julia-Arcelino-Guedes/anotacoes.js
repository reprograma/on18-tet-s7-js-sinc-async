//callbacks
const pegarUsuaria = (callback)=>{
    setTimeout(() => {
        return callback(null,{
            nome: "Angela Valentin",
            email: "angel@gmail.com"
        })
    },1000)
}

const resolverUsuaria = (erro, usuaria) =>{
    if(erro){
        return console.error("Retornou erro para usuária", erro)
    }
    console.log(usuaria.nome)
}

const usuaria = pegarUsuaria(resolverUsuaria)