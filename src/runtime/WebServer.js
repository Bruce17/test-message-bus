/**
 * @author Michael Raith
 * @email  michael.raith@bcmsolutions.de
 * @date   20.04.2015 11:36
 */

module.exports = function (express, Logger, config, bodyParser, cookieParser, methodOverride) {
    'use strict';

    function WebServer() {}

    WebServer.prototype = {
        start: function (next) {
            next = next || function () {};

            var app = express();
            this.app = app;

            app.use(bodyParser.json());
            app.use(methodOverride());
            app.use(bodyParser.urlencoded({extended: false}));
            app.use(cookieParser());
            //app.set('views', path.join(__dirname, '../views'));
            //app.set('view engine', 'jade');


            app.get('/', function (req, res) {
                res.send('Hello World!');
            });

            this.server = app.listen(config.get('server.port'), function () {
                Logger.log('express started on port ' + config.get('server.port'));
                next();
            });
        },

        stop: function (next) {
            next = next || function () {};

            if (this.server && this.server.close) {
                this.server.close(next);
            }
            else {
                next();
            }
        }

    };

    return new WebServer();
};
