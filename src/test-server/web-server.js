/**
 * @author Michael Raith
 * @email  michael.raith@bcmsolutions.de
 * @date   20.04.2015 11:34
 */

var injector = require('../injector');

// Init and start the dependency injection container (IoC)
injector().inject(function (WebServer, UncaughtHandler, Logger, redisRpc) {
    'use strict';

    Logger.info('web server loaded ...');

    WebServer.start();
    UncaughtHandler.listen();

    setTimeout(function () {
        Logger.info('web server > firing some rpc calls ...');

        var printFnc = function (str) {
            return function (err, result) {
                if (err) {
                    Logger.error('error executing "%s"', str, err.msg);
                }
                else {
                    Logger.log(str, result);
                }
            };
        };

        redisRpc.emit(
            'math:random',
            {len: 1337},
            {type: 'rpc', callback: printFnc('math random')}
        );
        redisRpc.emit(
            'math:add',
            {left: 3, right: 4},
            {type: 'rpc', callback: printFnc('math add')}
        );
        redisRpc.emit(
            'math:product',
            {left: 3, right: 4},
            {type: 'rpc', callback: printFnc('math product')}
        );

        redisRpc.emit(
            'string:repeat',
            {str: 'foo', times: 10},
            {type: 'rpc', callback: printFnc('string repeat')}
        );
        redisRpc.emit(
            'string:trim',
            {str: ' \n foo \t '},
            {type: 'rpc', callback: printFnc('string trim (both)')}
        );
        redisRpc.emit(
            'string:trim',
            {str: ' \n foo \t ', direction: 'left'},
            {type: 'rpc', callback: printFnc('string trim (left)')}
        );
        redisRpc.emit(
            'string:trim',
            {str: ' \n foo \t ', direction: 'right'},
            {type: 'rpc', callback: printFnc('string trim (right)')}
        );
    }, 1000);
});
