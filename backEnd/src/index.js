const express = require("express");
const mongoose = require("mongoose");

const app = express();
const Product = require("./shemes/product");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

const URL = `mongodb+srv://logos-student:logos-password@sandbox.inmw9.mongodb.net/Sandbox?retryWrites=true&w=majority`;
const PORT = 8080;

app.get("/products", async (req, res) => {
  try {
  const products = await Product.find();
  res.statusCode = 200;
  res.send(products);
  }catch (err) {
    console.log("ERRO GET");
  }
});

app.post("/product", (req, res) => {
  const product = req.body;
  try {
    Product.create(product);
    res.statusCode = 200;
    res.send(product);
  }catch (err) {
    console.log("ERRO POST");
  }
});

app.get('/product/:id', async (req, res) =>{
  try{
  const { id } = req.params;
  const productID = await Product.find({_id: id });
  res.send(productID)
  Product}
  catch(err){
    console.log("ERRO ID")
  }
})
app.delete('/product/:id', async (req, res) =>{
  try{
  const { id } = req.params;
  const productID = await Product.deleteOne({_id: id });
  res.send(productID)
  Product}
  catch(err){
    console.log(err)
  }
})

app.listen(PORT, async () => {
  try {
    await mongoose.connect(URL);
  } catch (err) {
    console.log(err);
  }
  console.log(`http://localhost:${PORT}`);
});

// {
//   "imageUrl": "FOOT",
//   "name": "apple",
//   "count": "2",
//   "sizeWidth": "200",
//   "sizeHeight": "200",
//   "weight": "200g",
//   "comments": "text about product"
// }