const axios = require("axios"),
    cheerio = require("cheerio");
async function ArtiNama(e) {
    return new Promise(((t, a) => {
        axios.get(`https://www.primbon.com/arti_nama.php?nama1=${e}&proses=+Submit%21+`).then((({
            data: e
        }) => {
            const a = {
                status: 200,
                creator: "Jeje",
                result: cheerio.load(e)("#body").text().split("Nama:")[0].trim()
            };
            t(a)
        })).catch(a)
    }))
}
module.exports = ArtiNama.bind();