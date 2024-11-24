const express = require('express');
const config = require('./config.js');
const routes = require("./routes/route.js"); // Importo el archivo de rutas desde la carpeta routes


const app = express();

// Middleware para analizar JSON en el cuerpo de las solicitudes
app.use(express.json());

// Configurar el puerto
app.set('port', config.app.port);

// Usar las rutas definidas en routes/routes.js
app.use("/api", routes);

module.exports = app;