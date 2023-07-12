const cheerio = require("cheerio")
const axios = require("axios")
const qs = require("qs")


function playstore(name){
	return new Promise((resolve, reject) => {
		axios.get('https://play.google.com/store/search?q='+ name +'&c=apps')
		.then(({ data }) => {
			const $ = cheerio.load(data)
			let ln = [];
			let nm = [];
			let dv = [];
			let lm = [];
			const result = [];
			$('.KKjvXb').each(function(a,b){
				const link =  'https://play.google.com' + $(b).attr('href')
				ln.push(link);
			})
			$('.vWM94c').each(function(d,e){
				const name = $(e).text().trim()
				nm.push(name);
			})
			$('.LbQbAe').each(function(f,g){
				const dev = $(g).text().trim();
				dv.push(dev)
			})
		for (let i = 0; i < ln.length; i++){
			result.push({
				name: nm[i],
				link: ln[i],
				developer: dv[i],
			})
	}
		resolve(result)
		})
	.catch(reject)
	})
}

module.exports = playstore.bind()
