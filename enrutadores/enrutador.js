const controlador = require('../controladores/controlador');
const express = require('express');
const enrutador = express.Router();
router.route('/').get(controlador.inicio);

module.exports = enrutador;