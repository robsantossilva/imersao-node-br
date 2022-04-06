/*
0 Obter um usuário
1 Obter o numero de telefone de um usuario a partir de seu ID
2 Obter o endereco do usuario pelo ID
*/

function obterUsuario(callback) {
    setTimeout(function () {
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    }, 1000)
}

function obterTelefone(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            telefone: '90901010',
            ddd: 11
        })
    }, 2000)
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'dos bobos',
            numero: 0
        })
    }, 2000)
}

function resolverUsuario(erro, usuario) {
    console.log(usuario)
}

obterUsuario((error, usuario) => {
    if(error) {
        console.error('DEU RUIM em USUARIO', error)
        return
    }

    obterTelefone(usuario.id, (error, telefone) => {
        if(error) {
            console.error('DEU RUIM em TELEFONE', error)
            return
        }

        obterEndereco(usuario.id, (error, endereco) => {
            if(error) {
                console.error('DEU RUIM em ENDEREÇO', error)
                return
            }

            console.log('usuario', usuario)
            console.log('telefone', telefone)
            console.log('endereco', endereco)
        })
    })
})
// const telefone = obterTelefone(usuario.id)

//console.log('usuario', usuario)
// console.log('telefone', telefone)

