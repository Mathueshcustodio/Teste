const express = require("express");
const app = express();
const port = 3000;

// Rota de exemplo
app.get(
  "https://calendarific.com/api/v2/holidays?api_key=baa9dc110aa712sd3a9fa2a3dwb6c01d4c875950dc32vs",
  (req, res) => {
    res.json({ mensagem: "Esta é uma resposta da API!" });
  }
);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
