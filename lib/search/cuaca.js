const request = require("node-fetch"),
    APIKey = "277fd289d669ee22cf6f5408fd07215f",
    units = "metric",
    Cuaca = a => new Promise((async (e, t) => {
        var u = `http://api.openweathermap.org/data/2.5/weather?q=${a}&units=${units}&appid=${APIKey}`;
        let c = await request(u);
        if (200 !== c.status) return t({
            status: c.status,
            data: await c.text()
        });
        cuaca = await c.json(), result = {
            status: c.status,
            creator: "Jeje",
            data: {
                Nama: cuaca.name + "," + cuaca.sys.country,
                Longitude: cuaca.coord.lon,
                Latitude: cuaca.coord.lat,
                Suhu: cuaca.main.temp + " C",
                Angin: cuaca.wind.speed + " m/s",
                Kelembaban: cuaca.main.humidity + "%",
                Cuaca: cuaca.weather[0].main,
                Keterangan: cuaca.weather[0].description,
                Udara: cuaca.main.pressure + " HPa"
            }
        }, e(result)
    }));
module.exports = Cuaca.bind();