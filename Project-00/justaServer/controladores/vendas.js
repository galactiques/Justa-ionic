import {getTodasVenda,getVendaPorId, InsereVenda} from  '../servicos/vendas.js'

export function getVendas(req,res) {
    try{
        const vendas = getTodasVenda()
        res.send(vendas)
    } catch(erro){
        res.status(500)
        res.send("erro.message")
    }
}

export function getVenda(req,res) {
    try{
        const id = req.params.id
        const venda = getVendaPorId(id)
        res.status(201)
        res.send(venda)
    } catch(erro){
        res.status(500)
        res.send("erro.message")
    }
}

export async function postVenda(req,res){
    try {
        const VendaNova= req.body
        InsereVenda(VendaNova)
        res.status(201)
        res.send("livro inserido com sucesso")
    } catch (error) {
       res.status(500)
       res.send(error.message) 
    }
}