const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const db = () => {
    mongoose.connect("mongodb+srv://Vishal:SIP87in04@cluster0.zwij1ed.mongodb.net/Ecommerce_API", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((con) => {
        console.log(`Hosted mongodb Database at :: ${con.connection.host}`)
    })
};

module.exports = db;