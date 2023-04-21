import fs from 'fs'

export function getTodasVenda (){
    return JSON.parse(fs.readFileSync("vendas.json"))
}

export function getVendaPorId(id){
    const vendas = JSON.parse(fs.readFileSync("vendas.json"))
    const vendaFiltrada = vendas.filter(venda => venda.id === id)[0]
    return vendaFiltrada
}

export function InsereVenda(VendaNova){
    const vendas = JSON.parse(fs.readFileSync("vendas.json"))
    const novaListaDeVendas = [...vendas, VendaNova]
    fs.writeFileSync("vendas.json", JSON.stringify(novaListaDeVendas))
}