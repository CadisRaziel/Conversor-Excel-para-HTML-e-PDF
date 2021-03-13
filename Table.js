//criando uma classe para criar a tabela

class Table{
    constructor(array){
        this.header = array[0]
        array.shift() //para remover o cabeçalho (para separar linhas do cabeçalho)
        this.row = array
    }

    get RowCount(){ //quando colocamos get em um metodo ele é obrigado a return algo
        return this.row.length
    }

    get ColumnCount(){
        return this.header.length
    }
}

module.exports = Table