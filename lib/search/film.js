axios = require("axios"), cheerio = require("cheerio"), h = async function (t) {
    return html = await axios.get("https://nonton.lk21official.pro/?s=" + t), $_ = require("cheerio").load(html.data), res = [], arr = $_("body > main > div > section > div > div > div > div"), null != arr.text() && "" != arr.text() && arr.text() ? (arr.each((function (t, r) {
        link = "https://tv.lk21official.pro" + $_(r).find("a").attr("href"), judul = $_(r).find("a").attr("title"), thumb = "https:" + $_(r).find("img").attr("src"), genre = $_(r).find("p.cat-links").text(), sutradara = $_(r).find("p:nth-child(3)").text().split(":")[1], res.push({
            judul: judul,
            link: link,
            thumb: thumb,
            genre: genre,
            sutradara: sutradara
        })
    })), {
        status: html.status,
        creator: "Jeje",
        result: res
    }) : {
        status: 404,
        creator: "Jeje",
        result: []
    }
}, module.exports = h.bind();