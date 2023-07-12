let axios = require('axios')
let cheerio = require('cheerio')
let moment = require('moment-timezone')
moment.tz.setDefault('Asia/Jakarta').locale('id')

function _axios(host) {
    return new Promise(async (resolve, reject) => {
        axios.get(host).then(({ data }) => {
            resolve(data)
        })
    })
}

function sholatAll(kota) {
    return new Promise(async (resolve, reject) => {
        let html = await _axios('https://m.dream.co.id/jadwal-salat/' + kota.replace(/\s/g, '-').toLowerCase())
        $ = cheerio.load(html)
        let data = []
        $('.table-index-jadwal').each(function (i, e) {
            data.push({
                'tanggal': $(e).find('.table-index-jadwal > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(1)').text(),
                'subuh': $(e).find('.table-index-jadwal > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(2)').text(),
                'duha': $(e).find('.table-index-jadwal > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(3)').text(),
                'zuhur': $(e).find('.table-index-jadwal > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(4)').text(),
                'ashar': $(e).find('.table-index-jadwal > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(5)').text(),
                'magrib': $(e).find('.table-index-jadwal > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(6)').text(),
                'isya': $(e).find('.table-index-jadwal > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(7)').text()
            })
        }); resolve({ creator: '@jeje', status: true, data })
    })
}

module.exports = sholatAll.bind()

// module.exports = (kota) => {
//     return new Promise(async (resolve, reject) => {
//         let sholat = await sholatAll(kota)
//         let now = moment(new Date * 1).format('DD-MM-yy')
//         let data = sholat.data.then(v => v.tanggal == now)
//         if (typeof data == 'undefined') return resolve({ creator: '@Aine', status: false })
//         resolve({ creator: '@Aine', status: true, data })
//     })
//}