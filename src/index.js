
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

const PORT = process.env.PORT || 3001;
app.set('json spaces', 2); 

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false })); 
app.use(express.json());

// Nuestro primer web service
app.get('/', (req, res) => {
    res.json({
        "mensaje": "mi primer api"
    }
  );
});

app.post('/sumar', (req, res) => { //http://localhost/sumar
    const { num1, num2 } = req.body; // El req.body está esperando los números

    // Validar que se hayan enviado los dos números y que no estén vacíos
    if (num1 === undefined || num2 === undefined) {
        return res.status(400).send({ error: 'Faltan números para sumar' });
    }

    // Sumar los números (asegurando que sean convertidos a número)
    const resultado = Number(num1) + Number(num2);

    // Enviar el resultado
    res.send({ resultado });
});

//programar un entepoint que calcule el area de un triangulo
//app.post('/area', (req, res) => {
  //const {base , altura} = req.body;
  //if (base == undefined || altura == undefined){
    //return res.status(400).send({ error: "Faltan de agregar numeros, proporcione base y altura"});
  //}

  //if(isNaN(base) || isNaN(altura)){
    //return res.status(400).send({ error: "Base y Altura tienen que ser numeros"});
  //}
  //operacion
  //const medio = 0.5;
  //const operacion = medio * Number(base) * Number(altura);
  //enviar operacion
  //res.json({area: operacion})
//}); 

// Iniciando el servidor
//app.listen(app.get('port'), () => {
  //console.log(`Servidor corriendo en el puerto ${app.get("port")}`)
//});