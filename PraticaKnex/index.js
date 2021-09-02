var database = require("./database");

/* INSERT
var dados = [
  {
    nome: "Call of duty 2",
    preco: 61
  },
  {
    nome: "Rocket League",
    preco: 12.99
  },
  {
    nome: "League of legends",
    preco: 20.30
  }
]

database.insert(dados).into("games").then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
});
*/

/* SELECT
database.select(["idGames", "preco"]).table("games").then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
});
*/

/* WHERE
database.select()
  .whereRaw("nome = 'Rocket League' OR preco > 30")
  .table("games").then(data => {
    console.log(data);
  }).catch(err => {
    console.log(err);
  });
*/

/* DELETE
database.where({nome: "League of legends"}).delete().table("games").then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
});
*/

/* UPDATE
database.where({idGames: 1}).table("games").update({preco: 40}).then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
});
*/

/* ORDERBY
database.select().table("games").orderBy("preco", "desc").then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
});
*/

/* ASSOCIATED INSERTS
database.insert({
  nome: "Epic games",
  idGames: 4
}).table("estudios").then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
});
*/

/* JOIN 1-1
database.select(["games.*", "estudios.nome as estudio_nome"]).table("games").innerJoin("estudios", "estudios.idGames", "games.idGames").then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
});
*/

/* 1-N
database.select(["games.*", "estudios.nome as estudio_nome"]).table("games").innerJoin("estudios", "estudios.idGames", "games.idGames").then(data => {
  var estudiosGamesArray = data;
  var game = {
    id: 0,
    nome: "",
    estudios: []
  }

  game.id = data[i].idGames;
  game.nome = data[i].nome;

  data.forEach(estudio => {
    game.estudios.push({nome: estudio.estudio_nome})
  });

  console.log(game);

}).catch(err => {
  console.log(err);
});
*/

/* N-M
database.select([
  "estudios.nome as estudio_nome",
  "games.nome as game_nome",
  "games.preco"
]).table("games_estudios")
  .innerJoin("games", "games.idGames", "games_estudios.idGames")
  .innerJoin("estudios", "estudios.idEstudios", "games_estudios.idEstudios  ")
  .where("games.idGames", 1)
  .then(data => {
    console.log(data);
  }).catch(err => {
    console.log(err);
  });
*/

/* TRANSACTIONS
async function testeTransacao() {
  try {
    await database.transaction(async trans => {
      await database.insert({nome: "Ubisoft"}).table("estudios");
      await database.insert({nome: "Mojang"}).table("estudios");
      await database.insert({nome: "Rockstar"}).table("estudios");
      await database.insert({nome: "EA"}).table("estudios");
    });
  } catch (error) {
    console.log(error);
  }
}

testeTransacao();
*/