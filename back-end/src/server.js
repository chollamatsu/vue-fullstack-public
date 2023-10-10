import express from "express";
import { MongoClient } from "mongodb"; //Is a class that we can create new instances of
// import mongoose from "mongoose";
import path from "path";

// file upload
const multer = require("multer");
// const monogoose = require("mongoose");

// Config Multer to store uploaded files in a folder
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "assets"); // the image will be stored in assets folder
  },
  filename: (req, file, callback) => {
    // Generate unique filename
    const ext = path.extname(file.originalname);
    callback(null, Date.now() + ext);
  },
});
const upload = multer({ storage });

async function start() {
  //เราจะได้ connect mongo db in once แค่ที่เดียวตอนที่เข้า function instead of connect db of every endpoints.

  // Crate new instance
  const url = `mongodb oauth`;
  const client = new MongoClient(url);
  //------------------

  // Connect to mongo db
  await client.connect();
  const db = client.db("fsv-db");
  //------------------
  // Start running application?
  const app = express();
  app.use(express.json());
  //------------------

  app.use("/images", express.static(path.join(__dirname, "../assets")));
  // Define mongodb schema for data validation, type checking, structure code, schema evolution( for handle schema migrate)
  // const Schema = monogoose.Schema;
  // const itemSchema = new Schema({
  //   id: String,
  //   name: String,
  //   price: String,
  //   imageUrl: String,
  // });

  // const Item = mongoose.model("Item", itemSchema);

  // File upload
  app.post("/api/upload", upload.single("image"), (req, res) => {
    console.warn("file upload - req:", req);
    console.warn("file upload - req body:", req.body);
    console.warn("file upload - req file name:", req.file);
  });
  // Make static path
  // Tell express that we would like to serve files from assets folder.
  app.use("/images", express.static(path.join(__dirname, "../assets")));

  //------------------
  /* When we request to the server at port '8000' then the server will trigger to this logic below and response to request at the client side and display on browser */

  // Part of functions
  async function poppulateCartIds(ids) {
    return Promise.all(
      ids.map((id) => db.collection("products").findOne({ id }))
    );
    // return ids.map((id) => products.find((product) => product.id === id));
  }

  //------------------

  // Part of EndPoint => API

  // Get all products.
  app.get("/api/products", async (req, res) => {
    const products = await db.collection("products").find({}).toArray(); //add to array because Node.js doesn't give us an array
    res.send(products);
  });

  // Get Each product.
  app.get("/api/products/:productId", async (req, res) => {
    const productId = req.params.productId;
    //   const product = products.find((product) => product.id === productId);
    const product = await db.collection("products").findOne({ id: productId });
    res.json(product);
  });

  // Get intems in cart from user.
  app.get("/api/users/:userId/cart", async (req, res) => {
    const user = await db
      .collection("users")
      .findOne({ id: req.params.userId });
    console.log("user = ", user);
    const populateCart = await poppulateCartIds(user.cartItems);
    console.log("populateCart = ", populateCart);
    res.json(populateCart);
  });

  // Insert item in products list.
  app.post("/api/users/:userId/cart", async (req, res) => {
    const userId = req.params.userId;
    const productId = req.body.id;
    await db.collection("users").updateOne(
      { id: userId },
      {
        $addToSet: { cartItems: productId }, // '$' => just tell mongo db what type of update we would like to perform.
      }
    );

    /* Note: both of push & add to set were added data but they are quit different in the same term.
    $push = add duplicate item.
    $addToSet = add non duplicate data that's mean if user add the same item which ever stored in the cart. it won't change any at all */
    const user = await db
      .collection("users")
      .findOne({ id: req.params.userId });

    const populateCart = await poppulateCartIds(user.cartItems);

    res.json(populateCart);
  });

  // Delete item from cart.
  app.delete("/api/users/:userId/cart/:productId", async (req, res) => {
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
  });

  // Create server at port 8000
  app.listen(8000, () => {
    console.log("Server is listening on port 8000");
  });
}
//------------------
start();
