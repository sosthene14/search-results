require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const mongoUrl = process.env.MONGO_URL;
const port = 3030;

function connectToDatabase() {
  mongoose
    .connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {})
    .catch((error) => {});
}

const User = require("./schema2");

app.get("/returnSearchResults/:id", async (req, res) => {
  const id = req.params.id;
  const user = await User.findOne({ _id: id });
  if (user) {
    const titre = user.titre;
    const lien_image = user.lien_image;
    const lien_de_telechargement = user.lien_de_telechargement;
    const nombre_de_likes = user.nombre_de_likes;
    const date_de_publication = user.date_de_publication;
    const id_ = user._id;
    const alt = user.alt;
    const likes_api = user.likes_api;

    res.send({
      titre: titre,
      alt: alt,
      likes_api: likes_api,
      id: id_,
      lien_image: lien_image,
      lien_de_telechargement: lien_de_telechargement,
      nombre_de_likes: nombre_de_likes,
      date_de_publication: date_de_publication,
    }); // Perform the search
  } else {
  }
});
// Function to perform the search

async function startServer() {
  await connectToDatabase();
  app.listen(port, () => {
    console.log(port);
  });
}

startServer();
