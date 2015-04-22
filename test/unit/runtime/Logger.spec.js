/**
 * @author Michael Raith
 * @email  michael.raith@bcmsolutions.de
 * @date   20.04.2015 13:37
 */

/* global injector:false */

describe('Logger', function () {
    'use strict';

    beforeEach(function () {
        var self = this;
        var ioc = injector(); // loaded via "setup.js"

        // Mock default console
        this.mockConsole = {
            logs: {},
            _pushLog: function (type, args) {
                if (!this.logs[type]) {
                    this.logs[type] = [];
                }

                this.logs[type].push(args);
            },

            log: function () {
                this._pushLog('log', arguments);
            },
            info: function () {
                this._pushLog('info', arguments);
            },
            debug: function () {
                this._pushLog('debug', arguments);
            },
            warn: function () {
                this._pushLog('warn', arguments);
            },
            error: function () {
                this._pushLog('error', arguments);
            }
        };
        ioc.addDependency('console', this.mockConsole, true);

        // Get reference to the logger service
        ioc.inject(function (Logger) {
            self.Logger = Logger;
        });
    });


    it('should exist', function () {
        expect(this.Logger).to.exist;
    });

    it('should log (log) with console object', function () {
        this.Logger.log('hello');
        expect(this.mockConsole.logs.log[0][0]).to.equal('hello');

        this.Logger.log('world');
        expect(this.mockConsole.logs.log[1][0]).to.equal('world');
    });

    it('should log (info) with console object', function () {
        this.Logger.info('foo-1');
        expect(this.mockConsole.logs.info[0][0]).to.equal('foo-1');

        this.Logger.info('bar-1');
        expect(this.mockConsole.logs.info[1][0]).to.equal('bar-1');
    });

    it('should log (debug) with console object', function () {
        this.Logger.debug('foo-2');
        expect(this.mockConsole.logs.debug[0][0]).to.equal('foo-2');

        this.Logger.debug('bar-2');
        expect(this.mockConsole.logs.debug[1][0]).to.equal('bar-2');
    });

    it('should log (warn) with console object', function () {
        this.Logger.warn('foo-3');
        expect(this.mockConsole.logs.warn[0][0]).to.equal('foo-3');

        this.Logger.warn('bar-3');
        expect(this.mockConsole.logs.warn[1][0]).to.equal('bar-3');
    });

    it('should log (error) with console object', function () {
        this.Logger.error('foo-4');
        expect(this.mockConsole.logs.error[0][0]).to.equal('foo-4');

        this.Logger.error('bar-4');
        expect(this.mockConsole.logs.error[1][0]).to.equal('bar-4');
    });
});
