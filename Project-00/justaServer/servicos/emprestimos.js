import fs from 'fs'

export function getTodosEmprestimo (){
    return JSON.parse(fs.readFileSync("emprestimos.json"))
}