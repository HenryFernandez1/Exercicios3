const express = require('express');
const fs = require('fs');

const app = express();
const port = 8000;

app.use(express.json());

// Rota para obter a lista de produtos

app.get('/produtos', (req, res) => {
  fs.readFile('produtos.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao ler o arquivo de produtos' });
      return;
    }

    const produtos = JSON.parse(data);
    res.json(produtos);
  });
});

app.listen(port, () => {
  console.log(`Servidor Express está ouvindo na porta ${port}`);
});