/*!
 * Configs module.
 *
 * Copyright (c) 2014 Digital Bazaar, Inc. All rights reserved.
 *
 * @author David I. Lehn
 */
define([
  'angular',
  'app/configs/data',
  'app/configs/site'
], function(angular) {
  // register controllers and gather routes
  var module = angular.module('app.configs', []);
  var configs = Array.prototype.slice.call(arguments, 1);
  var moduleConfig = {};
  angular.forEach(configs, function(config) {
    angular.forEach(config, function(value, key) {
      moduleConfig[key] = value;
    });
  });
  module.value('config', moduleConfig);
});
