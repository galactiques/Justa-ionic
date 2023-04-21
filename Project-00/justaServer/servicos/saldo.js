import fs from 'fs'

export function getlerSaldo (){
    return JSON.parse(fs.readFileSync("saldo.json"))
}