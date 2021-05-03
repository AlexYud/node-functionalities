class Table {

  constructor(arr) {
    this.header = arr[0];
    arr.shift(); //Remove o primeiro elemento do array
    this.rows = arr;
  }

  get RowCount() { //Get transforma método em atributo
    return this.rows.length;
  }

  get ColumnCount() {
    return this.header.length;
  }
}

module.exports = Table;