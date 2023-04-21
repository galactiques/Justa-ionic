import fs from 'fs'


export function getTodosRecebiveis(){
    return JSON.parse(fs.readFileSync("recebiveis.json"))
}

export function InsereRecebivel(Recebivel){
    const recebiveis = JSON.parse(fs.readFileSync("recebiveis.json"))
    const novaListaDeRecebivel = [...recebiveis, Recebivel]
    fs.writeFileSync("recebiveis.json", JSON.stringify(novaListaDeRecebivel))
}