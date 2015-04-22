/**
 * @author Michael Raith
 * @email  michael.raith@bcmsolutions.de
 * @date   20.04.2015 11:34
 */

var spur = require('spur-ioc');
var config = require('config');

var RedisRpc = require('node-redis-rpc');
var redisRpcInstance = new RedisRpc(config.get('redis'));

module.exports = function () {
    'use strict';

    var ioc = spur.create('multiple-node-instances');

    ioc.registerDependencies({
        // General utils
        '_'               : require('lodash'),
        'console'         : console,
        'nodeProcess'     : process,

        // ExpressJS middleware
        'express'         : require('express'),
        'methodOverride'  : require('method-override'),
        'cookieParser'    : require('cookie-parser'),
        'bodyParser'      : require('body-parser'),
        'config'          : config,

        // Postal inter process middleware
        'redisRpc'     : redisRpcInstance
    });

    ioc.registerFolders(__dirname, [
        'runtime',
        'submodules'
    ]);

    return ioc;
};
