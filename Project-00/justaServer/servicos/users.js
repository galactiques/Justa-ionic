import fs from 'fs'

export function getlerUsers (){
    return JSON.parse(fs.readFileSync("users.json"))
}