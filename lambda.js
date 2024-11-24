const express = require('express');
const serverless = require('serverless-http');
const app = require('./src/app'); // Importa tu app existente

module.exports.handler = serverless(app); // Exporta el manejador para AWS Lambda