const express = require("express");
const app = express();
const port = process.env.PORT || 3000;;
const path = require("path");

const pokemons = [
  { 
    numero:'25',
    nome: 'Pikachu', 
    tipo: 'Elétrico', 
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png', 
    descricao: 'Os pikachu, que podem gerar eletricidade poderosa, têm bolsas nas bochechas que são extremamente macias e super elásticas.',
    altura: '0,4 m',
    peso: '6,0',
    categoria: 'Mouse',
    habilidades:'Estático',
  },
]

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

app.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

app.get("/detalhes/:id", (req, res) => {
  res.render("detalhes", { pokemon: pokemons[req.params.id] });
});

app.get("/", (req, res) => {
  res.render("index", { pokemons, message: '' });
});

app.post("/", (req, res) => {
  pokemons.push({
    numero: req.body.numero, 
    nome: req.body.nome, 
    tipo: req.body.tipo, 
    image: req.body.imagem,
    descricao: req.body.descricao, 
    altura: req.body.altura,
    peso: req.body.peso, 
    categoria: req.body.categoria, 
    habilidade: req.body.habilidade
  }); 
  res.render("index", { pokemons, message: 'Seu cadastro foi feito com sucesso'});
  res.send('Foi'); 
});

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));