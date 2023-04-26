import fs from 'fs'

export function getlerUsers (){
    return JSON.parse(fs.readFileSync("users.json"))
}
/*
export function modificaSaldo(modificacoes, id){
    let saldoAtual = JSON.parse(fs.readFileSync("users.json"))
    const indiceModificado = saldoAtual.findIndex(saldo => saldo.id === id)

    const conteudoMudado = {... saldoAtual[indiceModificado], ...modificacoes }

    saldoAtual[indiceModificado] = conteudoMudado
    fs.writeFileSync("users.json", JSON.stringify(saldoAtual))

}
*/

  
  export function modificaSaldo(modificacoes, id){
    try {
      let saldoAtual = JSON.parse(fs.readFileSync('users.json'))
      saldoAtual = Object.values(saldoAtual.Users[0]);
  
      const indiceModificado = saldoAtual.findIndex(saldo => saldo.id === id)
  
      if (indiceModificado === -1) {
        console.error(`Usuário com ID ${id} não encontrado.`);
        return;
      }  
      const conteudoMudado = {...saldoAtual[indiceModificado], saldo: modificacoes.saldo}
      saldoAtual[indiceModificado] = conteudoMudado
      fs.writeFileSync('users.json', JSON.stringify({Users: [saldoAtual]}))
    } catch (error) {
      console.error(error)
    }
  }
  
  

  
  