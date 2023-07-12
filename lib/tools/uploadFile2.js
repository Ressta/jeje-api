const FormData = require("form-data"),
    type = require("file-type"),
    fetch = require("node-fetch");
module.exports = async function (e) {
    let {
        ext: t
    } = await type.fromBuffer(e);
    return bodyForm = new FormData, bodyForm.append("file", e, "file." + t), response = await fetch("https://filezone.my.id/api/upload.php", {
        method: "post",
        body: bodyForm
    }), {
        status: response.status,
        creator: "Jeje",
        result: (await response.json()).result
    }
}.bind();