const express = require("express");
const app = express();

// Importing products data
let Products = require("./Models/Products");

const PORT = process.env.PORT || 3000;

// Parse json
app.use(express.json());

// =-=-=-= Read all product records =-=-=-=
app.get("/products/", (req, res) => {
  res.status(200).json({ success: true, data: Products });
});

// =-=-=-= Create a new product =-=-=-=
app.post("/products/", (req, res) => {
  const Product = req.body;
  if (!Product.name || !Product.desc || !Product.image || !Product.price) {
    return res.status(400).json({
      sucess: false,
      msg: "Please provide product name, desc, image and price.",
    });
  }
  let id = Products.length + 1;
  const newProduct = { id, ...req.body };
  Products.push(newProduct);
  res.json({
    success: true,
    msg: `Product ${id} has been created.`,
    data: Products,
  });
});

// =-=-=-= Update a product record - Method 1 =-=-=-=
app.put("/products/:id", (req, res) => {
  const { id } = req.params;
  product = Products.find((product) => product.id === Number(id));

  if (!product) {
    return res
      .status(404)
      .json({ success: false, msg: `No product with id ${id}.` });
  }
  const index = Products.indexOf(product);
  const updatedProduct = { ...product, ...req.body };
  Products[index] = updatedProduct;
  res.json({
    success: true,
    msg: `Product ${id} has been updated.`,
    data: Products,
  });
});

// // =-=-=-= Update a product record - Method 2 =-=-=-=
// app.put("/products/:id", (req, res) => {
//   const { id } = req.params;
//   product = Products.find((product) => product.id === Number(id));

//   if (!product) {
//     return res
//       .status(404)
//       .json({ success: false, msg: `No product with id ${id}.` });
//   }
//   Products = Products.map((product) => {
//     if (product.id === Number(id)) {
//       product = { ...product, ...req.body };
//     }
//     return product;
//   });
//   res.json({
//     success: true,
//     msg: `Product ${id} has been updated.`,
//     data: Products,
//   });
// });

// =-=-=-= Delete a product =-=-=-=
app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  const deleteProduct = Products.find((product) => product.id === Number(id));
  if (!deleteProduct) {
    return res
      .status(404)
      .json({ success: false, msg: `No product with id ${id}.` });
  }
  Products = Products.filter((product) => product.id !== Number(id));
  return res.status(200).json({
    success: true,
    msg: `Product ${id} has been deleted.`,
    data: Products,
  });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
