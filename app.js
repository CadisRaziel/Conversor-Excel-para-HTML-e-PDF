const Reader = require('./Reader')
const Processor = require('./Processor')
const Table = require('./Table')
const HtmlParser = require('./HtmlParser')
const Writer = require('./Writer')
const PDFWriter = require('./PdfWriter')


const leitor = new Reader()
const escritor = new Writer()

//para retornar os dados ao invez de printar apenas
async function Main(){    
    let dados = await leitor.Read("./Execel.csv")    
    let dadosProcessados = Processor.Process(dados)
    let usuarios = new Table(dadosProcessados)

    // usuarios.row.push(["Rosana", "Express", 51]) //aqui eu posso adicionar dados a tabela 
    // usuarios.row.push(["Michele", "Golang", 15]) //aqui eu posso adicionar dados a tabela 
    // usuarios.row.push(["Batman", "Ruby on rails", 31]) //aqui eu posso adicionar dados a tabela 
    // usuarios.row.push(["Dota", "Java", 22]) //aqui eu posso adicionar dados a tabela 

    let html = await HtmlParser.Parse(usuarios)
    escritor.writer(Date.now() + ".html", html) //date.now() vai gerar nome com numeros aleatorios
    PDFWriter.WritePDF(Date.now() + ".PDF", html)
}

Main()