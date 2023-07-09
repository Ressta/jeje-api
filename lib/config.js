const axios = require("axios");

module.exports = async function () {
  let { data } = await axios.get("https://Jeje-api.js.org/config.json");
  return data;
}.bind();
