const express = require("express");

const router = express.Router();

const games = [
    {
            id: 1, game: "Peão"
    },
    {
            id: 2, game: "Bola de gude"
    },
    {
            id: 3, game: "Pique Bandeira"
    },
    {
            id: 4, game: "Pique Pega"
    },
    {
            id: 5, game: "Bet"
    },
    {
            id: 6, game: "Amarelinha"
    },
]

// rota para visualização geral
router.get('/', (req,res, next) => {

     res.json({
         message: "Jogos registrados:",
         allGames: games
     })

});


// rota de visualização única
router.get('/jogo/:jogoID', (req,res, next) => {

        const id = req.params.id-1;

        const game = games.game
     

});


// rota para adicionar jogo
router.post('/adicionar-jogo', (req,res, next) => {

    const game = req.body.game;
    const id = req.body.id || games.length+1;

    const newGame = {
            id : id,
            game: game
    }


    games.push(newGame);

    
    res.json({
         message : `Jogo ${game} adicionado ao catálogo com o id ${id} !`
    });

//     res.send ( `Jogo ${games.game} adicionado ao catálogo com o id ${id+1} !`)

});

//rota para atualizar o registro *** passar o ID ***
router.put('/jogo/:jogoID', (req,res, next) => {
     

});


// rota de exclusão

router.delete('/jogo/:jogoID', (req,res, next) => {
     

});


module.exports = router