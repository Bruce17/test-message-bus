/**
 * @author Michael Raith
 * @email  michael.raith@bcmsolutions.de
 * @date   20.04.2015 14:41
 */

module.exports = function (redisRpc, Logger, MathHelpers) {
    'use strict';

    return {
        init: function () {

            redisRpc.on('math:random', function (data, channel, done) {
                MathHelpers.random(data, done);
            });
            redisRpc.on('math:add', function (data, channel, done) {
                MathHelpers.add(data, done);
            });
            redisRpc.on('math:product', function (data, channel, done) {
                MathHelpers.product(data, done);
            });

            Logger.info('math server > listening on rpc calls ...');
        }
    };
};
