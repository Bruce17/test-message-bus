/**
 * @author Michael Raith
 * @email  michael.raith@bcmsolutions.de
 * @date   20.04.2015 15:13
 */

var spawn = require('child_process').spawn;
var path = __dirname;

// Spawn services as separate node instance
var services = [
    'web-server',
    'math-server',
    'string-server'
];

services.forEach(function (service) {
    'use strict';

    var proc = spawn(
        'node',
        [
            path + '/' + service + '.js',
            '--debug=5858',
            '--debug-brk'
        ]
    );

    proc.stdout.pipe(process.stdout);
    proc.stderr.pipe(process.stderr);
});
