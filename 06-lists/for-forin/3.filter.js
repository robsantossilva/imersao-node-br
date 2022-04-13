const {obterPessoas} = require('./service')

Array.prototype.meuFilter = function (cb) {
    const lista = []
    for (const i in this) {
        const item = this[i]
        const result = cb(item, i, this)
        if (!result) continue
        lista.push(item)
    }
    return lista
}

async function main() {
    try {
        const {results} = await obterPessoas('a')

        // const familiaLars = results.filter((item) => {
        //     const result = item.name.toLowerCase().indexOf(`lars`) !== -1
        //     return result
        // })

        const familiaLars = results.meuFilter((item, index, lista) => {
            console.log(`index: ${index}`, lista.length)
            const result = item.name.toLowerCase().indexOf(`lars`) !== -1
            return result
        })

        const names = familiaLars.map((p) => p.name)
        
        console.log(names)
        
    } catch (error) {
        console.error('error interno',error)
    }
}

main()