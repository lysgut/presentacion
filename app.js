const app = require("express")
const enrutador = require ("./enrutadores/enrutador.js")
const port = 11227
app.listen(port, () => {
console.log(`Servidor corriendo en el puerto ${port} correctamente`);
});