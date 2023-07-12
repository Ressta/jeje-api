const yargs = require("yargs/yargs");
opts = new Object(yargs(process.argv.slice(2)).exitProcess(!1).parse());
const path = require("path"),
    fs = require("fs");

function getFiles(s, e) {
    e = e || [];
    var t = fs.readdirSync(s);
    for (var r in t) {
        var i = s + "/" + t[r];
        fs.statSync(i).isDirectory() ? getFiles(i, e) : e.push(i)
    }
    return e
}
async function start() {
    if (opts.path) {
        if (dir = path.join(process.cwd(), opts.path), !fs.existsSync(dir)) return console.log(`Dir ${dir} not exists!!`);
        let s = ["js", "html", "css"],
            e = getFiles(dir).filter((e => s.includes(e.split(".").pop()) && !/node_modules/gi.test(e)));
        for (let s of e) {
            let e = new Date;
            try {
                let t = await (await import("unminify")).unminify(s);
                await fs.promises.writeFile(s, t), console.log(`File ${s.split("/").pop()} Success Compressed, Latency : ${new Date-e}ms`)
            } catch (e) {
                console.error(`File ${s.split("/").pop()} Failed To Compressed!`)
            }
        }
    }
}
start();