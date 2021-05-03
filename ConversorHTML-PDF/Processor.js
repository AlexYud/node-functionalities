class Processor {

    static Process(data) {
      var array = data.split("\r\n");
      var rows = [];

      array.forEach(row => {
        var arr = row.split(";");
        rows.push(arr);
      });

      return rows;
    }
}

module.exports = Processor;