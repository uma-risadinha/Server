var mysql = require('mysql');
var connMySQL = function () {
    console.log('Conexao com o banco de dados estabelecida!');

    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '5555',
        database: 'site_fatec'
    });
}
// exportando a função e quando chamar a página ele conecta
module.exports = function () {
    console.log('O autoload carregou o módulo de conexão com o bd');
    return connMySQL;
}