/**
 * @author Michael Raith
 * @email  michael.raith@bcmsolutions.de
 * @date   20.04.2015 15:10
 */

var injector = require('../injector');

// Init and start the dependency injection container (IoC)
injector().inject(function (MathMain, Logger) {
    'use strict';

    Logger.info('math server loaded ...');

    MathMain.init();
});
