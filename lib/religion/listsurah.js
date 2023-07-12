async function listsurah(){

    return new Promise((resolve, reject) => {

          axios.get('https://litequran.net/')

          .then(({ data }) => {

               const $ = cheerio.load(data)

               let listsurah = []

               $('.list').each(function(a, b) {

            listsurah.push($(b).text())

        })

               result = {

                status: 200,

                author: "@jeje",

                listsurah: listsurah

               }

               resolve(result)

          }).catch(reject)

     })

}

module.exports = listsurah.bind()
