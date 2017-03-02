var express = require('express');
var mysql = require('mysql');
var config = require('./database/config');

module.exports = function() {
    var router = express.Router();

    router.get('/', function(req, res, next) {

        var connection = mysql.createConnection(config.database);

        connection.connect();
        console.log('Connected to database');

        connection.query('SELECT * FROM libros', function (error, results, fields) {
        if (error) throw error;
            //console.log('The solution is: ', results);
            res.json({
                val1: 1,
                val2: 2,
                data: results
            });      
        });

        connection.end();
        console.log('Connection ended.');

    });

    return router;
};