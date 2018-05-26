    var express = require('express');
    var bodyParser = require('body-parser');
    var path = require('path');

    var app = express();

    app.use(express.static(path.join(__dirname +'/public')));

    app.all('/', (req, res) => {
        console.log('got here');
        res.sendFile(path.join(__dirname+'/public/index.html'));
        res.end();
    });

    //-----------ERROR HANDLING-------------------

    app.use('/', function(req, res, next) {
      var err = new Error('Not Found');
      err.status = 404;
      next(err);
    });

    app.use('/', (err, req, res, next) =>{
        console.log(err);
        var error={
            'message': err.message,
            'status':err.status,
            'stack':err.stack,
        }
        res.send(error);
    });

    var port = process.env.PORT || 3000;

    var server = app.listen(port, function () {
        console.log('Server running at http://127.0.0.1:' + port + '/');
    });

