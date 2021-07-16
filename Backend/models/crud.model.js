"use strict";

const mongoose = require("mongoose");

const crudSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        unique: true,
    },
    url: String,
});

const crudModel = mongoose.model("data", crudSchema);

module.exports = crudModel;