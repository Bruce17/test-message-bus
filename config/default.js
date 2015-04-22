/**
 * @author Michael Raith
 * @email  michael.raith@bcmsolutions.de
 * @date   20.04.2015 11:47
 */

module.exports = {
    server: {
        port: 3000
    },

    redis: {
        host: 'localhost',
        port: 6379,
        auth: false, // optional password
        scope: 'multiple-instances-test'
    }
};
