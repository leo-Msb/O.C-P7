// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const bookRoutes = require("./routes/book");
// const bodyParser = require("body-parser");
// const cors = require("cors");


// const Book = require("./models/book");

// const bookRoutes = require("./routes/book");
// const userRoutes = require("./routes/user");

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(cors());


// mongoose
//   .connect(
//     "mongodb+srv://DemoUser:DemoPass@atlascluster.uhn2qkr.mongodb.net/?retryWrites=true&w=majority",
//     { useNewUrlParser: true, useUnifiedTopology: true }
//   )
//   .then(() => console.log("Connexion à MongoDB réussie !"))
//   .catch(() => console.log("Connexion à MongoDB échouée !"));


// app.get((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PUT, DELETE, PATCH, OPTIONS"
//   );
//   next();
// });


// app.use("/api/books", bookRoutes);
// app.use("/api/auth", userRoutes);
// app.use('/images', express.static(path.join(_dirname, 'images')));

// module.exports = app;