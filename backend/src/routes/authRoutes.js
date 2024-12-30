const express = require("express");
const { register, login, authenticate } = require("../controllers/authController");

const router = express.Router();

// Rotas públicas
router.post("/register", register);
router.post("/login", login);

// Exemplo de rota protegida
router.get("/protected", authenticate, (req, res) => {
    res.json({ message: `Bem-vindo, ${req.user.username}!` });
});

module.exports = router;
