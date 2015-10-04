var Plugin = require('../../../index');
var testController = require('./controller');
var attributes = require('./package.json');
var PluginLoader = Plugin.default;
var config = {
    services: {
        'testController': testController.default
    },
    runs: [
        '%plugins.test-sample-module.testController.failureRun%'
    ],
    attributes: {
        pkg: attributes
    }
};
var plugin = new PluginLoader('test-sample-module', config);
module.exports = plugin;
