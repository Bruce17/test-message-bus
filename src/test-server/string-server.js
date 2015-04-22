/**
 * @author Michael Raith
 * @email  michael.raith@bcmsolutions.de
 * @date   20.04.2015 15:10
 */

var injector = require('../injector');

// Init and start the dependency injection container (IoC)
injector().inject(function(StringMain, Logger){
    'use strict';

    Logger.info('string server loaded ...');

    StringMain.init();
});
