/*
0 Obter um usuário
1 Obter o numero de telefone de um usuario a partir de seu ID
2 Obter o endereco do usuario pelo ID
*/

//importar um módulo interno do node.js
const util = require('util')

const obterEnderecoAsync = util.promisify(obterEndereco)


function obterUsuario() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            return resolve({
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        }, 1000)
    })
}

function obterTelefone(idUsuario) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                telefone: '90901010',
                ddd: 11
            })
        }, 2000)
    })
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'dos bobos',
            numero: 0
        })
    }, 2000)
}

const usuarioPromise = obterUsuario()
usuarioPromise
    .then((usuario) => {
        return obterTelefone(usuario.id)
                .then((telefone) => {
                    return {
                        usuario,
                        telefone
                    }
                })
    })
    .then((resultado) => {
        return obterEnderecoAsync(resultado.usuario.id)
                .then((endereco) => {
                    return {
                        usuario: resultado.usuario,
                        telefone: resultado.telefone,
                        endereco
                    }
                })
    })
    .then((resultado) => {
        console.log('resultado', resultado)
    })
    .catch((error) => {
        console.error('DEU RUIM', error)
    })

// obterUsuario((error, usuario) => {
//     if(error) {
//         console.error('DEU RUIM em USUARIO', error)
//         return
//     }

//     obterTelefone(usuario.id, (error, telefone) => {
//         if(error) {
//             console.error('DEU RUIM em TELEFONE', error)
//             return
//         }

//         obterEndereco(usuario.id, (error, endereco) => {
//             if(error) {
//                 console.error('DEU RUIM em ENDEREÇO', error)
//                 return
//             }

//             console.log('usuario', usuario)
//             console.log('telefone', telefone)
//             console.log('endereco', endereco)
//         })
//     })
// })

