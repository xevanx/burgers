var connection = require('./connection.js');

var orm = {

    selectAll: function(callback) {
        var s = "SELCET * FROM " + tableName;

        connection.query(s, function(err, result) {
            callback(result);
        });
    },

    insertOne: function(name, callback) {
        var s = "SELECT * FROM " = tableName + " WHERE routeName=?";

        connection.query(s, [name], function(err, result) {
            callback(result);
        });
    },

    updateOne: function(burger, callback) {
        var routeName = burger.name.replace(/\s+/g, "").toLowerCase();
        console.log(routeName);

        var s = "INSERT INTO " + tableName + " (routeName, burger) VALUES (?,?)";

        connection.query(s, [routeName, burger.name], function (
            err,
            result){
                callback(result);
            });
        }
    };
    moduels.exports = orm;