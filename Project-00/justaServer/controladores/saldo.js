import { getlerSaldo } from "../servicos/saldo.js"

export function getSaldos(req,res) {
    try{
        const saldo = getlerSaldo()
        res.send(saldo)
    } catch(erro){
        res.status(500)
        res.send("erro.message")
    }
}