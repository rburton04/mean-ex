// app/routes.js

// get the task model
var Task = require('./models/tasks');

// make the routes available to our application with module.exports
module.exports = function(app) {
    // application -------------------------------------------------------------
    // the default route for our application that serves the index.html
    app.get('*', function(req, res) {
        res.sendFile('./public/index.html', { root: __dirname });
    });

};
