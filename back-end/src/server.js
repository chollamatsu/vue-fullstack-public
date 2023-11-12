// import express from "express";
import {cartItems, products} from './temp-data';
// import path from "path";

// file upload
// const multer = require("multer");
// const monogoose = require("mongoose");

// Config Multer to store uploaded files in a folder
/* const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "assets"); // the image will be stored in assets folder
  },
  filename: (req, file, callback) => {
    // Generate unique filename
    const ext = path.extname(file.originalname);
    callback(null, Date.now() + ext);
  },
});
const upload = multer({ storage }); */

async function start() {

  // Crate new instance
  /* const url = `mongodb oauth`;
  const client = new MongoClient(url);

  // Connect to mongo db
  await client.connect();
  const db = client.db("fsv-db");

  const app = express();
  app.use(express.json()); */

  // Make static path
//   app.use("/images", express.static(path.join(__dirname, "../assets")));

  /* When we request to the server at port '8000' then the server will trigger to this logic below and response to request at the client side and display on browser */

  // Part of Function

  /* async function poppulateCartIds(ids) {
    return Promise.all(
      ids.map((id) => db.collection("products").findOne({ id }))
    );
  } */

  // Part of EndPoint

  // Get all products.
  app.get("/api/products", async (res) => {
    res.json(products);
  });

  // Get Each product.
  /* app.get("/api/products/:productId", async (req, res) => {
    const productId = req.params.productId;
    //   const product = products.find((product) => product.id === productId);
    const product = await db.collection("products").findOne({ id: productId });
    res.json(product);
  }); */

  // Upload product
  /* app.post("/api/upload", upload.single("image"), async (req, res) => {
    const product = {...req.body, ...{imageUrl: `/images/${req.file.filename}`}}
    db.collection("products").insertOne(product);
    const products = await db.collection("products").find({}).toArray();
    res.send(products);
  }); */

  // Update product
  /* app.post("/api/product/:productId", async (req, res) => {
    console.log("update request:", req);
    console.log("update request - params:", req.params);
    console.log("update request - body:", req.body);
    const productId = new ObjectId(req.body._id);
    const product = req.body;
    const response = await db.collection("products").updateOne(
      { _id: productId },
      {
        $set: {
          id: product.id,
          name: product.name,
          price: product.price,
          imageUrl: product.imageUrl,
        },
      }
    );
    res.json(response);
  }); */

  // Delete product
  /* app.delete("/api/products/:productId", async (req, res) => {
    const productId = new ObjectId(req.params.productId.toString());

    const product = await db
      .collection("products")
      .deleteOne({ _id: productId });
    res.json(product);
  }); */


  // Get intems in cart from user.
  /* app.get("/api/users/:userId/cart", async (req, res) => {
    const user = await db
      .collection("users")
      .findOne({ id: req.params.userId });
    console.log("user = ", user);
    const populateCart = await poppulateCartIds(user.cartItems);
    console.log("populateCart = ", populateCart);
    res.json(populateCart);
  }); */

  // Insert item in products list.
  /* app.post("/api/users/:userId/cart", async (req, res) => {
    const userId = req.params.userId;
    const productId = req.body.id;
    await db.collection("users").updateOne(
      { id: userId },
      {
        $addToSet: { cartItems: productId },
      }
    );

    //  Note: both of push & add to set were added data but they are quit different in the same term.
    // $push = add duplicate item.
    // $addToSet = add non duplicate data that's mean if user add the same item which ever stored in the cart. it won't change any at all 
    
    const user = await db
      .collection("users")
      .findOne({ id: req.params.userId });

    const populateCart = await poppulateCartIds(user.cartItems);

    res.json(populateCart);
  }); */

  // Delete item from cart.
  /* app.delete("/api/users/:userId/cart/:productId", async (req, res) => {
    const userId = req.params.userId;
    const productId = req.params.productId;

    await db.collection("users").updateOne(
      { id: userId },
      {
        $pull: { cartItems: productId },
      }
    );

    const user = await db
      .collection("users")
      .findOne({ id: req.params.userId });

    const populateCart = await poppulateCartIds(user.cartItems);

    res.json(populateCart);
  }); */

  // Create server at port 8000
  app.listen(8000, () => {
    console.log("Server is listening on port 8000");
  });
}
//------------------
start();
