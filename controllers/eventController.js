const db = require('../config/db');

exports.getAllEvents = (req, res) => {
    db.query('SELECT * FROM events', (err, results) => {
        if (err) return res.status(500).json({ message: 'Error al obtener eventos' });
        res.json(results);
    });
};

exports.createEvent = (req, res) => {
    const { nombre, descripcion, fecha, ubicacion, tipoDeporte } = req.body;
    const organizador = req.user.username;

    db.query(
        'INSERT INTO events (nombre, descripcion, fecha, ubicacion, tipoDeporte, organizador) VALUES (?, ?, ?, ?, ?, ?)',
        [nombre, descripcion, fecha, ubicacion, tipoDeporte, organizador],
        (err) => {
            if (err) return res.status(500).json({ message: 'Error al crear evento' });
            res.status(201).json({ message: 'Evento creado exitosamente' });
        }
    );
};
