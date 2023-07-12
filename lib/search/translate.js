const { translate } = require("@vitalets/google-translate-api");
const { from } = require("form-data");
module.exports = async function (t = null, e = "id") {
    if (result = {}, !t) throw "String text tidak boleh kosong!";
    var r = await translate(t, {
        to: e
    });
    return result.creator = "Jeje", result.result = {
        text: r.text,
        from: r.raw.ld_result.extended_srclangs
    }, result
}.bind();