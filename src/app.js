const express = require("express");
const path = require('path')
const app = express();
const port = 8000;

const staticpath = path.join(__dirname,'../public')
// app.use(express.static(staticpath))

app.set("view engine","hbs")

app.get('/',(req,res)=>{
  res.render('index.hbs',{
    user : 'harsh'
  })
})

// app.get("/", (req, res) => {
//   res.status(200).write("<h1>home page</h1>"); // .write == if you want to write more than one line
//   res.status(200).write("<h2>hello world</h2>");
//   res.send()
// });

app.get("/about", (req, res) => {
  res.status(200).send("about page");
  app.use(express.static(staticpath))
});

app.get("/contact", (req, res) => {
  res.status(200).send("contact page");
});

app.get("/json", (req, res) => {
  res.json([
    {
      id: 1,
      name: "harsh",
    },
    {
      id: 2,
      name: "yash",
    },
  ]);
});

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
