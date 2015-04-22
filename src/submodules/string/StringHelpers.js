/**
 * @author Michael Raith
 * @email  michael.raith@bcmsolutions.de
 * @date   20.04.2015 14:59
 */

module.exports = function (_) {
    'use strict';

    return {
        /**
         * Repeat and concat a string.
         *
         * @param {Object} args
         * @param {Function} done
         */
        repeat: function (args, done) {
            var str = (_.isString(args.str) ? args.str : '');
            var times = (_.isNumber(args.times) ? args.times : 1);

            var out = '';

            while (--times >= 0) {
                out += str;
            }

            done(null, {str: out});
        },

        /**
         * Trim a string (left, right, both), default: both
         *
         * @param {Object} args
         * @param {Function} done
         */
        trim: function (args, done) {
            var str = (_.isString(args.str) ? args.str : '');
            var direction = args.direction;

            var out = str;

            // ltrim or both
            if (direction === 'left' || !direction) {
                out = out.replace(/^\s+/, '');
            }
            // rtrim or both
            if (direction === 'right' || !direction) {
                out = out.replace(/\s+$/, '');
            }

            done(null, {str: out});
        }
    };
};
