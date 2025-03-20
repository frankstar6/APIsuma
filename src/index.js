// //const morgan = require("morgan");

// const express = require(exports);
// const app = express();
// const morgan = require(morgan);

// //configuracion del servidor en el puerto 3000
// app.set('port', process.env.PORT || 3000);
// app.set('json spaces', 2);

// //MiddleWare
// //investigar que es MiddleWare para mostar resultados o para jeuctar otro proceso que comunica dos funciones
// //funcion que recibe el resultado de la funcion para que los procesos reciban esa funcion
// //la salida de la funcion que esta el medio de funcion middle ware funcion 3 la del medio "funcion middle ware" para que funcionen los 1 y 3
// //para ejecutar todas las peticiones de express para que tengan la salidad json los mensajes los saca de salid json morgan lo que saque
// app.use(morgan('dev'));
// app.use(express.urlencodd({extended:false}));
// app.use(express.json()); 

// //nuestro primer web service '/' el directorio raiz donde lo va a levantar cuando se escribe
// app.get('/', (req, res)=>{
//     res.json(
//         {
//             "mensaje": "esta es mi primer api"
//         }
//     );
// });

// //iniciando el servidor
// app.listen(app.get('port'), ()=>{
//     console.log('Servidor localhost en puerto 3000');
// });
// Importación de módulos
// const express = require("express");
// const morgan = require("morgan");

// const app = express();

// // Configuración del servidor
// app.set("port", process.env.PORT || 3000);
// app.set("json spaces", 2);

// // Middleware
// app.use(morgan("dev"));
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// // Ruta principal
// app.get("/", (req, res) => {
//   res.json({
//     mensaje: "Esta es mi primera API",
//   });
// });

// // Iniciando el servidor
// app.listen(app.get("port"), () => {
//   console.log(`Servidor corriendo en el puerto ${app.get("port")}`);
// });

// //enpoint ara sumar dos numeros
// app.post('/sumar', (req, res)=>{
//   const { num1, num2 } = req.body;

//   //validar que se hayan los dos numeros que no esten vacio
//   if(!num1 || num2){
//     return res.status(400).send({error: 'Faltan numeros para sumar'});
//   }

//   //sumar los numeros
//   const resultado = num1 + num2;

//   //enviar el resultado
//   res.send({resultado})
// });

// //inciando el servidor
// app.listen(app.set('port'), () =>{
//   console.log(`Servidor corriendo en el puerto ${app.get("port")}`)
// });

const express = require('express');
const app = express();
const morgan = require('morgan');


app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2); 

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false })); 
app.use(express.json());

// Nuestro primer web service
app.get('/', (req, res) => {
    res.json({
        "mensaje": "Hola soy Hernandez Camero Atlai"
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
app.post('/area', (req, res) => {
  const {base , altura} = req.body;
  if (base == undefined || altura == undefined){
    return res.status(400).send({ error: "Faltan de agregar numeros, proporcione base y altura"});
  }

  if(isNaN(base) || isNaN(altura)){
    return res.status(400).send({ error: "Base y Altura tienen que ser numeros"});
  }
  //operacion
  const medio = 0.5;
  const operacion = medio * Number(base) * Number(altura);
  //enviar operacion
  res.json({area: operacion})
}); 

// Iniciando el servidor
app.listen(app.get('port'), () => {
  console.log(`Servidor corriendo en el puerto ${app.get("port")}`)
});