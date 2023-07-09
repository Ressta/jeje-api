const fetch = require("node-fetch");

module.exports = async () => {
  let data = await fetch("https://raw.Jeje.my.id/quotesanime.json");
  if (data.status != 200)
    return { status: data.status, creator: "Jeje", result: null };
  let json = await data.json();
  let rand = json[Math.floor(Math.random() * json.length)];
  return { status: data.status, creator: "Jeje", result: rand };
};
