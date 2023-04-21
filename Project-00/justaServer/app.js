import express from 'express';
import cors from 'cors'; // Importe a biblioteca cors

import rotaVendas from '../justaServer/rotas/vendas.js';
import rotaEmprestimo from '../justaServer/rotas/emprestimos.js';

const app = express();
app.use(express.json());

const port = 8000;

// Configurar o CORS
app.use(cors({
    origin: 'http://localhost:8100' // Atualize com a origem permitida desejada
}));

app.use('/vendas', rotaVendas);

app.listen(port, () => {
    console.log("Escutando a porta 8000");
});
