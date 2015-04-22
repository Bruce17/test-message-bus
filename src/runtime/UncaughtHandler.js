module.exports = function (nodeProcess, Logger) {
    'use strict';

    return {
        listen: function () {
            nodeProcess.on('uncaughtException', function (err) {
                Logger.error(err);
                nodeProcess.exit(0);
            });
        }
    };
};
