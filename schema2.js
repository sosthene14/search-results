const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
        alt: String,
        lien_de_telechargement: String,
        lien_image: String,
        nombre_de_likes: Number,
        titre: String,
        date_de_publication : Date,
        likes_api: String,
});
const model = mongoose.model(process.env.DB_NAME,Schema,process.env.CLUSTER);
module.exports = model;
