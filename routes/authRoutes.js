const express = require('express');
const router = express.Router();

// Ruta de registro de usuario (ejemplo)
router.post('/register', (req, res) => {
    res.send('Registrar usuario');
});

// Ruta de login (ejemplo)
router.post('/login', (req, res) => {
    res.send('Iniciar sesión');
});

module.exports = router;
