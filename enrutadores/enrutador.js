const controlador = require('../controladores/controlador');
const express = require('express');
const enrutador = express.Router();
enrutador.route('/').get(controlador.index);
enrutador.route('/inicio').get(controlador.inicio);
enrutador.route('/carac').get(controlador.carac);
enrutador.route('/personas').get(controlador.personas);
module.exports = enrutador;