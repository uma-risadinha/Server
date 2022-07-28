module.exports = function (app) {
    app.get('/informacao/usuario', function (req, res) {
        res.render('informacao/usuario');
    });
}


module.exports = function (app) {
    app.get('/informacao/usuario', function (req, res) {
        var connection = app.config.dbConnections();
        var usuarioModel = app.models.usuarioModel;// variável que recupera a função exporta
        //executar a função
        // tem passar a conexao e o callback
        usuarioModel.getUsuario(connection, function (error, results) {
            res.render('informacao/Usuario', { usu: results });
        });
    });
}