import {getTodosEmprestimo} from '../servicos/emprestimos.js'

export function getEmprestimos(req,res) {
    try{
        const emprestimos = getTodosEmprestimo()
        res.send(emprestimos)
    } catch(erro){
        res.status(500)
        res.send("erro.message")
    }
}