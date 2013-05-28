var $ = require('jquery').create(),
    http = require('http'),
    cheerio = require('cheerio');

// communication.js
// ========
module.exports = {
    request: function (links, complete) {
//        $.ajax('http://www.enjoypping.com')
//            .done(function(data){
//                //console.log(data);
//                console.log($('#searchResult', data).html());
//            })
//            .fail(function(){
//                alert('error')
//            });
        var options = {
            host: 'www.enjoypping.com',
            port: 80,
            path: '/Search?searchText=212',
            method: 'GET'
        };
        var str = '';
        var callback = function(response) {
            response.on('data', function (chunk) {
                str += chunk;
            });

            response.on('end', function () {
                var c = cheerio.load(str);
                console.log(c('.item .product-name a').text());
                console.log($('.item .product-name a', str).text());
                //console.log(str);
            });
        }

        var req = http.request(options, callback).end();
    }
};