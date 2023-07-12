const fetch = require("node-fetch"),
    cheerio = require("cheerio");
igdown = async t => (html = await fetch("https://saveinsta.app/id").then((t => t.text())), $ = cheerio.load(html), token = $('input[name="token"]').attr("value"), postdata = new URLSearchParams, postdata.append("url", t), postdata.append("token", token), dts = await fetch("https://saveinsta.app/id/download-video-instagram", {
    method: "POST",
    body: postdata
}), 200 !== dts.status ? {
    status: dts.status,
    creator: "Jeje",
    result: null
} : (data_url = await dts.json(), result = {
    status: dts.status,
    creator: "Jeje",
    result: data_url
}, result)), module.exports = igdown.bind();