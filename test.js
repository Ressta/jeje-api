let fs = require("fs"),
    path = require("path"),
    assert = require("assert"),
    {
        spawn: spawn
    } = require("child_process"),
    folders = [".", ...Object.keys(require("./package.json").directories)],
    files = [];
for (let e of folders)
    for (let r of fs.readdirSync(e).filter((e => e.endsWith(".js")))) files.push(path.resolve(path.join(e, r)));
for (let e of files) e != path.join(__dirname, __filename) && (console.clear(), console.error("Checking", e), spawn(process.argv0, ["-c", e]).on("close", (() => {
    assert.ok(e), console.clear(), console.log("Done", e)
})).stderr.on("data", (r => assert.ok(r.length < 1, e + "\n\n" + r))));