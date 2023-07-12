const cheerio = require("cheerio")
const axios = require("axios")
const qs = require("qs")


function tebakgambar() {
	return new Promise(async(resolve, reject) => {
    axios.get('https://jawabantebakgambar.net/all-answers/')
    .then(({ data }) => {
    const $ = cheerio.load(data)
    const result = [];
    let random = Math.floor(Math.random() * 2836) + 2;
    let link2 = 'https://jawabantebakgambar.net'
    $(`#images > li:nth-child(${random}) > a`).each(function(a, b) {
    const img = link2 + $(b).find('img').attr('data-src')
    const jwb = $(b).find('img').attr('alt')
    result.push({
    	message: '@Jeje',
    	image: img,
    	jawaban: jwb
    })

    	resolve(result)
    })
    	})
    .catch(reject)
	})
}

module.exports.tebakgambar = tebakgambar