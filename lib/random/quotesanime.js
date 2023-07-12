const fetch = require("node-fetch");
module.exports = async () => {
    let t = await fetch("https://raw.caliph.my.id/quotesanime.json");
    if (200 != t.status) return {
        status: t.status,
        creator: "Jeje",
        result: null
    };
    let e = await t.json(),
        s = e[Math.floor(Math.random() * e.length)];
    return {
        status: t.status,
        creator: "Jeje",
        result: s
    }
};