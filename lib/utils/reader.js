const fs = require("fs");

class Reader {
  static readJsonFile(filePath) {
    return fs.readFileSync(filePath);
  }
}

module.exports = Reader;
