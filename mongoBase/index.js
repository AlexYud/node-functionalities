const mongoose = require("mongoose")
const articleModel = require("./article")

mongoose.connect("mongodb://localhost:27017/firstMongo", { useNewUrlParser: true, useUnifiedTopology: true })

const Article = mongoose.model("Article", articleModel)

Article.find({}).then(articles => {
  console.log(articles);
}).catch(err => {
  console.log(err);
})

// const article = new Article({
//   title: 'Testing',
//   author: 'Joe',
//   body: 'Just testing',
//   special: true,
//   resume: {
//     content: 'simple content',
//     author: 'Lucas'
//   }
// })

// article.save().then(() => {
//   console.log('Salvo');
// }).catch(err => {
//   console.log(err);
// })