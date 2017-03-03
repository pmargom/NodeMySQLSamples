var express = require('express');
var fs = require('fs');

module.exports = function() {
    var router = express.Router();

    router.get('/', function(req, res, next) {
        
        var jsonSample;
        fs.readFile('./api/json-samples/itunes.json', 'utf8', function (err, data) {
            console.log('reading json...');

            if (err) throw err;
            jsonSample = JSON.parse(data);

            res.json({
                data: jsonSample
            });
        });

    });

    return router;
};