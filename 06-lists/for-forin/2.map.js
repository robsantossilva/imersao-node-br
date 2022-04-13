const service = require('./service')

Array.prototype.meuMap = function (callback) {
    const novoArray = []
    for (let i = 0; i <= this.length - 1; i++) {
        const result = callback(this[i], i)
        novoArray.push(result)
        
    }
    return novoArray
}

async function main() {
    try {
        const result = await service.obterPessoas('a')
        let names = []

        // result.results.forEach((item) => {
        //     names.push(item.name)
        // })

        // names = result.results.map((pessoa) => {
        //    return pessoa.name
        // })

        // names = result.results.map((pessoa) =>  pessoa.name)

        names = result.results.meuMap(function (pessoa, i) {
            return `[${i}]${pessoa.name}`
        })

        console.log(`names`, names)
    } catch (error) {
        console.error('error interno',error)
    }
}

main()