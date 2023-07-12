const fetch = require("node-fetch");
module.exports = async function (e) {
    if (!e) throw new Error("parameter username tidak boleh kosong!!!");
    if (dt = await fetch(`https://caliph.my.id/api/tiktokuser.php?usr=${e.replace(/@/gi,"")}`), json = await dt.json(), 200 !== dt.status) throw new Error(json.message);
    return {
        status: 200,
        creator: "Jeje",
        result: json.result
    }
}.bind();