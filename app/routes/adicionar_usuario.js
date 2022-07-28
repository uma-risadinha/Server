module.exports = function (app) {
    app.get('/admin/adicionar_usuario', function (req, res) {
        res.render("admin/adicionar_usuario");
    });
}
module.exports = function (app) {
    app.get('/admin/adicionar_usuario', function (req, res) {
        res.render('admin/adicionar_usuario');
    });
    app.post('/usuario/salvar', function (req, res) {
        var usu = req.body;
        var connection = app.config.dbConnections();
        var usuarioModel = app.models.usuarioModel();
        //usando uma funcao de callback e informar quem devemos salvar, no caso professor
        usuarioModel.salvarUsuario(usu, connection, function (error, results) {
            // após inserir redireciona o navegador para outra página
            // se der erro na inclusao criar um erro 500 --> nao sabe o que significa
            if (error) {
                console.log('Erro ao inserir no banco:' + error);
                res.status(500).send(error);
            } else {
                console.log('Usuario criado!!!');
                res.redirect('/informacao/Usuario');
            }
        });
    });
} 