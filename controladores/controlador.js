exports.inicio = (req, res) => {
    let datos = 12
    res.status(200).render('index', {datos});
    };