"use strict";

const axios = require("axios");
const Cache = require("../helper/cache");
const cacheObj = new Cache();

const apiData = (req, res) => {
    const reqKey = "myData";
    if (cacheObj[reqKey] && Date.now() - cacheObj[reqKey].time < 78500000) {
        res.send(cacheObj[reqKey].data);
    } else {
        axios
            .get("https://pokeapi.co/api/v2/pokemon")
            .then((axiosRes) => {
                cacheObj[reqKey] = {};
                cacheObj[reqKey].data = axiosRes.data.results;
                cacheObj[reqKey].time = Date.now();
                res.send(axiosRes.data.results);
            })
            .catch((error) => {
                res.send(error);
            });
    }
};

module.exports = apiData;