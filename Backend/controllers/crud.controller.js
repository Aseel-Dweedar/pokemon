"use struct";

const crudModel = require("../models/crud.model");

// // // Create // // // //
const createPokemon = (req, res) => {
    const { name, url } = req.body;
    crudModel.findOne({ name: name }, (error, data) => {
        if (error) {
            res.send(error.message);
        } else if (data) {
            res.send("Already added");
        } else {
            const newData = new crudModel({
                name: name,
                url: url,
            });
            newData.save();
            res.send("Done");
        }
    });
};
// // // Get // // // //
const getPokemon = (req, res) => {
    crudModel.find({}, (error, data) => {
        if (error) {
            res.send(error.message);
        } else {
            res.send(data);
        }
    });
};
// // // Delete // // // //
const deletePokemon = (req, res) => {
    const id = req.params.id;
    crudModel.deleteOne({ _id: id }, (error, data) => {
        if (error) {
            res.send(error.message);
        } else {
            res.send("Deleted");
        }
    });
};
// // // Update // // // //
const updatePokemon = (req, res) => {
    const id = req.params.id;
    const { name, url } = req.body;
    crudModel.findOne({ _id: id }, (error, data) => {
        if (error) {
            res.send(error.message);
        } else {
            data.name = name;
            data.url = url;
            data.save();
            res.send("Updated");
        }
    });
};

module.exports = { createPokemon, getPokemon, deletePokemon, updatePokemon };