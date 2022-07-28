module.exports = function () {
    this.getUsuario = function (connection, callback) {
        connection.query('select * from usuario', callback);
    }
    this.getUsuario = function (connection, callback) {
        connection.query('select * from usuario', callback);
    }/* WHERE id_Usuario=1 */
    this.salvarUsuario = function (usuario, connection, callback) {
        connection.query('insert into usuario SET ?', usuario, callback);
    }
    return this;
} 