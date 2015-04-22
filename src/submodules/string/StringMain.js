/**
 * @author Michael Raith
 * @email  michael.raith@bcmsolutions.de
 * @date   20.04.2015 14:58
 */

module.exports = function (redisRpc, Logger, StringHelpers) {
    'use strict';

    return {
        init: function () {
            redisRpc.on('string:repeat', function (data, channel, done) {
                StringHelpers.repeat(data, done);
            });
            redisRpc.on('string:trim', function (data, channel, done) {
                StringHelpers.trim(data, done);
            });

            Logger.info('string server > listening on rpc calls ...');
        }
    };
};
