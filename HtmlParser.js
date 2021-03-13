const ejs = require('ejs')

class HtmlParser{
    static async Parse(table){
        return await ejs.renderFile("./Table.ejs", {header: table.header, row: table.row})
    }
}

module.exports = HtmlParser