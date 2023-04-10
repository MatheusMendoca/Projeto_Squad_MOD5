import produtos from './src/controllers/produtos.js';
import express from 'express';

const app = express ();
const port = 3000;

app.get('/', (req,res) => {
    res.send('Página principal')
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})

app.use(express.json())

produtos.produtosRotas(app);
