var pdf = require("html-pdf");
var ejs = require("ejs");

var foo = "bar";
var ping = "pong";

ejs.renderFile("./index.ejs", { foo, ping }, (err, html) => {

  if (err) return console.log("Error: ", err);

  return pdf.create(html, {}).toFile("./pdfFileTest.pdf", (err, res) => {

    if (err) return console.log("Error: ", err);

    return console.log(res);
  });
});

