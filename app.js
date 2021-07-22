const express = require("express");
const app = express();

// importando rotas
const streetGamesRoutes = require('./routes/streetGames')



const port = 5000;

app.use(express.json());


app.use(streetGamesRoutes)



app.listen(port, () =>
{console.info(`A aplicação está rodando em http://localhost:${port}`)})