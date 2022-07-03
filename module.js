const insertLine = require("insert-line");

function insert(content, line) {
  insertLine("build.gradle")
    .content(content)
    .at(line)
    .then(function (err) {
      if (err) {
        console.log(err);
      }
    });
}
module.exports = { insert };
