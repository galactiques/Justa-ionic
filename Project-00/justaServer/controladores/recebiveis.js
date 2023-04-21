import { InsereRecebivel, getTodosRecebiveis } from "../servicos/recebiveis.js";


export function getRecebivel(req,res) {
    try{
        const recebiveis = getTodosRecebiveis()
        res.send(recebiveis)
    } catch(erro){
        res.status(500)
        res.send("erro.message")
    }
}

export async function postRecebivel(req,res){
    try {
        const RecebivelNovo= req.body
        InsereRecebivel(RecebivelNovo)
        res.status(201)
        res.send("Recebivel inserido com sucesso")
    } catch (error) {
       res.status(500)
       res.send(error.message) 
    }
}