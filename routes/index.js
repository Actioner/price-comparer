
/*
 * GET home page.
 */

exports.index = function(req, res, communication){
    var request = communication.request();

    //res.write(request);
    res.render('index', { title: 'Express' });
};