const controlador = require('../controladores/controlador');
const express = require('express');
const enrutador = express.Router();
enrutador.route('/').get(controlador.inicio);

module.exports = enrutador;