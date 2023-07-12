const fetch = require("node-fetch");
module.exports = async function (e) {
    if (!e) throw new Error("parameter url tidak boleh kosong!!");
    if (isUrl = /^https?:\/\//.test(e), !isUrl) throw new Error("Invalid URL");
    var {
        result: r
    } = await (await fetch("https://caliph.my.id/api/expandurl.php/?url=" + encodeURIComponent(e))).json();
    return {
        status: 200,
        creator: "Jeje",
        result: r
    }
}.bind();