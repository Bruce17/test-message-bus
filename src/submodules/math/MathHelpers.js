/**
 * @author Michael Raith
 * @email  michael.raith@bcmsolutions.de
 * @date   20.04.2015 14:47
 */

module.exports = function (_) {
    'use strict';

    return {
        /**
         * Generate a random number.
         *
         * @param {Object} args
         * @param {Function} done
         */
        random: function (args, done) {
            var len = args.len || 8;
            var id = ('' + Math.pow(10, len) * Math.abs(Math.random())).substring(0, len);

            done(null, {id: id});
        },

        /**
         * Sum up two numbers.
         *
         * @param {Object} args
         * @param {Function} done
         */
        add: function (args, done) {
            var left = _.isNumber(args.left) ? args.left : 0;
            var right = _.isNumber(args.right) ? args.right : 0;

            done(null, {num: (left + right)});
        },

        /**
         * Generate the product of two numbers
         *
         * @param {Object} args
         * @param {Function} done
         */
        product: function (args, done) {
            var left = _.isNumber(args.left) ? args.left : 0;
            var right = _.isNumber(args.right) ? args.right : 0;

            done(null, {num: (left * right)});
        }
    };
};
