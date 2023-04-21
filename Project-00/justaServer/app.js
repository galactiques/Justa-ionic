import express from 'express';
import cors from 'cors'; // Importe a biblioteca cors
import rotaRecebiveis from '../justaServer/rotas/recebiveis.js'
import rotaVendas from '../justaServer/rotas/vendas.js';


const app = express();
app.use(express.json());


const port = 8000;

// Configurar o CORS
app.use(cors({
    origin: 'http://localhost:8100' // Atualize com a origem permitida desejada
}));

app.use('/vendas', rotaVendas);
app.use('/recebiveis', rotaRecebiveis)

app.listen(port, () => {
    console.log("Escutando a porta 8000");
});
