module.exports = function (console) {
    'use strict';

    return {
        log: function () {
            console.log.apply(console, arguments);
        },
        info: function () {
            console.info.apply(console, arguments);
        },
        debug: function () {
            console.debug.apply(console, arguments);
        },
        warn: function () {
            console.warn.apply(console, arguments);
        },
        error: function () {
            console.error.apply(console, arguments);
        }
    };
};
