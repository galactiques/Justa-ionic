import express from 'express'
import rotaVendas from '../justaServer/rotas/vendas.js'
import rotaEmprestimo from '../justaServer/rotas/emprestimos.js'


const app = express()
app.use(express.json())

const port = 8000

app.use('/vendas', rotaVendas)
app.use('/emprestimo', rotaEmprestimo)


app.listen(port, ()=>{
    console.log("Escutando a porta 8000")
})