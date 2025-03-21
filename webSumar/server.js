const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Ruta para sumar números
app.post('/sumar', (req, res) => {
    const { num1, num2 } = req.body;

    // Validar entrada
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ error: "Los valores deben ser números" });
    }

    const resultado = num1 + num2;
    res.json({ resultado });
});

// Mantener activa la API con un endpoint de prueba
app.get('/', (req, res) => {
    res.send('API de suma funcionando');
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});