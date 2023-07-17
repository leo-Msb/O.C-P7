require('dotenv').config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

exports.signup = (req, res, next) => {
 
  const email = req.body.email;
  const password = req.body.password;

  if (!email.includes('@')) {
    return res
      .status(400)
      .json({ message: "L'adresse e-mail est invalide." });
  }

  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{15,})/;
  if (!passwordRegex.test(password)) {
    return res
      .status(400)
      .json({ message: "Le mot de passe doit contenir au moins une majuscule, un caractère spécial et avoir une longueur minimale de 15 caractères." });
  }

  bcrypt
    .hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        email: req.body.email,
        password: hash,
      });
      console.log(user);
      user
        .save()
        .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
  User
    .findOne({ email: req.body.email })
    .then(user => {
      if (user === null) {
        res
          .status(401)
          .json({ message: "mot de passe incorrecte !" });
      } else {
        bcrypt
          .compare(req.body.password, user.password)
          .then(valid => {
            if (!valid) {
              res.status(401).json({
                message: "Paire indentifiant",
              });
            } else {
              res.status(200).json({
                userId: user._id,
                token: jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
                  expiresIn: "12h",
                }),
              });
            }
          })
          .catch((error) => {
            res.status(500).json({ error });
          });
      }
    })
    .catch((error) => res.status(500).json({ error }));
};
