const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/sumar', (req, res) => {
    const { num1, num2 } = req.body;
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Datos inválidos" });
    }
    const resultado = num1 + num2;
    res.json({ resultado });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});