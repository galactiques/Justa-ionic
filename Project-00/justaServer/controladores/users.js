import { getlerUsers, modificaSaldo } from "../servicos/users.js"

export function getUsers(req,res) {
    try{
        const user = getlerUsers()
        res.send(user)
    } catch(erro){
        res.status(500)
        res.send("erro.message")
    }
}


export function patchSaldo2(req,res){
    try {
        const id = req.params.id
        const body = req.body
        modificaSaldo(body,id)
        res.send ("Saldo Atualizado")
        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
/*
export function patchSaldo(req,res){
    try {
        const id = req.params.id
        const body = req.body        
        modificaSaldo(body,id)
        res.send("Item modificado")

    } catch (error) {
        res.status(500)
        res.send("erro.message")        
    }
}
*/