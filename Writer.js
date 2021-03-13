const fs = require('fs')
const util = require('util') //modulo para usar promisify(), como readFile não podemos usar promise temos que importar esse modulo

class Writer{
    constructor(){
        this.writer = util.promisify(fs.writeFile)
    }

    async Write(filename, data){
        try{
            await this.writer(filename, data)
            return true
        }catch(erro){
            return false
        }
    }
}

module.exports = Writer