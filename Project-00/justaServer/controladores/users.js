import { getlerUsers } from "../servicos/users.js"

export function getUsers(req,res) {
    try{
        const user = getlerUsers()
        res.send(user)
    } catch(erro){
        res.status(500)
        res.send("erro.message")
    }
}