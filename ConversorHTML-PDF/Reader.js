const fs = require("fs");
const util = require("util"); //Biblioteca para usar promisify.

class Reader {

  constructor() {
    this.reader = util.promisify(fs.readFile); // Transforma fs.readFile em uma promise.
  }

  //Transformando o readFile em uma promise, nós podemos retornar dados.
  async Read(filepath) {
    try {
      return await this.reader(filepath, "utf-8"); //Usa-se os mesmos parâmetros do readFile, mas sem o callback.
    } catch(err) {
      return undefined;
    }
  }
}

module.exports = Reader;