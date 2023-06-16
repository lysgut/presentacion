exports.index = (req, res) => {
    const datos = 12
    res.status(200).render('index', {datos: datos});
    };

exports.inicio = (req, res) => {
        res.status(200).render('index');
        };