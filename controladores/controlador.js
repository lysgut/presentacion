const datos = 12

exports.index = (req, res) => {
    res.status(200).render('index', {datos: datos});
    };

exports.inicio = (req, res) => {
        res.status(200).render('inicio');
        };

        exports.carac = (req, res) => {
            res.status(200).render('carac');
            };

            exports.personas = (req, res) => {
                res.status(200).render('personas');
                };