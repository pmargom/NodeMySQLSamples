var express = require('express');
var util = require('util');
var service = require('./service');

module.exports = function() {
    var router = express.Router();

    router.get('/', function(req, res, next) {
        
        var term = req.query.term || '';
        //var url = util.format('https://itunes.apple.com/search?term=%s&limit=%s&entity=%s&', term,10,'ebook');
        //var url = util.format('https://itunes.apple.com/search?term=%s&limit=%s&entity=%s', term,10,'all');
        var url = util.format('https://itunes.apple.com/search?term=%s&limit=%s', term,10);
        console.log(url);
        
        service.get(url)
            .then((results) => {
                res.json({
                    error: '',
                    data: JSON.parse(results)
                });
            })
            .catch((err) => {
                res.json({
                    error: err,
                    data: []
                });
            });

    });

    return router;
};