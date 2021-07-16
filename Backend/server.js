const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const apiData = require("./controllers/api.controller");
const { createPokemon, getPokemon, deletePokemon, updatePokemon } = require("./controllers/crud.controller");

mongoose.connect("mongodb://localhost:27017/pokemon", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("it is a live !!");
});

app.get("/pokemon", apiData);

app.post("/pokemon/crud", createPokemon);
app.get("/pokemon/crud", getPokemon);
app.delete("/pokemon/crud/:id", deletePokemon);
app.put("/pokemon/crud/:id", updatePokemon);

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});