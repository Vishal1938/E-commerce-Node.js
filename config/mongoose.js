const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const db = () => {
    mongoose.connect("mongodb+srv://Vipin:VIP95in04@cluster0.zwij1ed.mongodb.net/Ecommerce_API", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((con) => {
        console.log(`MongoDB database with host :: ${con.connection.host}`)
    })
};

module.exports = db;