//Classe para processar os dados e transformar em []

class Processor{
    static Process(data){
        let rows = data.split("\r\n")
        let array = [] 

        rows.forEach(linha => {
            let ar = linha.split(",")
            array.push(ar)
        })

        return array
    }
}

module.exports = Processor

// \n = quebra de linha