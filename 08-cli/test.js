const {
    deepEqual, ok
} = require('assert');

const database = require('./database');
const DEFAULT_ITEM_CADASTRADO = {
    nome: 'Flash',
    poder: 'Speed',
    id: 1
}

describe('Suite de manipulação de Heróis', () => {

    it('Deve perquisar um heroi usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRADO;
        const [dados] = await database.listar(expected.id)
        deepEqual(dados, expected);
    })

    // it('Deve cadastrar um heroi, usando arquivos', async () => {
    //     const expected = DEFAULT_ITEM_CADASTRADO;

    //     ok(null, expected);
    // })
})