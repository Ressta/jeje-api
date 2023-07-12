let axios = require("axios"),
    cheerio = require("cheerio"),
    fakeUa = require("./fakeua");
module.exports = async function (i) {
    let e = "https://m.soundcloud.com",
        t = await axios.get(`${e}/search?q=${encodeURIComponent(i)}`, {
            headers: {
                "User-Agent": fakeUa()
            }
        }),
        d = cheerio.load(t.data),
        a = [];
    return d("div > ul > li > div").each((function (i, t) {
        let r = d(t).find("a").attr("aria-label").trim(),
            v = e + d(t).find("a").attr("href").trim(),
            s = d(t).find("a > div > div > div > picture > img").attr("src").trim(),
            n = d(t).find("a > div > div > div").eq(1).text(),
            o = d(t).find("a > div > div > div > div > div").eq(0).text(),
            u = d(t).find("a > div > div > div > div > div").eq(1).text(),
            c = d(t).find("a > div > div > div > div > div").eq(2).text();
        a.push({
            title: r,
            url: v,
            thumb: s,
            artist: n,
            views: o,
            release: c,
            timestamp: u
        })
    })), {
        status: t.status,
        creator: "Jeje",
        result: a
    }
}.bind();