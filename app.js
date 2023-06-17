const express = require("express")
const app = express()
const enrutador = require ("./enrutadores/enrutador.js")
const path = require('path');
const port = 11227
app.listen(port, () => {
console.log(`Servidor corriendo en el puerto ${port} correctamente`);
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'vistas'));
app.use(express.static(path.join(__dirname, 'publics')));
app.use('/', enrutador);
app.use('/inicio', enrutador);
app.use('/carac', enrutador);
app.use('/personas', enrutador);