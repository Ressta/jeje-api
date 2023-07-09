let fs = require("fs");
let path = require("path");
let assert = require("assert");
let { spawn } = require("child_process");
let folders = [".", ...Object.keys(require("./package.json").directories)];
let files = [];
for (let folder of folders)
  for (let file of fs.readdirSync(folder).filter((v) => v.endsWith(".js")))
    files.push(path.resolve(path.join(folder, file)));
for (let file of files) {
  if (file == path.join(__dirname, __filename)) continue;
  console.clear();
  console.error("Checking", file);
  spawn(process.argv0, ["-c", file])
    .on("close", () => {
      assert.ok(file);
      console.clear();
      console.log("Done", file);
    })
    .stderr.on("data", (chunk) =>
      assert.ok(chunk.length < 1, file + "\n\n" + chunk)
    );
}


(async () => {
  const api = require('Jeje-api');
   const url = 'https://www.tiktok.com/@hanru01/video/7224425974945942786?is_from_webapp=1&sender_device=pc&web_id=7228471037720151554';
   const result = await api.downloader.tiktok(url);
   console.log(result)
})();
    