Multiple Node.js instances test
===============================

This is a sample project to check the inter process communication via a bus.

# Setup

## Requirements

You need a local redis instance up and running.
See file `config/default.js` if your redis instance is not running on default configuration.

## Install

```bash
$ npm install
```

## Run tests

```bash
$ npm test
$ gulp test
```

Mocha will load some options via `test/mocha.opts`.
Every test will also run a setup script located in `test/setup.js`.


## File linting

```bash
$ gulp lint
```

## Run watcher

Run a gulp watcher process to restart javascript unit tests on javascript file changes.

```bash
$ gulp watch
```

## Start application to test the inter process communication

```bash
$ npm start
```


# Concept

This application simulates multiple node.js instances and the communication between those instances via bus.
The bus system is implemented via plugins ([node-redis-pubsub](https://www.npmjs.com/package/node-redis-pubsub) and
[node-redis-rpc](https://www.npmjs.com/package/node-redis-rpc)) over redis as a simple pub/sub and rpc queue system.

The base application is located under `src/test-server/app.js`. This file will load and run three node instances:

- web-server.js
- math-server.js
- string-server.js

### math-server.js

A submodule which implements some basic mathematical methods. These methods are registered on the the bus as rpc events.

- _math:random_: generate a random number
- _math:add_: sum up two numbers
- _math:product_: generate the product of two numbers

### string-server.js

A submodule which implements some basic string methods. These methods are registered on the the bus as rpc events.

- _string:repeat_: repeat a string for x-times
- _string:trim_: trim a string left, right or on both sides

### web-server.js

A simple express web server with no special functionality. This web services is used to demonstrate how to initiate a
web service using IoC. The services also calls the rpc request on the message bus and logs the results.


## IoC - inversion of control

This application uses ["IoC"](http://en.wikipedia.org/wiki/Inversion_of_control) ("inversion of control",
a dependency injection pattern) to load external dependencies instead of _require_.
Please read ["IoC"](http://en.wikipedia.org/wiki/Inversion_of_control) and [spur-ioc](https://www.npmjs.com/package/spur-ioc)
first to understand these concepts!
