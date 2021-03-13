const fs = require('fs')
const util = require('util') //modulo para usar promisify(), como readFile não podemos usar promise temos que importar esse modulo

// let funcaoNovaComPromise = util.promisify(funcaoVelhaComCallBack)

//classe de leitor(ler o arquivo)
class Reader{
    constructor() {
        this.reader = util.promisify(fs.readFile) // promisify deixa utilizar promise em metodos que são antigos
    }

    async Read(filepath) {
        try{
            return await this.reader(filepath, 'utf-8')
        }catch(err){
            return undefined
        }
    }
}

module.exports = Reader