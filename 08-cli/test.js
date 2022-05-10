const {
    deepEqual, ok
} = require('assert');

const database = require('./database');
const DEFAULT_ITEM_CADASTRADO = {
    nome: 'Flash',
    poder: 'Speed',
    id: 1
}

const DEFAULT_ITEM_CADASTRAR = {
    nome: 'Hulk',
    poder: 'Força',
    id: 2
}

describe('Suite de manipulação de Heróis', () => {

    it('Deve perquisar um heroi usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRADO;
        const [dados] = await database.listar(expected.id)
        deepEqual(dados, expected);
    })

    it('Deve cadastrar um heroi, usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR;

        const resultado = await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
        const [actual] = await database.listar(DEFAULT_ITEM_CADASTRAR.id)

        deepEqual(actual, expected);
    })
})