const EventEmitter = require('events')

class MeuEmissor extends EventEmitter {}

const meuEmissor = new MeuEmissor()
const nomeEvento = 'usuario:click'
meuEmissor.on(nomeEvento, (click) => {
    console.log('um susario clicou', click)
})

// Exemplo 1
// meuEmissor.emit(nomeEvento, 'na barra de rolagem')
// meuEmissor.emit(nomeEvento, 'na ok')
// let count = 0
// setInterval(() => meuEmissor.emit(nomeEvento, 'no ok '+ (count++)), 1000)

// Exemplo 2
const stdin = process.openStdin()
stdin.addListener('data', (value) => {
    console.log(`Você digitou: ${value.toString().trim()}`)
})
